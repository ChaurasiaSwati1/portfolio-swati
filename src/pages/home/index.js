import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";
import laptop from "../../assets/img/laptop-png-6746.png";

import BannerText from "../../components/bannerHome/bannerText";
import Name from '../../components/name/Name';

function HomeIndexPage() {
  return (
    <>
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
          <Box>
             <Name/>
             </Box>
          <SimpleGrid pb="30" templateColumns={{md:"2fr 3fr", lg: "1fr 1fr" }}  alignItems={"center"} spacing={5}>
          <Flex  h="fit-content">
              <Image className="hoverable" src={laptop} mx={"auto"} top={"55px"}   maxH={{sm:"300px", md:"280px", lg:"320px", xl:"470px"}} maxW={{sm:"auto", md:"280px", lg:"320px", xl:"470px"}} objectFit="contain" height="auto" width="auto"/>
            </Flex>
            <Box>
            {/* <Text fontSize="2.25rem" fontWeight="600" pb="5">
              Working on..
            </Text> */}
              <BannerText />
            </Box>
            
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default HomeIndexPage;