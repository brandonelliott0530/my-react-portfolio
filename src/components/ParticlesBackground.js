import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = () => {
  return <Particles id="particles" params={particlesConfig}></Particles>;
};

export default ParticlesBackground;
