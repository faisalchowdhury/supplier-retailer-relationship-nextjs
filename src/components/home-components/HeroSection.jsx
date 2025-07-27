import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center text-center">
      <div className="space-y-5">
        <p className="text-secondary">
          Bridge the supply gap, discover verified products, and streamline your
          retail operations — all in one place.
        </p>
        <h1 className="text-5xl font-semibold leading-14">
          Empowering Retailers with Direct Access
          <br /> to Product Suppliers.
        </h1>
        <div className="flex gap-3 justify-center">
          <div>
            <Button variant={"default"}>Join as retailer</Button>
          </div>
          <div>
            <Button variant={"accent"}>Join as sales representative</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
