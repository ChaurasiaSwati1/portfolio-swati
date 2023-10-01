import {
  Box,
  Flex, Image,
  SimpleGrid, Icon,Container
} from "@chakra-ui/react";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import profile from "../assets/img/bd-dot.jpg"
import LandingSkillsContents from "../components/LandingSkillsContents/LandingSkillsContents";

function LandingSkill() {
  return (
    <Box width={"100%"} backgroundSize={"cover"} className="skills_bg" pb="30px" overflow={"hidden"}>
    <Container maxW="container.xl" p="7"  >
      <SimpleGrid  w="100%" templateColumns={{ sm: "1fr", md: "3fr 2fr" }} alignItems={"center"} spacing={5} h={{ base: "auto", md: "auto" }}>
        <Flex h={"100%"} w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Box h={"100%"} className="skill_img" mr={"2rem"} display={{ base: "none", sm: "inline-flex" }} alignItems={"center"}>
            <Image m={"auto"} src={profile} objectFit="contain" height="auto" width="auto" />
          </Box>
          <Box h={"100%"} className="skill_s" mr={"2rem"}>
            <h4>Website Development</h4>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />HTML/CSS</p>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />React JS/Chakra UI</p>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />Bootstrap</p>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />Javascript</p>
          </Box>
          <Box h={"100%"} className="skill_s" mr={"2rem"}>
            <h4>Others</h4>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />GitHub</p>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />Visual Studio</p>
            <p><Icon as={BsFillCheckCircleFill} color={"#f12c2c"} fontSize="12px" mr="10px" />Intellij</p>
          </Box>
          <Box h={"100%"} className="skill_img" mr={"2rem"} display={{ base: "none", sm: "inline-flex" }} alignItems={"center"}>
            <Image m={"auto"} src={profile} objectFit="contain" height="auto" width="auto" />
          </Box>
        </Flex>
        <Box>
          <LandingSkillsContents />
        </Box>
      </SimpleGrid>
    </Container>
    </Box>
  );
}

export default LandingSkill;
