import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Quiz from "./components/Quiz/Quiz";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen flex flex-col">
      <div className="relative top-0 left-0 overflow-visible z-10 w-full space-y-16">
        <Header />
        <Banner />
      </div>

      <div className="w-full grow">
        <Quiz />
      </div>

      <div className="bg-omr-black">
        <Footer />
      </div>
    </main>
  );
}
