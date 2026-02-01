"use server";

import "dotenv/config";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import path from "path";

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
  return transporter.sendMail(
    {
      from: process.env.GMAIL_USER,
      to: clientEmail,
      subject: "Twój ebook już jest!",
      html,
    },
    (error, info) => {
      if (error) console.error(`Error: ${error}`);
      else console.log(`Email sent: ${info.response}`);
    },
  );
};
