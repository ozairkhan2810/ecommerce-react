import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "./Banner";
import Categories from "./Categories";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default Homepage;
