import Image from "next/image";
import React from "react";
import ebook from "@/public/ebook.jpg";

const ProductImage = () => {
  return (
    <Image
      src={ebook}
      alt="ebook"
      className="rounded-lg shadow-xl w-[30%] max-w-100"
      draggable="false"
    />
  );
};

export default ProductImage;
