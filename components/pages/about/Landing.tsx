import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <section
        className="w-full h-[90vh]  text-white flex flex-col justify-center items-center relative overflow-hidden bg-fixed  bg-cover"
        style={{
          backgroundImage:
            "url(https://hoodem.com/wp-content/uploads/2021/07/bg-1.jpg)",
        }}
      >
        <div className="absolute z-10 left-0 top-0 right-0 bottom-0 flex flex-col justify-center text-[#1f2228]  px-[15%] ">
          <h2 className="w-[400px] font-[600] text-[25px] tracking-wider">
            Have you ever desired to be someone else?
            <br /> ...or someone else to be someone else?
          </h2>
        </div>
      </section>
      <div className="w-[80%] mx-auto rounded-3xl p-12 text-center -mt-[5rem]  bg-[#04141a] z-20">
        <h3 className="text-[#e2e9eb] font-[600] text-[36px] ">
          Be sure, and stay safe.
        </h3>
        <span className="w-[100px] inline-block h-1 bg-gradient-to-r from-pink-500 to-violet-500"></span>
        <p className="text-gray-200 mt-10 leading-8 w-[80%] mx-auto">
          Detectiva is a deepfake detection platform that uses advanced
          artificial intelligence and machine learning techniques to analyze
          media files and determine their authenticity. The platform has a
          user-friendly interface that makes it easy for individuals,
          businesses, and organizations to use and customize according to their
          needs
        </p>
      </div>
    </>
  );
};

export default Landing;
