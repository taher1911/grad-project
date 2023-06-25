import PriceCard from "@/components/ui/PriceCard";
import React, { useState } from "react";

type Props = {};

const data = [
  {
    id: 1,
    popular: false,
    title: "Free",
    mPrice: 0,
    yPrice: 0,
    about: "For anyone who wishes to try Detectiva app",
    btnTxt: "get started",
    billedMonthly: "",
    billedAnnually: "",
    list: [
      "6000+ Video Templates",
      "3M+ Standard Media Library",
      "AI Script Generator",
      "Automated Text to Speech",
      "Collaborate with Team",
    ],
  },
  {
    id: 2,
    popular: true,
    title: "Business",
    mPrice: 30,
    yPrice: 15,
    about: "For small business, educators and influencers",
    btnTxt: "get Business",
    billedMonthly: "*Billed monthly until cancelled",
    billedAnnually: "*Billed $180 annually",
    list: [
      "6000+ Video Templates",
      "3M+ Standard Media Library",
      "AI Script Generator",
      "Automated Text to Speech",
      "Collaborate with Team",
    ],
  },
  {
    id: 3,
    popular: false,
    title: "Unlimited",
    mPrice: 60,
    yPrice: 30,
    about: "For agencies and larger teams",
    btnTxt: "get unlimited",
    billedMonthly: "*Billed monthly until cancelled",
    billedAnnually: "*Billed $360 annually",
    list: [
      "6000+ Video Templates",
      "3M+ Standard Media Library",
      "AI Script Generator",
      "Automated Text to Speech",
      "Collaborate with Team",
    ],
  },
];
const Prices = (props: Props) => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="my-20 w-[90%] mt-10">
      <h2 className="text-center  mx-auto text-4xl text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
        The right plans,
        <span className="bg-gradient-to-r block from-pink-500 to-violet-500 bg-clip-text text-transparent">
          for the right price
        </span>{" "}
      </h2>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 p-1 rounded-full font-bold">
          <button
            className="py-2 px-4 cursor-pointer rounded-full tracking-wider "
            style={{
              background: isMonthly ? "transparent" : "#eee",
              color: isMonthly ? "#fff" : "black",
            }}
            onClick={() => setIsMonthly(false)}
          >
            Monthly
          </button>
          <button
            className="py-2 px-4 cursor-pointer rounded-full tracking-wider"
            style={{
              background: isMonthly ? "#eee" : "transparent",
              color: isMonthly ? "black" : "#eee",
            }}
            onClick={() => setIsMonthly(true)}
          >
            Yearly{" "}
            <span className=" bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Save 50%
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex justify-between max-w-[1150px] mx-auto">
        {data.map((el) => (
          <PriceCard
            key={el.id}
            id={el.id}
            popular={el.popular}
            title={el.title}
            mPrice={el.mPrice}
            yPrice={el.yPrice}
            about={el.about}
            btnTxt={el.btnTxt}
            billedMonthly={el.billedMonthly}
            billedAnnually={el.billedAnnually}
            list={el.list}
            isMonthly={isMonthly}
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
