import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="w-full h-[80vh]  text-white flex flex-col justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" w-[100vw] h-auto absolute left-0 -top-12 back-video"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/freelancer3223/video/upload/v1687709737/gradProject/3D_Face_Scan_-_Stock_Motion_Graphics_-_Motion_Array_wqzkqh.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute z-10 left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center bg-overlay px-[15%] text-center">
        {/* <h1 className="text-6xl font-bold mb-4 leading-[1.4] capitalize">
          In only a{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            few minutes
          </span>
          , you may check on your videos.
        </h1>
        <p className="tracking-wide mb-8">
          Detectiva uses latest deep learning algorithms and AI techniques to
          make deepfake video identification easier.
        </p> */}
      </div>
    </section>
  );
};

export default Landing;
