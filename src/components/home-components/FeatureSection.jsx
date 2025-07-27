import React from "react";
import { MdVerified } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
const FeatureSection = () => {
  const featureCards = [
    {
      icon: <MdVerified size={50} />,
      title: "Verified SR",
      description: "Every sales representative is manually approved.",
    },
    {
      icon: <AiOutlineProduct size={50} />,
      title: "Live Product Inventory",
      description: "See up-to-date product stock from your connected reps.",
    },
    {
      icon: <CgWebsite size={50} />,
      title: "Unified Dashboards",
      description:
        "Both retailers and sales reps stay in control with dedicated dashboards designed for seamless management.",
    },
  ];

  return (
    <section className="my-20">
      <h2 className="text-3xl font-medium text-center my-20">
        Why Choose Vendor Match ?
      </h2>
      <div className="grid grid-cols-3 gap-5 ">
        {featureCards.map((card, i) => (
          <div
            className={`${
              i === 1 && "bg-primary text-white"
            }  p-5 rounded-lg shadow border border-slate-100 hover:shadow-2xl`}>
            <div className="my-4">{card.icon}</div>

            <h3 className="text-2xl">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
