import React from "react";
import Form from "next/form";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { IFinishedQuizProps, IQuestion } from "./DataModel";

const doc = new jsPDF();

function printPDF(jsonData: IQuestion[], answerArray: number[]) {
  let yOffset = 10;

  doc.setFontSize(16);
  doc.text("Quiz Ergebnisse:", 10, yOffset);
  yOffset += 10;

  doc.setFontSize(12);
  jsonData.forEach((question, index) => {
    doc.text(`${index + 1}. ${question.question}`, 10, yOffset);
    yOffset += 10;

    const answer = question.options[answerArray[index]] || "Keine Antwort";
    doc.text(`Deine Antwort: ${answer}`, 10, yOffset);
    yOffset += 5;

    doc.text(`Richtige Antwort: ${question.answer}`, 10, yOffset);
    yOffset += 10;
  });

  doc.save("quiz_ergebnisse.pdf");
}

export default function FinishedQuiz({
  jsonData,
  answerArray,
}: IFinishedQuizProps) {
  return (
    <div className="bg-black">
      <div className="pt-16 container mx-auto text-white pb-16">
        <div className="flex flex-row space-x-5 items-center justify-center">
          <div className="flex flex-col">
            <p className="font-sans-extra-bold text-3xl">Quiz beendet!</p>
            <p>
              Herzlichen Glückwunsch du hast es geschafft das Quiz zu beenden!
              <br />
              Was denkst du wie gut hast du abgeschnitten?
              <br />
              Kleiner Spaß, jeder hat seinen eigenen Geschmack und das ist auch
              gut so!
            </p>
          </div>
          <div className="object-contain h-80 w-80 rounded-full overflow-hidden">
            <Image
              src="/finished.jpeg"
              alt="Finished.jpeg"
              width={8495}
              height={5663}
            />
          </div>
        </div>
        <div className="pt-16 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5 p-1 ">
            <p className="font-sans-extra-bold text-4xl">
              Lass dir deine Ergebnisse bequem per Email zukommen <br /> oder
              speichere sie direkt als PDF!
            </p>

            <Form
              className="border-white border-2 flex flex-col p-5 rounded-l items-center justify-center space-x-2"
              action="/sendEmailApi"
            >
              {" "}
              {/* On submission, the input value will be appended to 
            the URL, e.g. /sendEmailApi?email=Max.Mustermann@OMR-Ramp106GmbH.de  => Hier wird dann ein API call eingebaut um die Email zu versenden*/}
              <p>
                Trage deine E-mail ein um die Antwort per E-mail zu erhalten.
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-5 ">
                <input
                  className="bg-gray-100 h-12 w-50 p-2 focus:outline-none placeholder:text-black text-black"
                  placeholder="Dein Vorname"
                />

                <input
                  className="bg-gray-100 h-12 w-50 p-2 focus:outline-none placeholder:text-black text-black"
                  placeholder="Dein Nachname"
                />

                <input
                  name="email"
                  type="text"
                  placeholder="Deine E-mail Adresse"
                  className="p-2 rounded-l h-12 bg-gray-100 w-full col-span-2 focus:outline-none placeholder:text-black text-black"
                />

                <button
                  className="w-fit rounded-l p-2 cursor-pointer bg-omr-purple text-white font-sans-bold col-span-2 text-xl hover:opacity-85"
                  type="submit"
                >
                  Absenden!
                </button>
              </div>
            </Form>

            <div>
              <p>Oder direkt als PDF</p>
              <div className="w-fit bg-gray-300 p-5 rounded-xl flex flex-row items-center justify-center space-x-2 cursor-pointer">
                <button onClick={() => printPDF(jsonData, answerArray)}>
                  Download PDF
                </button>
              </div>
            </div>

            <p>Deine Antworten</p>
            {jsonData.map((question, index) => (
              <div key={index} className="bg-gray-300 p-5 rounded-xl">
                <p>
                  Antwort {index + 1} : {question.options[answerArray[index]]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
