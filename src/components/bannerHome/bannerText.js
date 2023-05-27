import { Box, Container, Flex, Heading,Link, Image, Text } from "@chakra-ui/react";
import React from "react";


function BannerText() {
  return (
    <>
      <Box w="100%">
        <Container
          maxW="full"
          overflowY={"auto"}
          px={0}
          color={"#032747"}
        >
          <Box justifyContent="center" h="100%" minH="300px">

            
            <Text fontSize="14px" fontWeight="600" fontStyle={"italic"} pb="5">
              HTML, CSS/SCSS, Bootstrap, Javascript/jquery, React.js since Oct
              20, 2021 to design interactive, user-centered and responsive
              website.
            </Text>
            <Text fontSize="14px" fontWeight="600" fontStyle={"italic"} pb="5">
              Currently working on Realcube Project which is based on Properties
              and Facilities Management using React.Js, Chakra UI and Next.Js.
            </Text>
            <Text fontSize="14px" fontWeight="600" fontStyle={"italic"} pb="5">
              Looking for better and challenging opportunity to advance my
              skills for technical and financial growth.
            </Text>
            <Text fontSize="14px" fontWeight="600" fontStyle={"italic"} pb="5">
              A Hardworking and Passionate  UI Developer with strong organizational skills.
            </Text>
            <Text fontSize="14px" fontWeight="600" fontStyle={"italic"} pb="5">
              Ready to support team to acheive their Success Goals.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BannerText;
