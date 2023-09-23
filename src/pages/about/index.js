import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import about from "../../assets/img/about.png"
import Name from '../../components/name/Name';
import AboutContent from "../../components/aboutContent/AboutContent";
import About from "../../components/aboutContent/About";
import Hobbies from "../../components/aboutContent/Hobbies";

function AboutIndexPage() {
  return (
    <>
            <Name />
            <AboutContent/>
            <About/>
            <Hobbies/>
    </>
  );
};


export default AboutIndexPage;