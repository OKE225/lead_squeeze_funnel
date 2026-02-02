import Image from "next/image";
import React from "react";
import ebook from "@/public/ebook.jpg";

const ProductImage = () => {
  return (
    <div className="w-full sm:w-80 lg:w-[30%] max-w-md mx-auto lg:mx-0">
      <Image
        src={ebook}
        alt="ebook"
        className="rounded-lg shadow-xl w-full h-auto object-cover draggable-false"
        draggable="false"
        priority
      />
    </div>
  );
};

export default ProductImage;
