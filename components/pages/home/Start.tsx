import React from "react";

type Props = {};

const Start = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-between  my-20 mt-[12rem] w-full ">
      <div className=" w-full h-[1px] bg-gradient-to-r from-transparent to-slate-400"></div>
      <div className="text-center py-20">
        {" "}
        <h2 className="text-center  mx-auto text-5xl capitalize text-gray-200 mb-8 leading-[1.5] tracking-wide font-semibold">
          Start checking videos.
          <span className="bg-gradient-to-r block text-6xl from-pink-500 to-violet-500 bg-clip-text text-transparent">
            No experience needed.
          </span>{" "}
        </h2>
        <a
          href="#_"
          className="inline-flex items-center justify-center h-14 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-500 border-solid rounded-full cursor-pointer select-none  hover:border-gray-300 focus:shadow-xs focus:no-underline"
        >
          Get started - it&apos;s free!
        </a>
      </div>
      <div className=" w-full h-[1px] bg-gradient-to-l from-transparent to-slate-400"></div>
    </section>
  );
};

export default Start;
