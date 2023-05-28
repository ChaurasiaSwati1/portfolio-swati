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
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
          <Box>
            <Name />
          </Box>
          <SimpleGrid pb="30" templateColumns={{ md: "2fr 3fr", lg: "1fr 1fr" }} flexDirection={{ md: "column-reverse" }} spacing={5} minH="100vh">
            <Flex  h="fit-content">
              <Image className="hoverable" pt={{md:"30px"}}  mx={"auto"} src={exp} maxH={{ sm: "300px", md: "280px", lg: "320px", xl: "470px" }} maxW={{ sm: "auto", md: "280px", lg: "320px", xl: "470px" }} objectFit="contain" height="auto" width="auto" />
            </Flex>
            <Box>
              <Text fontSize="2.25rem" fontWeight="600" pb="5">
                Work Experience..
              </Text>
              <ExperienceContent />
            </Box>


          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default ExperienceIndexPage;