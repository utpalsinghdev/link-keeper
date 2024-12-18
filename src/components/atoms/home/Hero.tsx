import React from "react";
import ButtonLink from "./ButtonLink";

const Hero = () => {
  return (
    <div className="container flex items-center">
      <div>
        <h1>Building apps just</h1>
        <h1>got easier</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          vitae quae atque eaque expedita sapiente eligendi iste. Vero eveniet
          dolorem debitis excepturi placeat cumque, unde, est facere sunt
          asperiores provident!
        </p>
        <ButtonLink name={"Get started"} url={"/login"} />
      </div>
      <div>h</div>
    </div>
  );
};

export default Hero;
