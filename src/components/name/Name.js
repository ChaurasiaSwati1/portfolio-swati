import { Box, Container, Flex, Heading, Link, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import arrow from "../../assets/img/arrow.png";
// import TextAnimation from 'react-animated-text';


function Name() {
  return (
    <>
      <Container
        maxW="full"
        overflowY={"auto"}
        px={0}
        color={"#032747"}
      >
        <Box className="banner" backgroundBlendMode={"darken"} backgroundSize={"cover"} p={{sm:"25px",md:"35px"}} mb="30px">
          
        <SimpleGrid templateColumns={{ sm: "1fr 1fr" }}  spacing={5}>
          <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            {/* <TextAnimation> */}
            <Heading as="h1" fontSize="32px" fontWeight="600">
              Swati Chaurasia
            </Heading>
            {/* </TextAnimation> */}
            <Heading as="h3" fontSize="16px" fontWeight="600">
              Associate UI Developer
            </Heading>

          </Flex>
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Box
              bg="#ffffff"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              border="1px"
              borderColor={"#ffffff"}
              borderRadius="50%"
              height="80px"
              width="80px"
              color={"#032747"}
            >
              <Text fontSize="10px" fontWeight="600">
                Oct 20
              </Text>
              <Text fontSize="10px" fontWeight="600">
                2021
              </Text>
            </Box>
            <Box>
              <Image src={arrow} width={"80px"} maxW={{ sm: "50px", md: "80px", lg: "100px" }} />
            </Box>
            <Box
              bg="#ffffff"
              borderRadius="50%"
              height="80px"
              width="80px"
            >
              <Link
                href="https://www.exalogic.co/"
                target="_blank"
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                color={"#032747"}
                _hover={{ textDecoration: 'none' }}
                justifyContent={"center"}>
                <Text fontSize="10px" fontWeight="600">Exalogic</Text>
                <Text fontSize="10px" fontWeight="600">Consulting</Text>
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default Name;
