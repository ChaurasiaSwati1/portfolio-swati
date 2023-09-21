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
import LandingSkills from "../../layout/LandingSkills";

function Landing() {
  return (
    <>
      <LandingBanner/>
      <LandingSkills/>
    </>
  );
}

export default Landing;
