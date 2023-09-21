import {
  Box,
  Link, SimpleGrid, Flex, Image, Text
} from "@chakra-ui/react";
import React from "react";
import profile from "../assets/img/profile.svg"
import LandingSkillsContent from "../components/landingSkillsContent/LandingSkillsContent";

function LandingSkills() {
  return (
    <Box width={"100%"} backgroundSize={"cover"} className="skills_bg" pb="30px" overflow={"hidden"}>
      <SimpleGrid p={{ sm: "30px", md: "40px", lg: "50px" }} w="100%" templateColumns={{ sm: "1fr", md: "3fr 2fr", lg: "2fr 1fr" }} alignItems={"center"} spacing={5} h={{ base: "auto", md: "auto" }}>
        <Flex position={"relative"} justifyContent={"flex-end"} display={{ base: "none", sm: "none", md: "inline-block" }} h={"100%"}>
          {/* <Image src={bg} display={{md:"none", lg:"inline-block"}} zIndex={"1"} maxH={{md:"60rem", lg:"100rem"}} position={{md:"initial",lg:"absolute"}} right={"50px"}  top={"-100px"}  objectFit="contain" height="auto" width="auto"/> */}
          <Image m={"auto"} src={profile} zIndex={"5"} maxH={{ md: "40rem", lg: "50rem" }} objectFit="contain" height="auto" width="auto" className="land_user" />
        </Flex>
        <Box>
          <LandingSkillsContent/>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default LandingSkills;
