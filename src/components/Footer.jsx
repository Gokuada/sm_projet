import React from "react";
import sm from "../assets/sm.png";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="about-container text-white">
  <div className="bg-primary h-1"></div>
  <div className="px-1 lg:px-1 max-w-screen-2xl mx-auto py-12 ">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={sm}
                alt=""
                className="w-20 inline-block items-center sm-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </a>
            <div className="my-8">
              <p className="mb-1"> contact@smcontact.com</p>
              <p>3 rue Clark, 75016 Paris</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Informations" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Mentions légales
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Conditions générales de vente
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Politique de confidentialité
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  RGPD & Cookies
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="sm mobility" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Accueil
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Devenir partenaire
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Qui sommes-nous ?
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Contact
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  FAQ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="nos services" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Nos services
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Assurance
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Qui sommes-nous ?
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Forfait entretien
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Assistance dépannage
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Garantie 3 ans
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
