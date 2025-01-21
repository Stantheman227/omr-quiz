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
        <div className="flex flex-col-reverse md:flex-row space-x-5 items-center justify-center">
          <div className="flex flex-col text-center md:text-start">
            <p className="font-sans-extra-bold text-3xl md:mb-2">
              Quiz beendet!
            </p>
            <p>
              Herzlichen Glückwunsch du hast es geschafft das Quiz zu beenden!
              <br />
              Was denkst du wie gut hast du abgeschnitten?
              <br />
              Kleiner Spaß, jeder hat seinen eigenen Geschmack und das ist auch
              gut so!
            </p>
          </div>
          <div className="object-contain h-60 md:h-80 w-60 md:w-80 rounded-full overflow-hidden">
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
            <p className="font-sans-extra-bold text-4xl text-center">
              Lass dir deine Ergebnisse bequem per Email zukommen!
            </p>

            <Form
              className="flex flex-col rounded-l items-center justify-center p-2 md:p-0"
              action="/sendEmailApi"
            >
              {" "}
              {/* On submission, the input value will be appended to 
            the URL, e.g. /sendEmailApi?email=Max.Mustermann@OMR-Ramp106GmbH.de  => Hier wird dann ein API call eingebaut um die Email zu versenden*/}
              <p className="font-sans-bold">
                Trage deine E-mail ein um die Antwort per E-mail zu erhalten.
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-5 pt-2">
                <input
                  className="bg-gray-100 h-12 w-50 p-2 focus:outline-none placeholder:text-black text-white"
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

            <div className="py-5 flex flex-col items-center justify-center space-y-5 my-20">
              <p className="font-sans-extra-bold text-4xl text-center">
                Oder direkt als PDF
              </p>
              <div className="w-fit ounded-l flex first-line:items-center justify-center space-x-2 cursor-pointer bg-omr-orange p-4 font-sans-bold text-black">
                <button
                  className="uppercase"
                  onClick={() => printPDF(jsonData, answerArray)}
                >
                  Download PDF
                </button>
              </div>
            </div>

            <p className="font-sans-extra-bold text-4xl p-2 md:p-0">
              Deine Antworten:
            </p>
            {jsonData.map((question, index) => (
              <div key={index} className="rounded-l p-2 md:p-0">
                <p className="relative w-fit text-xl md:text-3xl text-black bg-white font-sans-extra-bold uppercase p-1">
                  Frage {index + 1} : {question.question}
                </p>
                <p className="pt-1">
                  <span className="text-omr-orange">Deine Antwort: </span>{" "}
                  {question.options[answerArray[index]]}
                </p>
                <p>
                  {" "}
                  <span className="text-omr-purple">
                    Richtige Antwort:{" "}
                  </span>{" "}
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
