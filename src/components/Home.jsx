import React from "react";
import bike from "../assets/bike.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="ax-w-screen-x p-4 pb-0 about-container">
        <div className="my-28 md:my-8 py-12 pt-40 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-">
          <div className="mb-6 md:mb-1 md:w-5/3">
            <img src={bike} alt="" className="max-w-full h-auto mb-4 md:mb-0 md:mr-8" />
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-4xl md:text-6xl mb-3 md:mb-5 font-semibold text-white md:w-2/3 leading-snug">
              Votre agence pour la mobilité électrique
            </h1>
            <p className="text-neutralGrey text-base mb-5 md:mb-8">
              La solution pour la mobilité électrique destinée aux
              concessionnaires. Financement, assurance, maintenance et garantie.
            </p>
            <button className="rounded-full ml-auto px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
