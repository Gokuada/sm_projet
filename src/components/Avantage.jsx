import React from "react";
import { Carousel } from "flowbite-react";
import { Check } from "react-feather";
import privacy from "../assets/privacy.png";
import maintenance from "../assets/maintenance.png";
import assistance from "../assets/assistance.png";
import assurance from "../assets/assurance.png";
import souscription from "../assets/souscription.png";

const Avantage = () => {
  return (
    <div className="bg-neutralSilver" id="Avantage">
      <div
        className="min-h-screen h-screen flex justify-center items-center about-container"
        style={{ marginTop: "150px" }}
      >
        <Carousel className="w-full mx-auto">
          {/* Slide 1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={souscription} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-10 font-semibold text-white md:w-3/4 leading-snug">
                ASSURANCE{" "}
                <p className="text-brandPrimary text-[30px] whitespace-normal">
                  Protégez votre investissement avec nos offres d'assurance
                  compétitives.
                </p>
              </h1>
              <div className="flex">
                <button className="btn-carousel rounded-full ml-auto px-3 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  SOUSCRIRE
                </button>
                <button className="btn-carousel rounded-full ml-auto px-1 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={maintenance} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-10 font-semibold text-white md:w-3/4 leading-snug">
                MAINTENANCE{" "}
                <p className="text-brandPrimary text-[30px] whitespace-normal">
                  Gardez votre véhicule en parfait état avec nos services de
                  maintenance.
                </p>
              </h1>
              <div className="flex">
                <button className="btn-carousel rounded-full ml-auto px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  SOUSCRIRE
                </button>
                <button className="btn-carousel rounded-full ml-4 px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={assistance} alt="" />
            </div>
            <div className="md:w-1/2 ml-auto">
              <h1 className="text-5xl mb-14 font-semibold text-white md:w-3/4 leading-snug">
                ASSISTANCE{" "}
                <p className="text-brandPrimary text-[30px] whitespace-normal">
                  Bénéficiez d'une assistance 24/7 pour tous vos besoins
                  urgents.
                </p>
              </h1>
              <div className="flex">
                <button className="btn-carousel rounded-full ml-auto px-3 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  SOUSCRIRE
                </button>
                <button className="btn-carousel rounded-full ml-auto px-1 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={privacy} alt="" />
            </div>
            <div className="md:w-1/2 ml-auto">
              <h1 className="text-5xl mb-14 font-semibold text-white md:w-3/4 leading-snug">
                EXTENSIONS DE GARANTIE{" "}
                <p className="text-brandPrimary text-[30px] whitespace-normal">
                  Profitez d'une tranquillité d'esprit prolongée avec nos
                  extensions.
                </p>
              </h1>
              <div className="flex">
                <button className="btn-carousel rounded-full ml-auto px-3 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  SOUSCRIRE
                </button>
                <button className="btn-carousel rounded-full ml-auto px-1 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey btn">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Avantage;
