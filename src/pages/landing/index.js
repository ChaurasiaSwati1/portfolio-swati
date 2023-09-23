import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import LandingBanner from "../../layout/LandingBanner";
import Commitment from "../../components/commitment/Commitment";
import AboutCard from "../../components/aboutCard/aboutCard";
import LandingSkill from "../../layout/LandingSkill";

function Landing() {
  return (
    <>
      <LandingBanner/>
      <LandingSkill/>
      <Commitment/>
      <AboutCard/>
    </>
  );
}

export default Landing;
