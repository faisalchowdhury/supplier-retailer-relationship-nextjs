"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";

const SrSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="mb-30">
      <div className="flex justify-between items-center gap-5">
        <div data-aos="fade-right" className="flex-1 flex justify-start">
          <Image
            src={"/images/sr.jpg"}
            alt="Retailer Image"
            width={500}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-5 flex-1" data-aos="fade-left">
          <h2 className="text-3xl font-medium">
            Reach More Retailers. Sell More Products — Without Leaving the Shop.
          </h2>
          <p>
            Tired of missing out on orders because you couldn’t visit every
            store? Our platform helps you connect with retailers directly,
            showcase your available stock, and manage orders — all from your
            phone or laptop. Whether you're on the move or at your office,
            you’ll always be one step closer to your next sale. Save time,
            expand your reach, and grow your network — faster than ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SrSection;
