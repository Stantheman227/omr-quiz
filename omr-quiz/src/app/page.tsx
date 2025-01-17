import React from "react";
import Image from "next/image";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gray-300">
      <Header />
      <div className="bg-red p-[50px]">
        {" "}
        <h1 className="font-omr-sans text-[50px]">
          Willkommen zur Bewerbungsaufgabe für OMR - von Piotr Gosiewski
        </h1>
        <p className="font-omr-sans text-[35px]">
          Folgend erwartet euch ein Quiz zu verschiedenen Themen in und rund um
          Hamburg. Dabei geht es um bekannte Foodspots, Perosnen,
          Sehenswürdigkeiten, kulturelle Orte oder die besten Clubs zum feiern.
          Eure Meinung ist wichtig. Am Ende jeder Frage erwartet euch Außerdem
          meine Antwort, diese wird Lila hinterlegt sein. Somit habt auch ihr
          die Chance noch einen etwas größeren Einblick in mich als Menschen zu
          gewinnen. Ich bin gespannt auf eure Antworten! Let's go!
        </p>
      </div>
    </main>
  );
}
