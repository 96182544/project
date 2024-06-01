import React from "react";
import Image from "next/image";
import image1 from "/public/images/image1.png";
import image2 from "/public/images/image3.png";
import image3 from "/public/images/image4.png";
import ybtn from "/public/images/yellowbtn.png";
import bbtn from "/public/images/bluebtn.png";

const Blog = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col text-6xl font-black text-blue-900 uppercase whitespace-nowrap leading-[70.4px] max-md:text-4xl">
          <div className="self-end ml-24 -mr-16 max-md:text-4xl">blog</div>
          <div className="shrink-0 bg-blue-900 h-[5px]" />
        </div>
        <div className="flex gap-5 justify-between mr-32 ">
          <Image
            loading="lazy"
            src={bbtn}
            className="shrink-0max-w-full aspect-[0.86] w-[42px] h-[90px] hover:cursor-pointer "
          />
          <Image
            loading="lazy"
            src={ybtn}
            className="shrink-0 max-w-full aspect-[1.16] w-[105px] h-[90px] hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col  mt-28 ml-16 w-11/12 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full bg-zinc-300 max-md:mt-6 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image1}
                  className="w-full aspect-[1.05] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full bg-zinc-300 max-md:mt-6 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image3}
                  className="w-full aspect-[1.05] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full bg-zinc-300 max-md:mt-6 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src={image2}
                  className="w-full aspect-[1.05] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow leading-10 text-blue-900 capitalize max-md:mt-10 max-md:max-w-full">
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
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow leading-10 text-blue-900 capitalize max-md:mt-10 max-md:max-w-full">
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
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow leading-10 text-blue-900 capitalize max-md:mt-10 max-md:max-w-full">
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
  );
};

export default Blog;
