"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RetailerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="mb-30">
      <div className="flex justify-between items-center gap-5">
        <div className="space-y-5 flex-1" data-aos="fade-right">
          <h2 className="text-3xl font-medium">
            Never Wait for a Sales Rep Again — Take Control of Your Stock.
          </h2>
          <p>
            As a retailer, running out of products can cost you both time and
            customers. Our platform connects you directly with verified sales
            representatives so you can browse product availability, place
            orders, and restock — anytime you want. Say goodbye to uncertainty
            and delays. Join us to make sourcing faster, smarter, and fully in
            your hands.
          </p>
        </div>
        <div data-aos="fade-left" className="flex-1 flex justify-end">
          <Image
            src={"/images/retailer.jpg"}
            alt="Retailer Image"
            width={500}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RetailerSection;
