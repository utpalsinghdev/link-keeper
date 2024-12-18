import CardSection from "@/components/atoms/home/CardSection";
import Hero from "@/components/atoms/home/Hero";
import Navbar from "@/components/atoms/home/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
    </div>
  );
};

export default Home;
