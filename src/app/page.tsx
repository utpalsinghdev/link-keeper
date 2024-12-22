import CardSection from "@/components/atoms/home/CardSection";
import Focus from "@/components/atoms/home/Focus";
import Footer from "@/components/atoms/home/Footer";
import Hero from "@/components/atoms/home/Hero";
import Navbar from "@/components/atoms/home/Navbar";
import StartNow from "@/components/atoms/home/StartNow";
// import Testimonials from "@/components/atoms/home/Testimonials";
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
      {/* <Testimonials /> */}
      <StartNow />
      <Footer />
    </div>
  );
};

export default Home;
