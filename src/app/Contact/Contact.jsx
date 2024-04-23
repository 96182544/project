import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col py-20 bg-zinc-100">
    <div className="flex gap-5 justify-between mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start px-5 mt-5 text-6xl font-black text-blue-900 uppercase whitespace-nowrap leading-[70.4px] max-md:max-w-full max-md:text-4xl">
        <div className="self-end max-md:max-w-full max-md:text-4xl">
          contactez-nous
        </div>
        <div className="shrink-0 mt-7 bg-blue-900 h-[5px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col px-5 text-3xl font-bold text-blue-900 max-md:max-w-full">
        <div className="capitalize max-md:max-w-full">NOM</div>
        <div className="shrink-0 mt-8 bg-yellow-400 h-[5px] max-md:max-w-full" />
        <div className="mt-14 uppercase max-md:mt-10 max-md:max-w-full">
          NUM TéLé
        </div>
        <div className="shrink-0 mt-7 bg-yellow-400 h-[5px] max-md:max-w-full" />
      </div>
    </div>
    <div className="flex flex-col items-end self-center px-5 w-full max-w-[1796px] max-md:max-w-full">
      <div className="self-start max-w-full w-[1091px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
            <div className="text-2xl font-medium leading-10 text-justify text-blue-900 capitalize max-md:mt-10 max-md:max-w-full">
              &quot; Si vous avez des questions ou si vous souhaitez commander
              une consultation, laissez une demande et notre consultant vous
              contactera dans un proche avenir. &quot;
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <div className="mt-20 text-3xl font-bold leading-10 text-blue-900 capitalize max-md:mt-10">
              E-MAIL
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[885px]" />
      <div className="self-center mt-16 ml-36 text-3xl font-bold text-blue-900 capitalize max-md:mt-10">
        MESSAGE
      </div>
      <div className="shrink-0 mt-7 max-w-full bg-yellow-400 h-[5px] w-[885px]" />
      <div className="justify-center items-center px-16 py-9 mt-16 max-w-full text-2xl font-semibold tracking-wider leading-4 text-white uppercase whitespace-nowrap bg-blue-900 w-[420px] max-md:px-5 max-md:mt-10">
        ENVOIER
      </div>
    </div>
  </div>
  )
}

export default Contact
