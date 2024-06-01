import React from "react";
import Image from "next/image";
import image1 from "/public/images/Group5.png";
import image2 from "/public/images/Group4.png";
import image3 from "/public/images/Group7.png";
import image4 from "/public/images/Group8.png";

export default function About() {
  return (
    <div className="flex flex-col items-start px-5">
      <div className="flex flex-col text-6xl font-black text-blue-900 uppercase whitespace-nowrap leading-[70.4px] max-md:text-4xl">
        <div className="self-end ml-20 -mr-16 max-md:text-4xl">
          Pourquoi Nous?
        </div>
        <div className="shrink-0 bg-blue-900 h-[5px] w-96 -ml-5" />
      </div>
      <div className="flex flex-col self-center mt-7 w-full max-w-[1612px] max-md:max-w-full p-24">
        <div className="max-md:max-w-full">
          <div className="flex gap-20 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center mt-7 text-blue-900 max-md:mt-10 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image1}
                  className="max-w-full aspect-[1.14] w-[197px]"
                />
                <div className="mt-11 text-4xl font-bold leading-10 uppercase max-md:mt-10 max-md:max-w-full">
                  un service de gestion{" "}
                </div>
                <div className="mt-10 text-2xl font-medium leading-10 text-center w-[520px] capitalize max-md:max-w-full">
                  Quelque soit le type de l’établissement : Ecole primaire,
                  collège, lycée ou centre de formation. Grace à School-up,
                  l’établissement scolaire peut gérer les flux des élèves et des
                  enseignants dans un seul endroit.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-blue-900 max-md:mt-10 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image2}
                  className="max-w-full aspect-square w-[207px]"
                />
                <div className="mt-10 text-4xl font-bold leading-10 uppercase">
                  gagner du temps
                </div>
                <div className="mt-8 text-2xl font-medium leading-10 w-[520px] text-center capitalize max-md:max-w-full">
                  Cette plateforme propose un service de gestion global de
                  l’établissement qui optimise l’organisation et fait gagner du
                  temps.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full ">
          <div className="shrink-0 w-[630px] bg-yellow-400 h-[5px] " />
          <div className="shrink-0 w-[630px] bg-yellow-400 h-[5px] " />
        </div>
        <div className="self-center mt-16 w-full max-w-[1485px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-blue-900 max-md:mt-10 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image3}
                  className="self-center max-w-full aspect-[1.05] w-[225px]"
                />
                <div className="mx-14 mt-7 text-4xl text-center font-bold leading-10 uppercase max-md:mr-2.5 max-md:max-w-full">
                  Un module de comptabilité
                </div>
                <div className="mt-10 text-2xl mx-auto font-medium leading-10 text-center w-[520px] capitalize max-md:max-w-full">
                  Un module de comptabilité facilite la gestion de portefeuille
                  de l’établissement. Une interface de gestion scolaire est là
                  pour vous aider à digitaliser les flux scolaires.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-blue-900 max-md:mt-10 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image4}
                  className="self-center max-w-full aspect-[1.01] w-[217px]"
                />
                <div className="mx-14 mt-7 text-center text-4xl font-bold leading-10 uppercase max-md:mr-2.5 max-md:max-w-full">
                  Une application sécurisée
                </div>
                <div className="mt-8 text-2xl mx-auto  font-medium leading-10 text-center w-[520px] capitalize max-md:max-w-full">
                  Une application sécurisée, performante et robuste peut vous
                  amener à un autre palier de gestion des flux d’informations.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full ">
          <div className="shrink-0 w-[630px] bg-yellow-400 h-[5px] " />
          <div className="shrink-0 w-[630px] bg-yellow-400 h-[5px] " />
        </div>
      </div>
    </div>
  );
}
