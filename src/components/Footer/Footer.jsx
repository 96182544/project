import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-11 bg-blue-900 max-md:px-5">
      <div className="w-full max-w-[1626px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f5f461dd9a17d55d122ef7f9af01e73d51b167911230bd3f270a28af160f843?"
              className="w-full aspect-[3.57] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 mt-4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-center self-start mt-3.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12864ad655caaefe51de3c56fe0dcb6162dbcb5a04fd80341a2e23c8a4acaaa1?"
                  className="w-6 aspect-[1.49]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54281fd842f216473866801e5c8b8ec1031feec81e8e98af50c02d70e29a4c77?"
                  className="mt-11 w-6 aspect-square max-md:mt-10"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcfbeb4d3c4259a8aba71c35b1bd67a23a8e5377371a2fe8b434d5ae72487aaf?"
                  className="self-start mt-12 aspect-[0.95] fill-white w-[19px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                      <div className="mt-3 text-2xl font-semibold tracking-wider leading-4 text-white capitalize max-md:mt-10 max-md:max-w-full">
                        schoolup@gmail.com
                        <br />
                        34- Avenue Hedi Karay 4, Tunisie
                        <br />
                        +216 71 345 548 | +216 71 345 548
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                      <div className="text-2xl font-semibold tracking-wider leading-4 text-white uppercase max-md:mt-10">
                        À propos de nous
                        <br />
                        pourquoi nous ?<br />
                        comment fonctionne
                        <br />
                        Blog
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 self-start ml-5 max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3082cf45a13b66184d21d5fc9dc3dfae71cb11f3dec5fca6f1a98c497469ef9e?"
                    className="shrink-0 aspect-[0.98] w-[47px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cea19f91469716d72b225107eace8cc95c7b93737187f1f80a78a0b4cfb0e91?"
                    className="shrink-0 self-start aspect-square w-[46px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0827f40beef8d90cbeef35d3984b6cb91e2124590c30a5613f552272dd4b41e?"
                    className="shrink-0 aspect-[0.98] w-[47px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
