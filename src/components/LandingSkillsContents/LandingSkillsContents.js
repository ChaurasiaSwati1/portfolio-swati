import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
function LandingSkillsContents() {
  return (
    <>
      <Flex className="land-left" justifyContent={"center"} alignContent={"center"} flexDirection={"column"}>
        <Text
          as="h6"
          color={"#f77272"}
          fontWeight="600"
          fontSize="1.75rem"
          mb={"10px"}
        >
          Skills I have..
        </Text>
        <Text
          as="h3"
          color={"#032747"}
          fontWeight="600"
          fontSize="3.2rem"
        >
          Associate UI Developer
        </Text>
        <Text
          as="h3"
          color={"#032747"}
          fontWeight="600"
          fontSize="3.2rem"
          mb={"20px"}
        >
          Frontend Designer
        </Text>
        <Text
          color={"#918C8C"}
          fontWeight="500"
          fontSize="1.75rem"
          mb={"35px"}
        >
          I can design anything as per your requirement as I am skilled in HTML, CSS, and
JavaScript/jQuery, resulting in responsive interfaces.
        </Text>

        
        <Flex justifyContent="">
          <Link
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            href="/experience"
          >
          <Text
            fontSize="1.75rem"
            // ml="15px"
            p="8px 16px"
            borderRadius="4px"
            background="#f12c2c"
            color="#ffffff"
            _hover={{ padding: "7px 15px", background: "#ffffff", color: "#f12c2c", border: "1px solid #f12c2c" }}
          >
            {" "}
              Explore More..
          </Text>
            </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingSkillsContents;
