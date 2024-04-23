"use client"
import React, { useState } from "react";
import Image from "next/image";
import image2 from "/public/images/image2.png";
import plus from "/public/images/plus3.png";
import "./globals.css";

export default function Home() {
  const [isText1, setIsText1] = useState(true);
  const [btntitle, setbtntitle] = useState("En Savoir Plus");

  const toggleText = () => {
    setIsText1(!isText1); 
    if(btntitle=="En Savoir Plus"){
      setbtntitle("Contact Nous")
    }else{
      setbtntitle('En Savoir Plus')
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="contai">
      <div className={!isText1?'col col7':'col'}>
      {isText1?<> <h1 className="title">
          La gestion des données rassemble <br /> à une histoire sans
        </h1>
        <div className="ligne">
          <h1 className="fin"> fin !</h1>
          <hr id="l1"/>
        </div>
        <p className="desc">Ce pourquoi, nous avons créé School-up.</p>
        <div className="btn"  onClick={toggleText}>
          <Image src={plus} alt="Plus d'info" width={30} height={30} id="gg" />
          <h1 onClick={btntitle=="En Savoir Plus"?scrollToBottom:null}>{btntitle}</h1>
        </div></>:<>
        <div className="col2">
        <h1 className="title2">La gestion des données <br/>rassemble à une histoire sans fin </h1>
        <hr id="l2"/>
        <p className="parag">Quelque soit le type de l’établissement : Ecole primaire, collège, lycée ou centre de formation. Grace à School-up, l’établissement scolaire peut gérer les flux des élèves et des enseignants dans un seul endroit.Quelque soit le type de l’établissement : Ecole primaire, collège, lycée ou centre de formation. Grace à School-up,
         l’établissement scolaire peut gérer les flux des élèves et des enseignants dans un seul endroit.Quelque soit le type de l’établissement : Ecole primaire, collège, lycée ou centre de formation. Grace à School-up, l’établissement scolaire peut gérer les flux des élèves et des enseignants dans un seul endroit. Quelque soit le type de l’établissement : Ecole primaire, collège, lycée ou centre de formation. Grace à School-up, l’établissement scolaire peut gérer les flux des élèves et des enseignants dans un seul endroit.</p>
         <div className="btn"  onClick={toggleText}>
          <Image src={plus} alt="Plus d'info" width={30} height={30} id="gg" />
          <h1 onClick={btntitle=="Contact Nous"?scrollToBottom:null}>{btntitle}</h1>
        </div>
        </div>
        
        </>}
       
        
       
      </div>
      <div>
        <Image src={image2} alt="images2" width={700} />
      </div>
    </div>
  );
}
