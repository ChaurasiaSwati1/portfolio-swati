import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import rc from "../../assets/doc/swati-resume.pdf";
function LandingContent() {
  return (
    <>
      <Box className="land-left">
        <Text
          as="h3"
          color={"#032747"}
          fontWeight="700"
          fontSize="4rem"
          className="txt"
        >
          Hey..{" "}
        </Text>
        <Text
          as="h1"
          color={"#032747"}
          fontWeight="700"
          fontSize="4rem"
          className="txt"
        >
          I'm &nbsp;
          <Link
            href="/blogs"
            cursor={"pointer"}
            color={"#032747"}
            fontWeight="700"
            data-text="Swati"
            className="land_heading"
          >
            Swati
          </Link>
        </Text>
        <Text
          as="h2"
          color={"#032747"}
          fontWeight="700"
          className=""
          fontSize={{base: '3rem', md: '3.4rem', lg: '4.5rem', xl:'6rem'}}
        >
          Associate UI Developer
        </Text>

        <Text
          as="h3"
          mb="4rem"
          color={"#032747"}
          fontWeight="700"
          className="txt"
          fontSize="4rem"
        >
          <Link
            target="_blank"
            href="https://www.exalogic.co/"
            cursor={"pointer"}
          >
            Exalogic Consulting
          </Link>
        </Text>
        <Flex justifyContent="">
            {/* <Link
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
            </Link> */}
          <Link
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            href="/experience"
          >
          <Text
            fontSize="1.5rem"
            // ml="15px"
            p="8px 16px"
            borderRadius="4px"
            background="#1D4044"
            color="#ffffff"
            _hover={{ padding: "7px 15px", background: "#ffffff", color: "#1D4044", border: "1px solid #1D4044" }}
          >
            {" "}
              Browse Projects
          </Text>
            </Link>
        </Flex>
      </Box>
    </>
  );
}

export default LandingContent;
