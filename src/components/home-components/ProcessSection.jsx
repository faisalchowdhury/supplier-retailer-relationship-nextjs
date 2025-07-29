import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      icon: <FaUserPlus size={30} />,
      description: "Retailers and SRs register and await admin approval.",
    },
    {
      step: 2,
      title: "Get Verified",
      icon: <MdVerified size={30} />,
      description: "Sales reps are verified by admin before being listed.",
    },
    {
      step: 3,
      title: "Connect",
      icon: <FiLink2 size={30} />,
      description: "Retailers connect with SRs and explore product catalogs.",
    },
    {
      step: 4,
      title: "Place Orders",
      icon: <AiOutlineShoppingCart size={30} />,
      description: "Retailers place orders directly from the live inventory.",
    },
    {
      step: 5,
      title: "Manage",
      icon: <CgWebsite size={30} />,
      description: "Both sides track orders, products, and connections easily.",
    },
  ];
  return (
    <section className="my-30">
      <div className="px-4">
        <h2 className="text-3xl font-medium text-center my-20">
          How Our Platform Works
        </h2>
        <div className="relative  grid grid-cols-2 lg:grid-cols-5 items-center md:justify-between gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 w-full relative border border-slate-100">
              <div className="absolute bg-primary py-2 text-white flex justify-center items-center text-xs rounded-full right-0 left-0 -top-3 w-[70px] m-auto">
                Step {step.step}
              </div>
              <div className="mx-auto text-blue-600 mb-3">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>

              {/* Connector line - hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0  left-44 transform translate-x-1/2 w-20 h-[1px] bg-secondary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
