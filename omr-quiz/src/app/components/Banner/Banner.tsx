import React from "react";

export default function Banner() {
  return (
    <main>
      <div className="w-full relative bg-[#7046D4] p-[50px]">
        {" "}
        <h1 className="relative font-omr-sans text-[50px] text-white z-10">
          Willkommen zur Bewerbungsaufgabe für OMR - von Piotr Gosiewski
        </h1>
        <p className="relative font-omr-sans text-[35px] text-white z-10">
          Folgend erwartet euch ein Quiz zu verschiedenen Themen in und rund um
          Hamburg. Dabei geht es um bekannte Foodspots, Perosnen,
          Sehenswürdigkeiten, kulturelle Orte oder die besten Clubs zum feiern.
          Eure Meinung ist wichtig. Am Ende jeder Frage erwartet euch Außerdem
          meine Antwort, diese wird Lila hinterlegt sein. Somit habt auch ihr
          die Chance noch einen etwas größeren Einblick in mich als Menschen zu
          gewinnen. Ich bin gespannt auf eure Antworten! Let's go!
        </p>
        {/* Banner */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#8055E7] opacity-90 z-0" />
          <div className="absolute left-1/4 -top-6 h-24 w-24 rounded-full bg-[#8055E7] opacity-85 z-0" />
          <div className="absolute right-1/3 bottom-0 h-40 w-40 rounded-full bg-[#8055E7] opacity-75 z-0" />
          <div className="absolute -left-16 top-1/4 h-48 w-48 rounded-full border-[8px] border-[#8055E7] opacity-80 z-0" />
          <div className="absolute -right-24 top-1/2 h-[400px] w-[400px] rounded-full border-[24px] border-[#8055E7] opacity-80 z-0" />
          <div className="absolute left-1/3 -bottom-8 h-28 w-28 rounded-full border-[10px] border-[#8055E7] opacity-95 z-0" />
        </div>
      </div>
    </main>
  );
}
