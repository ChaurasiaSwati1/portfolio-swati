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
             <Name/>
             </Box>
          <SimpleGrid templateColumns={{md:"2fr 3fr", lg: "1fr 1fr" }}  flexDirection={{md:"column-reverse"}} spacing={5} minH="100vh">
          <Flex  pt="30" h="fit-content">
              <Image src={about} top={"55px"}  maxH={{sm:"300px", md:"280px", lg:"320px", xl:"470px"}} maxW={{sm:"auto", md:"280px", lg:"320px", xl:"470px"}} objectFit="contain" height="auto" width="auto"/>
            </Flex>
            <Box>
            <Text fontSize="16px" fontWeight="600" pb="5">
              My Achievements..
            </Text>
              <AboutContent />
            </Box>
            
            
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default AboutIndexPage;