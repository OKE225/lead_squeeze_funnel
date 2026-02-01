"use server";

import "dotenv/config";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import path from "path";

interface NodemailerError extends Error {
  code?: string;
  response?: string;
  responseCode?: number;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const html = readFileSync(
  path.join(process.cwd(), "emailMessage/message.html"),
  "utf-8",
);

export const sendMessage = async (clientEmail: string) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: clientEmail,
    subject: "Twój ebook już jest!",
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email wysłany:", info.messageId);
    return true;
  } catch (error) {
    const err = error as NodemailerError;
    console.error("❌ Błąd Nodemailer:", err.code, err.message);
    throw error;
  }
};
