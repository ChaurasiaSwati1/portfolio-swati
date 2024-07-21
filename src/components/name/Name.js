import { Box, Container, Flex, Heading, Link, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import arrow from "../../assets/img/arrow.png";
// import TextAnimation from 'react-animated-text';


function Name() {
  return (
    <>
      <Container maxW="container.xl" py={"0"} px={12}
        overflowY={"auto"}
        color={"#032747"}
      >
        <Box className="banner" backgroundBlendMode={"darken"} backgroundSize={"cover"} p={{ sm: "25px", md: "35px" }}>

          <SimpleGrid templateColumns={{ sm: "1fr 1fr" }} spacing={5}>
            <Flex className="name-txt" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              {/* <TextAnimation> */}
              <Heading as="h1" fontSize="32px" fontWeight="600" mb="5">
                <Box className="animate one">
                  <Box as="span">S</Box><Box as="span">w</Box><Box as="span">a</Box><Box as="span">t</Box><Box as="span">i</Box> &nbsp;
                  <Box as="span">C</Box><Box as="span">h</Box><Box as="span">a</Box><Box as="span">u</Box><Box as="span">r</Box><Box as="span">a</Box><Box as="span">s</Box><Box as="span">i</Box><Box as="span">a</Box>
                </Box>
                {/* Swati Chaurasia */}
              </Heading>
              {/* </TextAnimation> */}
              <Heading as="h3" fontSize="16px" fontWeight="600">
                <Box className="animate one">
                  <Box as="span">A</Box><Box as="span">s</Box><Box as="span">s</Box><Box as="span">o</Box><Box as="span">c</Box><Box as="span">i</Box><Box as="span">a</Box><Box as="span">t</Box><Box as="span">e</Box> &nbsp;
                  <Box as="span">U</Box><Box as="span">I</Box>&nbsp;<Box as="span">D</Box><Box as="span">e</Box><Box as="span">v</Box><Box as="span">e</Box><Box as="span">l</Box><Box as="span">o</Box><Box as="span">p</Box><Box as="span">e</Box><Box as="span">r</Box>
                </Box>
                {/* Associate UI Developer */}
              </Heading>

            </Flex>
            <Flex>
              <Flex gap={4}
                className="work" mx={"auto"} justifyContent={"center"} alignItems={"center"}>
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
                    March 25
                  </Text>
                  <Text fontSize="10px" fontWeight="600">
                    2024
                  </Text>
                </Box>
                <Box>
                  <Image src={arrow} transform={"none !important"} width={"80px"} maxW={{ sm: "50px", md: "80px", lg: "100px" }} />
                </Box>
                <Box
                  bg="#ffffff"
                  borderRadius="50%"
                  height="80px"
                  width="80px"
                >
                  <Link
                    href="https://mithilait.com/"
                    target="_blank"
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    color={"#032747"}
                    _hover={{ textDecoration: 'none' }}
                    justifyContent={"center"}>
                    <Text fontSize="10px" fontWeight="600">Mithila</Text>
                    <Text fontSize="10px" fontWeight="600">IT</Text>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default Name;
