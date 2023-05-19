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

import Name from '../../components/name/Name';
import ExperienceContent from "../../components/experienceContent/ExperienceContent";
import exp from '../../assets/img/work-experience-remove-bg.png';

function ExperienceIndexPage() {
  return (
    <>
      <Box>
        <Container maxW={"full"} py={"0"} px={7} m="0">
          <SimpleGrid templateColumns={{ lg: "1fr 1fr" }} spacing={5} minH="100vh">
            <Box>
              <Name/>
              <Text fontSize="24px" fontWeight="600" pb="5">
                Work Experience..
              </Text>
              <ExperienceContent />
            </Box>
            
            <Flex pt="30" h="fit-content">
              <Image src={exp} top={"55px"} maxH={"505px"} position={"fixed"} maxW={"505px"} objectFit="contain" height="auto" width="100%"/>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default ExperienceIndexPage;