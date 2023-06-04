import { Box, Container, Flex, Heading, Link, Image, Text } from "@chakra-ui/react";
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
          <Box justifyContent="center" h="100%" minH="200px">


            <Text fontSize="2rem" fontWeight="600" pb="5">
              Passionate UI Developer with strong organizational skills, ready to
              leverage my expertise in HTML, CSS/SCSS, Bootstrap, React Js, Chakra UI,
              Tailwind CSS, Git, Figma, Excel, Scripting Languages, Javascript, Jquery
              and other technologies to support teams to achieve their success goals.
            </Text>
            <Text fontSize="2rem" fontWeight="600" pb="5">
              Experience in developing Interactive UI Screens, implementing functional Logics using HTML, CSS,
              Javascript/Jquery.
            </Text>

            <Text fontSize="2rem" fontWeight="600" pb="5">
              Looking for better and challenging opportunity to advance my
              skills for technical and financial growth.
            </Text>
            <Text fontSize="2rem" fontWeight="600" pb="5">
              A Hardworking and Passionate  UI Developer with strong organizational skills.
            </Text>
            <Text fontSize="2rem" fontWeight="600" pb="5">
              In my free time, I enjoy exploring new technologies and  Paintings.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BannerText;
