import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import sm from "../assets/sm.png";

const Popup = ({ isOpen, onClose }) => {
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("bg-opacity-50")) {
        onClose();
      }
    };
    return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded-lg">
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactez-nous</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Rencontrez-vous des problèmes techniques ? Souhaitez-vous nous faire part de vos commentaires sur une fonctionnalité ? Besoin d'informations sur notre plan Business ? N'hésitez pas à nous en informer.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre mail</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Indiquez-nous comment nous pouvons vous aider." required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laisse un commentaire..."></textarea>
          </div>
          <button
  type="submit"
  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
>
  Envoyer le message
</button>
      </form>
            </div>
            </section>
      </div>
    </div>
  );
};

const navigation = [
  { name: "ESPACE MARCHAND", href: "#", current: false },
  { name: "CONTACTEZ-NOUS", href: "#", current: false },
];

const ctaButtons = [
  { label: "DEVENIR PARTENAIRE", href: "#" },
  { label: "FAIRE UNE SIMULATION", href: "#" },
];

export default function Example() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="border-b-2 border-gray bg-gray-800 fixed w-full z-10"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-10 lg:px2">
              <div className="relative flex h-16 items-center justify-between">
                <img className="h-20 w-auto mb-2 sm:mb-0" src={sm} />
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={item.name === "CONTACTEZ-NOUS" ? openPopup : null}
                        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          item.current ? "bg-gray-900 text-white" : ""
                        }`}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span style={{ fontSize: "12px" }}>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2 sm:space-x-4 mt-2 sm:mt-0">
                    {ctaButtons.map((button, index) => (
                      <a
                        key={index}
                        href={button.href}
                        className={`rounded-full px-7 py-1.5 bg-brandPrimary text-white rounded hover:bg-neutralDGrey focus:outline-none focus:ring focus:ring-violet-300 flex items-center text-xs cta-button`}
                      >
                        {button.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
