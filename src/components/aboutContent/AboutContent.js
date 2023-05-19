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
import { FaAngleDoubleRight } from "react-icons/fa";

function AboutContent() {
  return (
    <>
      <Box w="100%">
        <Container maxW="full" overflowY={"auto"} px={0} color={"#032747"}>
          <Box justifyContent="center" h="100%">
            <UnorderedList
              fontSize="16px"
              fontWeight="600"
              fontStyle={"italic"}
            >
              <ListItem pb="5" fontSize="20px">
                Technical Profile
                
                <Box 
                  fontWeight="500" fontSize="16px" pb="2">
                    Front End Skills
                  </Box>
                <SimpleGrid
                  fontWeight="400"
                  mb={"5"}
                  templateColumns={{ sm: "1fr 1fr" }}
                  spacing={5}
                >

                    <UnorderedList pt="2">
                      <ListItem fontSize="16px" pb="2">
                        HTML
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        CSS/SCSS
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Bootstrap
                      </ListItem>
                    </UnorderedList>
                    <UnorderedList pt="2">
                      <ListItem fontSize="16px" pb="2">
                        React Js
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Chakra UI
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Tailwind CSS
                      </ListItem>
                    </UnorderedList>

                </SimpleGrid>
                <Box 
                  fontWeight="500" fontSize="16px" pb="2">
                    Scripting Languages
                  </Box>
                <SimpleGrid
                  mb={"5"}
                  fontWeight="400"
                  spacing={5}
                >

                    <UnorderedList pt="2">
                      <ListItem fontSize="16px" pb="2">
                        Javascript
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Jquery
                      </ListItem>
                    </UnorderedList>

                </SimpleGrid>
                <Box 
                  fontWeight="500" fontSize="16px" pb="2">
                    Additional Skills
                  </Box>
                <SimpleGrid
                  fontWeight="400"
                  spacing={5}
                >

                    <UnorderedList pt="2">
                      <ListItem fontSize="16px" pb="2">
                        Git
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Figma
                      </ListItem>
                      <ListItem fontSize="16px" pb="2">
                        Excel
                      </ListItem>
                    </UnorderedList>

                </SimpleGrid>
              </ListItem>
              <ListItem pb="5" fontSize="20px">
                Education
                <Flex pt={5}>
                  <Text fontSize="18px" fontWeight="600" pb="5">
                    2018-07 - 2021-08
                  </Text>
                  <Box as="span" fontSize="18px" fontWeight="400" pt="1" px={4}>
                    <FaAngleDoubleRight />
                  </Box>

                  <Box as="span" pl={4}>
                    <Text fontSize="18px" fontWeight="600" pb="2">
                      Diploma In Computer Science And Engineering
                    </Text>
                    <Text fontSize="16px" pb="5" fontWeight="500">
                      Government Girls Polytechnic - Gorakhpur
                    </Text>
                  </Box>
                </Flex>
                <Flex pt={5}>
                  <Text fontSize="18px" fontWeight="600" pb="5">
                    2016-04 - 2018-03
                  </Text>
                  <Box as="span" fontSize="18px" fontWeight="400" pt="1" px={4}>
                    <FaAngleDoubleRight />
                  </Box>

                  <Box as="span" pl={4}>
                    <Text fontSize="18px" fontWeight="600" pb="2">
                      Intermediate(PCM Group)
                    </Text>
                    <Text fontSize="16px" pb="5" fontWeight="500">
                      Delhi Public School - Ballia
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem pb="5" fontSize="20px">
                Hobbies
                <SimpleGrid
                  fontWeight="400"
                  templateColumns={{ sm: "1fr 1fr" }}
                  spacing={5} pt="5"
                >
                  <UnorderedList fontWeight="400">
                    <ListItem fontSize="16px" pb="2">
                      Photography,
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Painting,
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Sketching,
                    </ListItem>
                  </UnorderedList>
                  <UnorderedList>
                    <ListItem fontSize="16px" pb="2">
                      Dress Designing
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Writing
                    </ListItem>
                  </UnorderedList>
                </SimpleGrid>

              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AboutContent;
