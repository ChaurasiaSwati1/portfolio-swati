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
import about from "../../../assets/img/about.png";
import ImageGallery from 'react-image-gallery';
import p1 from "../../../assets/img/paint-1.jpg";
import p2 from "../../../assets/img/paint-2.jpg";
import p3 from "../../../assets/img/paint-3.jpg";
import p4 from "../../../assets/img/paint-4.jpg";
import p5 from "../../../assets/img/paint-5.jpg";
import p6 from "../../../assets/img/paint-6.jpg";

const images = [
  {
    original: p1,
    thumbnail: p1,
  },{
    original: p2,
    thumbnail: p2,
  },{
    original: p3,
    thumbnail: p3,
  },{
    original: p4,
    thumbnail: p4,
  },{
    original: p5,
    thumbnail: p5,
  },{
    original: p6,
    thumbnail: p6,
  },
];


function Painting() {
  return (

    <>
      <Box justifyContent="center" h="100%" className="gallery">
          <ImageGallery items={images} showPlayButton={false}/>
      </Box>
    </>
  );
}

export default Painting;
