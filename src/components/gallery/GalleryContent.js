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
                  <Card className="shadow card">
                      <CardHeader borderBottom="1px solid" borderBottomColor="gray.100">
                          <Text fontSize="14px" fontWeight="600" pb="0">
                              Some of my crafts...
                          </Text>
                      </CardHeader>
                      <CardBody>
                          <Crafting />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
                  <Card className="shadow card">
                      <CardHeader borderBottom="1px solid" borderBottomColor="gray.100">
                          <Text fontSize="14px" fontWeight="600" pb="0">
                              Some of my Poetries...
                          </Text>
                      </CardHeader>
                      <CardBody>
                          <Poetries />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
                  <Card className="shadow card">
                      <CardHeader borderBottom="1px solid" borderBottomColor="gray.100">
                          <Text fontSize="14px" fontWeight="600" pb="0">
                              Some of my Photography...
                          </Text>
                      </CardHeader>
                      <CardBody>
                          <Photos />
                      </CardBody>
                  </Card>
              </Box>
              <Box mb={"5"}>
                  <Card className="shadow card">
                      <CardHeader borderBottom="1px solid" borderBottomColor="gray.100">
                          <Text fontSize="14px" fontWeight="600" pb="0">
                              Some of my Paintings and Sketching...
                          </Text>
                      </CardHeader>
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
