import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  Heading,
  Link,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import C1 from "../../../assets/img/craft-1.jpg";
import C2 from "../../../assets/img/craft-2.jpg";
import ImageGallery from 'react-image-gallery';


const images = [
  {
      original: C1,
      thumbnail: C1,
    },{
      original: C2,
      thumbnail: C2,
    },
];


function Crafting() {
  return (

    <>
      <Box justifyContent="center" h="100%" className="gallery">
          <ImageGallery items={images} showPlayButton={false}/>
      </Box>
    </>
  );
}

export default Crafting;
