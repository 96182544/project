import Button from "@/components/Button/Button";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center gap-20 py-20 bg-zinc-100 mt-24 mb-24">
      <div className="w-[41%] ">
        <div className="flex flex-col self-start px-5 mt-5 ml-10 text-6xl font-black text-blue-900 uppercase whitespace-nowrap leading-[70.4px] max-md:max-w-full max-md:text-4xl">
          <div className=" max-md:max-w-full max-md:text-4xl">
            contactez-nous
          </div>
        </div>
        <div className="shrink-0 mt-7 -ml-28 max-w-full  bg-blue-900 h-[5px] w-[340px]" />
        <div className="text-2xl mt-20 ml-20 font-medium leading-10 text-justify text-blue-900 capitalize max-md:mt-10 max-md:max-w-full">
          &quot; Si vous avez des questions ou si vous souhaitez commander une
          consultation, laissez une demande et notre consultant vous contactera
          dans un proche avenir. &quot;
        </div>
      </div>

      <div className="w-[41%]  ml-20 -mt-10">
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="mt-20 text-3xl font-bold leading-10 text-blue-900 capitalize max-md:mt-10">
            NOM
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border-gra h-10 text-2xl font-medium"
          />
          <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[3600px]" />
        </div>
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="mt-20 text-3xl font-bold leading-10 text-blue-900 capitalize max-md:mt-10">
            NUM TELE
          </div>
          <input
            type="tel"
            name=""
            id=""
            className="border-gra h-10 text-2xl font-medium "
          />

          <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[885px]" />
        </div>
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="mt-20 text-3xl font-bold leading-10 text-blue-900 capitalize max-md:mt-10">
            E-MAIL
          </div>
          <input
            type="email"
            name=""
            id=""
            className="border-gra h-10 text-2xl font-medium"
          />

          <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[885px]" />
        </div>
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="mt-20 text-3xl font-bold leading-10 text-blue-900 capitalize max-md:mt-10">
            MESSAGE
          </div>
          <input
            type="text"
            name=""
            id=""
            className="bg-white h-10 text-2xl font-medium"
          />
          <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[885px]" />
        </div>
        <div className="text-right mt-14">
          <Button title="Envoyer " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
