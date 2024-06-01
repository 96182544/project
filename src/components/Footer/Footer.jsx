// components/Footer.js
import React from "react";
import Image from "next/image";
import linkedin from "/public/images/linkedin.png";
import facebook from "/public/images/facebook.png";
import instagram from "/public/images/instagrame.png";
import logo from "/public/images/logofooter.png";
import gmail from "/public/images/gmail.png";
import locali from "/public/images/localisation.png";
import telephone from "/public/images/telephone.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-4xl">
      <div className="p-12 flex  justify-center gap-72  items-center">
        <div className="-mt-16  md:mb-0">
          <Image src={logo} alt="logo" width={250} height={200} />
        </div>

        <div className="block flex-col mr-16 ">
          <div className=" leading-[50px]">
            <div className="flex gap-4 justify-start items-center">
              <Image src={gmail} alt="localisation" className="w-[6%] h-6" />
              <p className="mt-2">
                <a
                  href="mailto:Schoolup@Gmail.Com"
                  className="hover:underline text-2xl font-medium"
                >
                  Schoolup@Gmail.Com
                </a>
              </p>
            </div>
            <div className="block gap-3 justify-start items-center">
              <div className="flex gap-4">
                <Image src={locali} alt="localisation" className="w-[5%] h-8" />
                <p className="text-2xl font-medium">
                  34- Avenue Hedi Karay 4, Tunisie
                </p>
              </div>
              <div className="flex gap-4 justify-start items-center">
                <Image
                  src={telephone}
                  alt="localisation"
                  className="w-[5%] h-8"
                />
                <p className="mt-2">
                  <a
                    href="tel:+21671345548"
                    className="hover:underline text-2xl font-medium"
                  >
                    +216 71 345 548
                  </a>{" "}
                  |
                  <a
                    href="tel:+21671345548"
                    className="hover:underline ml-2 text-2xl font-medium"
                  >
                    +216 71 345 548
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start md:justify-start mt-2 ml-6">
            <a href="#" className="mr-4">
              <Image src={linkedin} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="#" className="mr-4">
              <Image src={facebook} alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#">
              <Image src={instagram} alt="Instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="  mb-6 md:mb-0 text-4xl font-medium">
          <a href="#" className="block hover:underline mb-2">
            À PROPOS DE NOUS
          </a>
          <a href="#" className="block hover:underline mb-2">
            POURQUOI NOUS ?
          </a>
          <a href="#" className="block hover:underline mb-2">
            COMMENT FONCTIONNE
          </a>
          <a href="#" className="block hover:underline mb-2">
            BLOG
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
