import CardSection from "@/components/atoms/home/CardSection";
import Focus from "@/components/atoms/home/Focus";
import Hero from "@/components/atoms/home/Hero";
import Navbar from "@/components/atoms/home/Navbar";
import Tools from "@/components/atoms/home/Tools";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
      <Tools />
      <Focus />
    </div>
  );
};

export default Home;
