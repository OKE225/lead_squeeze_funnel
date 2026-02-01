"use server";

import Email from "@/models/Email";
import { sendMessage } from "@/lib/sendMessage";
import { EmailFormState } from "@/components/EmailForm";
import dbConnect from "@/lib/dbConnect";

export const sendContactEmail = async (
  _prevState: EmailFormState,
  formData: FormData,
): Promise<EmailFormState> => {
  await dbConnect();

  const emailRaw = formData.get("email");

  if (typeof emailRaw !== "string" || !emailRaw.trim()) {
    return { error: "Pole email jest wymagane" };
  }

  const email = emailRaw.trim().toLowerCase();

  const emailRegex =
    /^[a-zA-Z0-9]([a-zA-Z0-9._%+-]*?[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) return { error: "Nieprawidłowy format E-maila" };

  const existing = await Email.findOne({ email });
  if (existing) return { error: "Ten email jest już zapisany" };

  const newEmail = new Email({ email });
  await newEmail.save();

  console.log(`Email zapisany: ${email}`);

  try {
    await sendMessage(email);
    console.log(`Email wysłany do: ${email}`);
    return { error: "", success: true };
  } catch (error) {
    console.error(`Błąd wysyłania email: ${error}`);
    return { error: "Błąd wysyłania emaila" };
  }
};
