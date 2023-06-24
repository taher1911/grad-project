import React from "react";

type Props = {};

const Video = (props: Props) => {
  return (
    <section className="my-20">
      <h2 className="text-center w-[70%] mx-auto text-4xl text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
        The{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          quickest and most convenient
        </span>{" "}
        way to check your videos
      </h2>
      <div className="video relative">
        <iframe
          width="1265"
          height="660"
          src="https://www.youtube.com/embed/g7xkVEWrX8E"
          title="Web Design Promotional Video - After Effects Template"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
