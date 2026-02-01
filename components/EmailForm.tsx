"use client";

import { sendContactEmail } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export interface EmailFormState {
  error: string;
  success?: boolean;
}

const EmailForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, formAction] = useActionState<EmailFormState, FormData>(
    sendContactEmail,
    {
      error: "",
    },
  );

  const router = useRouter();

  useEffect(() => {
    if (state.success) router.push("/success");
  }, [state.success, router]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <form action={formAction} className="mt-25">
      <section className="h-25">
        <label
          htmlFor="email"
          className="block text-white text-xl tracking-wide mb-1">
          Podaj Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`w-full block border-2 rounded-md p-4 shadow-md focus-visible:outline-none focus-visible:outline-hidden   
        ${
          state.error
            ? "bg-red-950 border-red-900 placeholder:text-red-800 text-red-500 focus-visible:border-red-800"
            : "bg-zinc-800 border-zinc-700 placeholder:text-zinc-400 focus-visible:border-zinc-600"
        }`}
          value={inputValue}
          onChange={handleInput}
          placeholder="twoj@email.com"
          required
        />
        {state.error && (
          <p className="font-medium text-red-600 text-md">{state.error}</p>
        )}
      </section>
      <button
        type="submit"
        className="w-full bg-linear-to-r from-orange-400 via-red-400 to-pink-500 text-white font-bold text-xl mt-5 py-4 tracking-wide rounded-md cursor-pointer hover:from-orange-500 hover:via-red-500 hover:to-pink-600">
        Pobierz Ebook za Darmo Teraz!
      </button>
    </form>
  );
};

export default EmailForm;
