import {
  Box,
  Container, SimpleGrid, Flex, Image, Text
} from "@chakra-ui/react";
import rc from "../assets/doc/swati-resume.pdf";
import React from "react";
import profile from "../assets/img/profile.svg"
import bg from "../assets/img/bg2.png"
import LandingContent from "../components/landingContent/LandingContent";
// import bg from ""

function LandingBanner() {
  return (
    <Box width={"100%"} backgroundSize={"cover"} className="land_bg" pb="30px" overflow={"hidden"}>
      <Container maxW="container.xl" py="7" px={12} >
        <SimpleGrid w="100%" templateColumns={{ base: "1fr", sm: "3fr 2fr", lg: "3fr 2fr" }} alignItems={"center"} spacing={5} h={{ base: "auto", md: "auto" }}>
          <Box>
            <LandingContent />
          </Box>
          <Flex position={"relative"} justifyContent={"flex-end"} display={{ base: "none", sm: "inline-block" }} h={"100%"}>
            <Image m={"auto"} src={profile} zIndex={"5"} maxH={{ sm: "30rem", md: "40rem", lg: "45rem" }} objectFit="contain" height="auto" width="auto" className="land_user" />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default LandingBanner;
