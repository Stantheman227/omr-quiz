import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-row items-start justify-center space-x-20 h-full text-white p-5">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-sans-bold"> Was habe ich benutzt?</p>
        <p className="text-xs pt-3">Tailwind CSS</p>
        <p className="text-xs">Typescript</p>
        <p className="text-xs ">React</p>
        <p className="text-xs">jsPDF</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-sans-bold"> Soziales</p>
        <p className="text-xs pt-3">Website</p>
        <p className="text-xs">LinkedIn</p>

        <p className="text-xs ">Github</p>
        <p className="text-xs">Insta</p>
      </div>{" "}
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-sans-bold"> Offizielles</p>
        <p className="text-xs pt-3">Datenschutz</p>
        <p className="text-xs">Impressum</p>
        <p className="text-xs ">AGB</p>
        <p className="text-xs">FAQ</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-sans-bold">
          {" "}
          Design inspired by OMR Education
        </p>
        <p className="text-xs pt-3">Logo Rights - </p>
        <p className="text-xs">© OMR Education </p>
        <p className="text-xs ">Ramp106</p>
        <p className="text-xs">GmbH</p>
      </div>
      <p> </p>
    </div>
  );
}
