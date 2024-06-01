"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "/public/images/Group2.png";
import image1white from "/public/images/image11.png";
import image2 from "/public/images/Group3.png";
import image2white from "/public/images/vvg.png";
import image3 from "/public/images/Group1.png";
import image3white from "/public/images/vv.png";

const Fonction = () => {
  const [src, setSrc] = useState(image1);
  const [src2, setSrc2] = useState(image2);
  const [src3, setSrc3] = useState(image3);

  const handleMouseEnter = (e) => {
    if (e === "image1white") {
      setSrc(image1white);
    } else if (e === "image1") {
      setSrc(image1);
    }

    if (e === "image2white") {
      setSrc2(image2white);
    } else if (e === "image2") {
      setSrc2(image2);
    }

    if (e === "image3white") {
      setSrc3(image3white);
    } else if (e === "image3") {
      setSrc3(image3);
    }
  };

  const handleMouseLeave = (e) => {
    if (e === "image1white") {
      setSrc(image1white);
    } else if (e === "image1") {
      setSrc(image1);
    }

    if (e === "image2white") {
      setSrc2(image2white);
    } else if (e === "image2") {
      setSrc2(image2);
    }

    if (e === "image3white") {
      setSrc3(image3white);
    } else if (e === "image3") {
      setSrc3(image3);
    }
  };
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-zinc-100 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1693px] max-md:max-w-full">
        <div className="flex flex-col self-center ml-24 max-w-full text-6xl font-black text-center text-blue-900 uppercase leading-[71px] w-[970px] max-md:text-4xl max-md:leading-[49px]">
          <div className="max-md:max-w-full max-md:text-4xl max-md:leading-[49px] ">
            Comment <br />
            fonctionnons-nous ?
          </div>
          <div className="shrink-0 self-end mt-8 max-w-full bg-blue-900 h-[5px] w-[777px]" />
        </div>
        <div className="mt-28 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0 px-16">
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                onMouseEnter={() => {
                  handleMouseEnter("image1white");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image1");
                }}
                className="flex flex-col grow hover:cursor-pointer px-9 py-16 leading-10 text-blue-900 capitalize border hover:bg-[#283487] hover:text-white border-blue-900 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full"
              >
                <Image
                  loading="lazy"
                  src={src}
                  className="self-center max-w-full aspect-[0.96] w-[147px]"
                  alt="Hoverable"
                />
                <div className="mt-20 text-3xl font-bold max-md:mt-10 max-md:max-w-full">
                  Le lorem ipsum es en imprimerie
                </div>
                <div className="mt-9 text-2xl font-medium max-md:max-w-full">
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification utilisée à titre provisoire pour calibrer une
                  mise en page,{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                onMouseEnter={() => {
                  handleMouseEnter("image2white");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image2");
                }}
                className="flex flex-col grow px-9 py-16 leading-10 text-blue-900 capitalize border hover:cursor-pointer  hover:bg-[#283487] hover:text-white border-blue-900 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full"
              >
                <Image
                  loading="lazy"
                  src={src2}
                  className="self-center max-w-full aspect-[0.96] w-[147px]"
                />
                <div className="mt-20 text-3xl font-bold max-md:mt-10 max-md:max-w-full">
                  Le lorem ipsum es en imprimerie
                </div>
                <div className="mt-9 text-2xl font-medium max-md:max-w-full">
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification utilisée à titre provisoire pour calibrer une
                  mise en page,{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                onMouseEnter={() => {
                  handleMouseEnter("image3white");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image3");
                }}
                className="flex flex-col grow py-16 leading-10 text-blue-900 capitalize border  hover:bg-[#283487] hover:text-white hover:cursor-pointer border-blue-900 border-solid max-md:mt-10 max-md:max-w-full"
              >
                <Image
                  loading="lazy"
                  src={src3}
                  className="self-center max-w-full aspect-[1.09] w-[167px]"
                />
                <div className="flex flex-col px-8 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-bold max-md:max-w-full">
                    Le lorem ipsum es en imprimerie
                  </div>
                  <div className="mt-9 text-2xl font-medium max-md:max-w-full">
                    Le lorem ipsum est, en imprimerie, une suite de mots sans
                    signification utilisée à titre provisoire pour calibrer une
                    mise en page,{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonction;
