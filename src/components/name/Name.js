import { Box, Container, Flex, Heading,Link, Image, Text } from "@chakra-ui/react";
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
      <Box w="100%" pt={6}>
            {/* <TextAnimation> */}
              <Heading as="h1" fontSize="32px" fontWeight="600">
                Swati Chaurasia
              </Heading>
            {/* </TextAnimation> */}
            <Heading as="h3" fontSize="16px" fontWeight="600" pb="5">
              Associate UI Developer
            </Heading>
            <Flex gap={4} alignItems={"center"} mb="5">
              <Box
                bg="rgba(39, 110, 148, .2)"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                border="1px"
                borderColor={"#032747"}
                borderRadius="50%"
                height="80px"
                width="80px"
              >
                <Text fontSize="10px" fontWeight="600">
                  Oct 20
                </Text>
                <Text fontSize="10px" fontWeight="600">
                  2021
                </Text>
              </Box>
              <Box>
                <Image src={arrow} width="100px" />
              </Box>
              <Box
                bg="rgba(39, 110, 148, .2)"
                border="1px"
                borderColor={"#032747"}
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
                _hover={{textDecoration:'none'}}
                justifyContent={"center"}>
               <Text fontSize="10px" fontWeight="600">Exalogic</Text>
               <Text fontSize="10px" fontWeight="600">Consulting</Text>
               </Link>
              </Box>
            </Flex>
</Box>
</Container>
    </>
  );
}

export default Name;
