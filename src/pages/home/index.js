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
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
          <Box>
             <Name/>
             </Box>
          <SimpleGrid templateColumns={{md:"2fr 3fr", lg: "1fr 1fr" }}  flexDirection={{md:"column-reverse"}} spacing={5} minH="100vh">
          <Flex  pt="30" h="fit-content">
              <Image src={laptop} top={"55px"}   maxH={{sm:"300px", md:"280px", lg:"320px", xl:"470px"}} maxW={{sm:"auto", md:"280px", lg:"320px", xl:"470px"}} objectFit="contain" height="auto" width="auto"/>
            </Flex>
            <Box>
            <Text fontSize="16px" fontWeight="600" pb="5">
              Working on..
            </Text>
              <BannerText />
            </Box>
            
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default HomeIndexPage;