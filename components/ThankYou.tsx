import React from "react";

const ThankYou = () => {
  return (
    <>
      <h1 className="bg-linear-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent font-black text-6xl pb-1 ">
        Dzięki!
      </h1>
      <h2 className="max-w-[60%] max-lg:max-w-[95%] text-2xl font-medium text-zinc-200 tracking-tight">
        Ebook został wysłany na podany adres email (sprawdź też spam/promocje) i{" "}
        <span className="font-bold text-zinc-50">
          zacznij budować portfolio już teraz!
        </span>
      </h2>
      <ol className="mt-15 list-inside list-decimal text-left text-zinc-100">
        <li>Sprawdź skrzynkę i pobierz ebooka już teraz</li>
        <li>Zacznij budować portfolio już w 48h</li>
        <li>Użyj projektów na rozmowach o pracę</li>
      </ol>
    </>
  );
};

export default ThankYou;
