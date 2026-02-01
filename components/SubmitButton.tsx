import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full text-white font-bold text-xl mt-5 py-4 tracking-wide rounded-md ${!pending ? "bg-linear-to-r from-orange-400 via-red-400 to-pink-500 hover:from-orange-500 hover:via-red-500 hover:to-pink-600 cursor-pointer" : "bg-zinc-800"}`}>
      {!pending ? "Pobierz Ebook za Darmo Teraz!" : "Wysyłanie..."}
    </button>
  );
};

export default SubmitButton;
