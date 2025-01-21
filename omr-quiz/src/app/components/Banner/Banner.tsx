import React from "react";

export default function Banner() {
  return (
    <main>
      <div className="relative w-full bg-omr-purple p-14">
        {" "}
        <div className="flex flex-col space-y-5 container mx-auto">
          <div className="flex space-y-1 flex-col">
            <h1 className="relative w-fit text-3xl text-black bg-white z-10 font-sans-extra-bold uppercase p-1">
              Get To know me - quiz
            </h1>
            <h2 className="relative w-fit text-3xl text-black bg-white z-10 font-sans-extra-bold uppercase p-1">
              Piotr Gosiewski
            </h2>
          </div>
          <p className="relative text-base text-white z-10">
            Moin Emily, Kaya, Leon, Christoph und all die andern! <br />
            In diesem Quiz geht es darum zu erraten, welche Antwort ich wohl
            wählen würde. <br />
            Essen wir bald mal zusammen oder ist meine Wahl für euch ein no-go?{" "}
            <br />
            Let's find out - Viel Spaß!
          </p>
        </div>
        {/* Banner */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-omr-purple-light opacity-90 z-0" />
          <div className="absolute left-1/4 -top-6 h-24 w-24 rounded-full bg-omr-purple-light opacity-85 z-0" />
          <div className="absolute right-1/3 bottom-0 h-40 w-40 rounded-full bg-omr-purple-light opacity-75 z-0" />
          <div className="absolute -left-16 top-1/4 h-48 w-48 rounded-full border-[8px] border-omr-purple-light opacity-80 z-0" />
          <div className="absolute -right-24 top-1/2 h-[400px] w-[400px] rounded-full border-[24px] border-omr-purple-light opacity-80 z-0" />
          <div className="absolute left-1/3 -bottom-8 h-28 w-28 rounded-full border-[10px] border-omr-purple-light opacity-95 z-0" />
        </div>
      </div>
    </main>
  );
}
