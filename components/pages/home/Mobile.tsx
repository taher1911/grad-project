import React from "react";
import Image from "next/image";

type Props = {};

const Mobile = (props: Props) => {
  return (
    <>
      <section className="relative my-10  w-[90%] max-w-[1300px] ">
        <h2 className="text-center   mx-auto text-4xl text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
          Detectiva
          <span className="bg-gradient-to-r block from-pink-500 to-violet-500 bg-clip-text text-transparent">
            mobile app
          </span>{" "}
        </h2>
        <div className="relative mt-[9rem] px-10 py-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl text-white flex justify-between  items-center">
          <h3 className="  w-[30%] font-bold  text-5xl flex justify-items-end">
            <span className="text-center">Check on the go</span>
          </h3>
          <div className=" absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[650px]">
            <div className="relative w-full h-full">
              <Image
                src="https://res.cloudinary.com/freelancer3223/image/upload/v1687700216/gradProject/iv-app-banner-3x_tdrrhj.png"
                alt="mobile"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="w-[32%]">
            <h3 className="text-5xl font-bold flex flex-col justify-center ">
              <span>6M</span>{" "}
              <span className="block text-[14px] ">Downloads</span>
            </h3>

            <p className="my-7 text-xl font-semibold tracking-wider leading-9">
              The simplest way to check videos on your phone.
              <span className="text-gray-300  ">
                Use innovative technologies and algorithms developed
                specifically for our clients.
              </span>{" "}
            </p>
            <div className="flex gap-3">
              <button className="relative w-[160px] min-h-[55px]">
                <Image
                  src="https://res.cloudinary.com/freelancer3223/image/upload/v1687705133/gradProject/apple-store-transparent_lrvx1l.svg"
                  alt="app"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button className="relative w-[160px] min-h-[55px]">
                <Image
                  src="https://res.cloudinary.com/freelancer3223/image/upload/v1687705134/gradProject/play-store-transparent_ctatpb.svg"
                  alt="app"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
