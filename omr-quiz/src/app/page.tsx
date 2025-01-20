import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Quiz from "./components/Quiz/Quiz";

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-300">
      <Header />
      <Banner />
      <Quiz />
      <div className="p-[50px]">
        <p>Hey</p>
      </div>
    </main>
  );
}
