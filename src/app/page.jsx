"use client";
import React, { useState } from "react";
import Image from "next/image";
import slide1 from "/public/images/image2.png";
import plus from "/public/images/plus3.png";
import slide2 from "/public/images/femme.png";
import ybtn from "/public/images/blanbtn.png";
import bbtn from "/public/images/bluebtn.png";
import "./globals.css";

export default function Home() {
  const [isText1, setIsText1] = useState(true);
  const [btntitle, setbtntitle] = useState("En Savoir Plus");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2];

  const toggleText = () => {
    setIsText1(!isText1);
    if (btntitle === "En Savoir Plus") {
      setbtntitle("CONTACTEZ_NOUS");
    } else {
      setbtntitle("En Savoir Plus");
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="contai">
      <div className={!isText1 ? "col col7" : "col"}>
        {isText1 ? (
          <>
            <h1 className="title">
              La gestion des données rassemble <br /> à une histoire sans
            </h1>
            <div className="ligne">
              <h1 className="fin"> fin !</h1>
              <hr id="l1" />
            </div>
            <p className="desc">Ce pourquoi, nous avons créé School-up.</p>
            <div className="btn" onClick={toggleText}>
              <Image
                src={plus}
                alt="Plus d'info"
                width={30}
                height={30}
                id="gg"
              />
              <h1>{btntitle}</h1>
            </div>
          </>
        ) : (
          <>
            <div className="col2">
              <h1 className="title2">
                La gestion des données <br />
                rassemble à une histoire sans fin{" "}
              </h1>
              <div className="shrink-0 w-[430px] ml-40 bg-yellow-400 h-[16px] mt-5 mb-5" />
              <p className="parag w-full">
                Quelque soit le type de l’établissement : Ecole primaire,
                collège, lycée ou centre de formation. Grace à School-up,
                l’établissement scolaire peut gérer les flux des élèves et des
                enseignants dans un seul endroit.Quelque soit le type de
                l’établissement : Ecole primaire, collège, lycée ou centre de
                formation. Grace à School-up, l’établissement scolaire peut
                gérer les flux des élèves et des enseignants dans un seul
                endroit.Quelque soit le type de l’établissement : Ecole
                primaire, collège, lycée ou centre de formation. Grace à
                School-up, l’établissement scolaire peut gérer les flux des
                élèves et des enseignants dans un seul endroit. Quelque soit le
                type de l’établissement : Ecole primaire, collège, lycée ou
                centre de formation. Grace à School-up, l’établissement scolaire
                peut gérer les flux des élèves et des Enseignants dans un seul
                endroit.
              </p>

              <div className="btn2" onClick={toggleText}>
                <h1
                  className="txtcontact-nous"
                  onClick={btntitle == "CONTACTEZ_NOUS" ? scrollToBottom : null}
                >
                  {btntitle}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="relative w-1/2 h-[615px]">
        <Image
          src={slides[currentSlide]}
          alt="Slide image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-5 left-5 flex space-x-2">
          <Image
            onClick={prevSlide}
            loading="lazy"
            src={bbtn}
            className="shrink-0max-w-full aspect-[0.86] w-[42px] h-[90px] hover:cursor-pointer "
          />
          <Image
            onClick={nextSlide}
            loading="lazy"
            src={ybtn}
            className="shrink-0 max-w-full aspect-[1.16] w-[105px] h-[90px] hover:cursor-pointer"
          />
          &lt; &gt;
        </div>
      </div>
    </div>
  );
}
