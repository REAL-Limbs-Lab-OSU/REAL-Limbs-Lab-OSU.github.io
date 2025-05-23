import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          core research pillars
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="Biomimetic Control"
            subTitle="We develop control systems that emulate natural human locomotion, enabling prosthetic 
            limbs that are intuitive, adaptive, reliable, and highly functional."
            Icon={RxCopy}
          />
          <OfferCard
            title="Prosthesis Design"
            subTitle="We engineer advanced prostheses that seek to integrate seamlessly with 
            the human body, enhancing functionality, mobility, and comfort through innovative design."
            Icon={SiAntdesign}
          />
          <OfferCard
            title="Biomechanics Studies"
            subTitle="We analyze human movement patterns to inform the development of prosthetic 
            technologies that restore and augment user mobility."
            Icon={FaChartPie}
          />
          <OfferCard
            title="Human-Robot Interaction"
            subTitle="We design intuitive interfaces and study user–prosthesis interaction to ensure usefulness, 
            promote seamless integration, and enhance embodiment."
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
