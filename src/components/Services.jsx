import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "PAIEMENT 3/4/10 FOIS",
      description:
        "Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif.",
      image: "/src/assets/electricbike.png",
    },
    {
      id: 2,
      title: "FORFAITS MOBILITÉ",
      description:
        "Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement.",
      image: "/src/assets/moto.png",
    },
    {
      id: 3,
      title: "FINANCEMENT DE 12 À 60 MOIS",
      description:
        "Demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires.",
      image: "/src/assets/bike_sun.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
        style={{
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2 className="text-4xl text-white font-semibold mb-3">
          DÉCOUVREZ NOTRE GAMME DE SERVICES POUR TOUTES LES MOBILITÉS
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 relative"
            style={{
              background: `url(${service.image}) center/cover no-repeat`,
              backdropFilter: "blur(8px)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl absolute top-0 left-0 right-0" />
            <div
              className="bg-white bg-opacity-70 p-12 rounded-md"
              style={{ width: "100%", height: "100%" }}
            >
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
