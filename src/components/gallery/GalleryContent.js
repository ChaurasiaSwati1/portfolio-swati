import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  Heading,
  Link,
  CardBody,
  Card,
  SimpleGrid,
  Image,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import about from "../../assets/img/about.png";
import Crafting  from './Crafting/Crafting';
import Poetries from "./Poetries/Poetries";
import Photos from "./Photos/Photos";
import Painting from "./Painting/Painting";


function GalleryContent() {
  return (

    <>
      <Box w="100%">
        <Container maxW="full" px={0} color={"#032747"}>
            <SimpleGrid columns={{md: '2'}} spacing={5}>
              <Box mb={"5"}>
                <Text fontSize="12px" fontWeight="500" pb="15px">
                              Some of my crafts...
                          </Text>
                          <Card className="shadow card">
                      <CardBody>
                          <Crafting />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
              <Text fontSize="12px" fontWeight="500" pb="15px">
                              Some of my Poetries...
                          </Text>
                  <Card className="shadow card">
                      <CardBody>
                          <Poetries />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
              <Text fontSize="12px" fontWeight="500" pb="15px">
                              Some of my Photography...
                          </Text>
                  <Card className="shadow card">
                      <CardBody>
                          <Photos />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
              <Text fontSize="12px" fontWeight="500" pb="15px">
                              Some of my Paintings and Sketching...
                          </Text>
                  <Card className="shadow card">
                      <CardBody>
                          <Painting />
                      </CardBody>
                  </Card>
              </Box>
            </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default GalleryContent;
