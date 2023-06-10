import {
    Box,
    Link,SimpleGrid, Flex, Image
} from "@chakra-ui/react";
import React from "react";
import profile from "../assets/img/swati.png"
import bg from "../assets/img/bg2.png"
import LandingContent from "../components/landingContent/LandingContent";
  // import bg from ""
  
  function Landing() {
    return (
        <Flex alignItems={"center"} width={"100%"} h={"100vh"} backgroundSize={"cover"} className="land_bg" py="30px" px={7} overflow={"hidden"}>
          <SimpleGrid p={{sm:"30px", md:"40px", lg:"50px"}} w="100%" templateColumns={{sm:"1fr", md:"3fr 2fr", lg:"1fr 1fr"}}  alignItems={"center"} spacing={5} h={{base:"auto", md:"auto", lg:"100vh"}}>
            <Box>
              <LandingContent />
            </Box>
            <Flex position={"relative"} justifyContent={"flex-end"} display={{base:"none",sm:"none", md:"inline-block"}} h={"100%"}>
              <Image src={bg} display={{md:"none", lg:"inline-block"}} zIndex={"1"} maxH={{md:"60rem", lg:"100rem"}} position={{md:"initial",lg:"absolute"}} right={"50px"}  top={"-100px"}  objectFit="contain" height="auto" width="auto"/>
              <Image src={profile} zIndex={"5"} maxH={{md:"50rem", lg:"100rem"}} position={{sm:"initial",md:"absolute"}} right={"0"}  bottom={{md:"-40px",lg:"-50px"}}  objectFit="contain" height="auto" width="auto"/>
            </Flex>
          </SimpleGrid>
        </Flex>
    );
  }
  
  export default Landing;
  