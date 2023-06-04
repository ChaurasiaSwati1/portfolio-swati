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

function AboutIndexPage() {
  return (
    <>
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
          <Box>
            <Name />
          </Box>
          <Box>
            <AboutContent/>
          </Box>
        </Container>
      </Box>
    </>
  );
};


export default AboutIndexPage;