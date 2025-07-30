import Footer from "@/components/utilities/Footer";
import Header from "@/components/utilities/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
