import React from "react";
import AboutUs from "../assets/aboutus.png";
import bfmtv from "/src/assets/bfmtv.png";
import mutu from "/src/assets/mutu.jpg";
import icons from "/src/assets/bnp.png";



import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div>
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 about-container"
        id="about"
      >
        <div className=" pt-40 md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 abou">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={AboutUs} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-white font-semibold mb-4 md:w-4/5">
              À PROPOS DE NOUS
            </h2>
            <p className="md:w-full text-sm text-white mb-8" style={{ lineHeight: "2" }}>
              Fondée en 2022 par 2 passionnés de mobilité électrique et anciens
              consultants en services financiers, Siko Mobility a financé plus
              d’1m€ d’engins électriques et conquis plus de 850 clients lors de
              sa première année, proposant des solutions d’institutions
              financières aux clients des concessionnaires de mobilité
              électrique.Siko Mobility apporte une solution inclusive au 25% des
              Français qui refusent une formation ou un emploi faute de moyen de
              mobilité pour s’y rendre, et participe rendre réellement verte la
              mobilité électrique en reprenant les engins en fin de contrat pour
              les remettre en état et les proposer à moindre coût. Nous aidons
              les concessionnaires à augmenter leurs ventes en mettant à
              disposition de leurs clients des solutions de paiement de 3 à 84x
              fois ultra simplifiées (BNPL, crédit, leasing); Nous les aidons
              également à créer des revenus récurrents en abonnant leurs clients
              à 4 services exclusifs sans engagement : assurance, assistance,
              garantie 3 ans, maintenance.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-3 lg:px-20 max-w-screen-5xl mx-auto  "
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 about-container">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl text-white font-semibold mb-2 md:w-2/3">
              ILS PARLENT <br />{" "}
              <span className="text-brandPrimary"> DE NOUS </span>
            </h2>

          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 about-container">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/floa1.png" alt="" />
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/bfmtv.png" alt="" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/mutu.jpg" alt="" />
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/bnp.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
