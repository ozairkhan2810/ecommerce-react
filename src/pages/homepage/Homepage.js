import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/homepage/Banner";
import Categories from "../../components/homepage/Categories";
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
