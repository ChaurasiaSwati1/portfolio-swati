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
        <Box width={"100%"} h={"100vh"} backgroundSize={"cover"} className="land_bg" py="30px" px={7} overflow={"hidden"}>
          <SimpleGrid p={{sm:"30px", md:"40px", lg:"50px"}} templateColumns={{sm:"1fr", md:"3fr 2fr", lg:"1fr 1fr"}}  alignItems={"center"} spacing={5} h="100%">
            <Box>
              <LandingContent />
            </Box>
            <Flex  h="fit-content" justifyContent={"flex-end"} display={{sm:"none", md:"inline-block"}}>
              <Image src={bg} display={{md:"none", lg:"inline-block"}} zIndex={"1"} maxH={{md:"60rem", lg:"100rem"}} position={{md:"initial",lg:"absolute"}} right={"10rem"}  top={"-5rem"}  objectFit="contain" height="auto" width="auto"/>
              <Image src={profile} zIndex={"5"} maxH={{md:"50rem", lg:"100rem"}} position={{sm:"initial",md:"absolute"}}  bottom={"0"}  objectFit="contain" height="auto" width="auto"/>
            </Flex>
          </SimpleGrid>
        </Box>
    );
  }
  
  export default Landing;
  