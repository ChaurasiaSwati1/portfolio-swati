import {
  Box,
  Link, SimpleGrid, Flex, Image, Text
} from "@chakra-ui/react";
import rc from "../assets/doc/swati-resume.pdf";
import React from "react";
import profile from "../assets/img/profile.svg"
import bg from "../assets/img/bg2.png"
import LandingContent from "../components/landingContent/LandingContent";
// import bg from ""

function LandingBanner() {
  return (
    <Box width={"100%"} backgroundSize={"cover"} className="land_bg" pb="30px" overflow={"hidden"}>
      {/* <SimpleGrid p={{ sm: "15px 30px ", md: "15px 40px", lg: "15px 50px" }} w="100%" alignItems={"center"} h={{ base: "auto", lg: "auto" }}>
        <Flex justifyContent="space-between">

          <Link
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            href="/blogs"
          >
            <Text
              fontSize="1.5rem"
              p="8px 16px"
              borderRadius="4px"
              background="#ffffff"
              color="#032747"
              _hover={{ background: "#032747", color: "#ffffff" }}
            >
              {" "}
              Go..
            </Text>
          </Link>
          <Link
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            href={rc}
            download="swati-resume.pdf"
          >
            <Text
              fontSize="1.5rem"
              p="8px 16px"
              borderRadius="4px"
              background="#ffffff"
              color="#032747"
              _hover={{ background: "#032747", color: "#ffffff" }}
            >
              {" "}
              Download CV
            </Text>
          </Link>
        </Flex>
      </SimpleGrid> */}
      <SimpleGrid p={{ sm: "30px", md: "40px", lg: "50px" }} w="100%" templateColumns={{ sm: "1fr", md: "3fr 2fr", lg: "1fr 1fr" }} alignItems={"center"} spacing={5} h={{ base: "auto", md: "auto" }}>
        <Box>
          <LandingContent />
        </Box>
        <Flex position={"relative"} justifyContent={"flex-end"} display={{ base: "none", sm: "none", md: "inline-block" }} h={"100%"}>
          {/* <Image src={bg} display={{md:"none", lg:"inline-block"}} zIndex={"1"} maxH={{md:"60rem", lg:"100rem"}} position={{md:"initial",lg:"absolute"}} right={"50px"}  top={"-100px"}  objectFit="contain" height="auto" width="auto"/> */}
          <Image m={"auto"} src={profile} zIndex={"5"} maxH={{ md: "40rem", lg: "50rem" }} objectFit="contain" height="auto" width="auto" className="land_user" />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default LandingBanner;
