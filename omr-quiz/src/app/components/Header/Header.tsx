import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full">
      <div className="bg-white px-[50px] py-[18px]">
        <Image
          src="/omr_education_logo.svg"
          width={200}
          height={200}
          alt="omr_logo.svg"
        />
      </div>
    </main>
  );
}
