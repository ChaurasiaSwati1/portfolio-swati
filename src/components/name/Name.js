import { Box, Container, Flex, Heading,Link, Image, Text } from "@chakra-ui/react";
import React from "react";
import arrow from "../../assets/img/arrow.png";

function Name() {
  return (
    <>
    <Container
          maxW="full"
          overflowY={"auto"}
          px={0}
          color={"#032747"}
        >
      <Box w="100%" pt={6}>

            <Heading as="h1" fontSize="52px" fontWeight="600">
              Swati Chaurasia
            </Heading>
            <Heading as="h3" fontSize="20px" fontWeight="600" pb="10">
              Associate UI Developer
            </Heading>
            <Flex gap={4} alignItems={"center"} mb="10">
              <Box
                bg="rgba(39, 110, 148, .2)"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                border="1px"
                borderColor={"#032747"}
                borderRadius="50%"
                height="100px"
                width="100px"
              >
                <Text fontSize="15px" fontWeight="600">
                  Oct 20
                </Text>
                <Text fontSize="15px" fontWeight="600">
                  2021
                </Text>
              </Box>
              <Box>
                <Image src={arrow} width="150px" />
              </Box>
              <Box
                bg="rgba(39, 110, 148, .2)"
                border="1px"
                borderColor={"#032747"}
                borderRadius="50%"
                height="100px"
                width="100px"
              >
               <Link 
               href="https://www.exalogic.co/"
               target="_blank"
               height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                _hover={{textDecoration:'none'}}
                justifyContent={"center"}>
               <Text fontSize="15px" fontWeight="600">Exalogic</Text>
               <Text fontSize="15px" fontWeight="600">Consulting</Text>
               </Link>
              </Box>
            </Flex>
</Box>
</Container>
    </>
  );
}

export default Name;
