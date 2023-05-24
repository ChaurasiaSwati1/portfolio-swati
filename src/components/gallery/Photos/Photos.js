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
import ImageGallery from 'react-image-gallery';
import p1 from "../../../assets/img/photo-1.jpg";
import p2 from "../../../assets/img/photo-2.jpg";
import p3 from "../../../assets/img/photo-3.jpg";
import p4 from "../../../assets/img/photo-4.jpg";
import p5 from "../../../assets/img/photo-5.jpg";


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
    },
];


function Photos() {
  return (

    <>
      <Box justifyContent="center" h="100%" className="gallery">
          <ImageGallery items={images} showPlayButton={false}/>
      </Box>
    </>
  );
}

export default Photos;
