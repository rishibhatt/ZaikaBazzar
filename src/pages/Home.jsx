import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import FoodList from "../components/FoodList/FoodList";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FoodList />
    </div>
  );
};

export default Home;
