import React from "react";
import AboutCard from "../../components/aboutCard/aboutCard";
import Commitment from "../../components/commitment/Commitment";
import Projects from "../../components/projects/projects";
import SkillGraphs from "../../components/skillGraphs/skillGraphs";
import LandingBanner from "../../layout/LandingBanner";
import LandingSkill from "../../layout/LandingSkill";

function Landing() {
  return (
    <>
      <LandingBanner/>
      <LandingSkill/>
      <Commitment/>
      {/* <SkillGraphs/> */}
      <AboutCard/>
      <Projects/>
    </>
  );
}

export default Landing;
