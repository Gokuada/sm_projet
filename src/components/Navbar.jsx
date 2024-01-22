import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import sm from "../assets/sm.png";

const navigation = [
  { name: "ESPACE MARCHAND", href: "#", current: false },
  { name: "CONTACTEZ-NOUS", href: "#", current: false },
];

const ctaButtons = [
  { label: "DEVENIR PARTENAIRE", href: "#" },
  { label: "FAIRE UNE SIMULATION", href: "#" },
];

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className=" border-b-2 border-gray bg-gray-800 fixed w-full z-10">
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
                      className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                        item.current ? "bg-gray-900 text-white" : ""
                      }`}
                      aria-current={item.current ? "page" : undefined}>
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
                      className={`rounded-full px-7 py-1.5 bg-brandPrimary text-white rounded hover:bg-neutralDGrey focus:outline-none focus:ring focus:ring-violet-300 flex items-center text-xs cta-button`}>
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium ${
                    item.current ? "bg-gray-900 text-white" : ""
                  }`}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
