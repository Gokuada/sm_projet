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
            Bienvenue chez [Nom de votre entreprise], où nous sommes fiers d'être à la pointe de la révolution de la mobilité électrique. Fondée avec une vision claire de créer un avenir plus propre et plus durable, notre entreprise s'engage à fournir des solutions innovantes pour répondre aux besoins croissants de mobilité tout en préservant notre environnement. 
            Chez [Nom de votre entreprise], nous plaçons la durabilité au cœur de tout ce que nous faisons. Nous nous engageons à minimiser notre empreinte carbone et à promouvoir des pratiques écoresponsables tout au long de notre chaîne de valeur. De la conception de nos véhicules à leur cycle de vie complet, nous nous efforçons de faire progresser la cause de la mobilité durable.
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
