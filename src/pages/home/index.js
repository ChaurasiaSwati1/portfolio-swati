import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import laptop from "../../assets/img/laptop-png-6746.png";
import HomeInternship from "../../components/homeBlogs/HomeInternship"
import HomeCorporate from "../../components/homeBlogs/HomeCorporate"
import BannerText from "../../components/bannerHome/bannerText";
import Name from "../../components/name/Name";

function HomeIndexPage() {
  return (
    <>
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
          <Box>
            <Name />
          </Box>
          {/* <Text pb="10" fontSize="2rem" fontWeight="600">
            Overview
          </Text> */}
          <SimpleGrid
            pb="30"
            templateColumns={{ md: "3fr 2fr", lg: "1fr 1fr" }}
            alignItems={"center"}
            spacing={5}
          >
              
            <Box>
              <BannerText />
            </Box>
            <Flex h="fit-content">
            
              <Image
                className="hoverable"
                src={laptop}
                mx={"auto"}
                top={"55px"}
                maxH={{ sm: "300px", md: "280px", lg: "300px", xl: "420px" }}
                maxW={{ sm: "auto", md: "280px", lg: "300px", xl: "420px" }}
                objectFit="contain"
                height="auto"
                width="auto"
              />
            </Flex>
          </SimpleGrid>
          <Text pb="4rem" fontSize="2rem" fontWeight="600">
            Internship
          </Text>
          <SimpleGrid
            pb="30"
            alignItems={"center"}
            spacing={5}
          >
            
            <Flex>
              <HomeInternship />
            
            </Flex>
          </SimpleGrid>
          <Text pb="4rem" fontSize="2rem" fontWeight="600">
            Associate  UI Developer
          </Text>
          <SimpleGrid
            pb="30"
            alignItems={"center"}
            spacing={5}
          >
            
            <Flex>
              <HomeCorporate />
            
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default HomeIndexPage;
