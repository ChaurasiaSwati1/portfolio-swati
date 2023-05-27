import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Name from '../../components/name/Name';
import GalleryContent from "../../components/gallery/GalleryContent";

function GalleryIndexPage() {
  return (
    <>
      <Box w={"100%"}>
        <Container maxW="container.xl" py={"0"} px={7}>
        <SimpleGrid templateColumns={{ lg: "1fr" }} spacing={5} minH="100vh">
            <Box>
            <Name/>
            <Text fontSize="16px" textAlign={"center"} fontWeight="600" pb="10">
              Personal Gallery
            </Text>
              <GalleryContent />
            </Box>
            
            {/* <Flex  pt="30" h="fit-content">
              <Image src={about} top={"55px"} maxH={"505px"} position={"fixed"} maxW={"505px"}   objectFit="cover" height="auto" width="100%"/>
            </Flex> */}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default GalleryIndexPage;