import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import laptop from "../../assets/img/laptop-png-6746.png"

import Name from '../../components/name/Name';
import BannerText from "../../components/bannerHome/bannerText";

function HomeIndexPage() {
  return (
    <>
      <Box>
        <Container maxW={"full"} py={"0"} px={7} m="0">
          <SimpleGrid templateColumns={{ lg: "1fr 1fr" }} spacing={5} minH="100vh">
            <Box>
              
            
             <Name/>
            <Text fontSize="16px" fontWeight="600" pb="5">
              Working on..
            </Text>
              <BannerText />
            </Box>
            <Flex  alignItems={"center"} h="100%">
              <Image src={laptop} top={"100px"} maxH={"505px"} position={"fixed"} maxW={"505px"} objectFit="cover" height="auto" width="100%"/>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default HomeIndexPage;