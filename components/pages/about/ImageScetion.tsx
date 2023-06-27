import React from "react";
import Link from "next/link";
type Props = {};

const ImageScetion = (props: Props) => {
  return (
    <Link
      href={""}
      className="block w-[80%] max-w-[1200px] h-[550px] mx-auto my-20 mt-10 bg-[url(https://res.cloudinary.com/freelancer3223/image/upload/v1687822214/gradProject/Screenshot_127_xttwf9.png)] bg-cover bg-center bg-no-repeat hover:scale-[1.01] transition-all duration-300 rounded-3xl"
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-end items-center">
        <h3 className="text-center text-gray-100 font-bold text-5xl w-[60%] ">
          Try our service and check your videos.
        </h3>
      </div>
    </Link>
  );
};

export default ImageScetion;
