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
          <Box>
              {/* <Text fontSize="2.25rem" fontWeight="600" pb="5">
                Work Experience..
              </Text> */}
              <ExperienceContent />
            </Box>
        </Container>
      </Box>
    </>
  );
};


export default ExperienceIndexPage;