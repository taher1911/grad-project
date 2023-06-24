import Link from "next/link";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="w-full h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" w-[100%] h-[100%] absolute left-0 -top-12 back-video"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/freelancer3223/video/upload/v1687560800/gradProject/video_2023-06-24_01-51-43_zn9y5x.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute z-10 left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center bg-overlay px-[15%] text-center">
        <h1 className="text-6xl font-bold mb-4 leading-[1.4] capitalize">
          In only a{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            few minutes
          </span>
          , you may check on your videos.
        </h1>
        <p className="tracking-wide mb-8">
          Detectiva uses latest deep learning algorithms and AI techniques to
          make deepfake video identification easier.
        </p>

        <a
          href="#_"
          className="inline-flex items-center justify-center h-12 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-500 border-solid rounded-full cursor-pointer select-none  hover:border-gray-300 focus:shadow-xs focus:no-underline"
        >
          Sign up - it&apos;s free!
        </a>
        <p className="text-gray-400 mt-3">No credit card required</p>
      </div>
    </section>
  );
};

export default Landing;
