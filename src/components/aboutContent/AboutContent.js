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
  Stack,
  CardBody,
  CardHeader,
  Card,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import jquery from "../../assets/img/jquery.webp";
import rjs from "../../assets/img/react.png";
import chakra from "../../assets/img/chakra.png";
import git from "../../assets/img/github.png";
import gitl from "../../assets/img/gitlab.png";
import figma from "../../assets/img/figma.png";
import fire from "../../assets/img/fire.png";
import camera from "../../assets/img/camera.png";
import painting from "../../assets/img/paint.png";
import sketch from "../../assets/img/sketch.png";
import writing from "../../assets/img/writing.png";

function AboutContent() {
  const cardItem = [
    {
      pic: html,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "HTML",
      desc: "Strong organizational skills with having 1.5 years of experience.",

    },
    {
      pic: css,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "CSS",
      desc: "Strong organizational skills with having 1.5 years of experience.",

    },
    {
      pic: js,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "Javascript",
      desc: "Skilled in Javascript with having 1.5 years of experience.",
    },
    {
      pic: jquery,
      url: "https://www.w3schools.com/jquery/",
      heading: "Jquery",
      desc: "Skilled in Jquery with having 1 year of experience.",
    },
    {
      pic: rjs,
      url: "",
      heading: "React JS",
      desc: "Skilled in React Js with having 1 years of experience.",
    },
    {
      pic: chakra,
      url: "https://chakra-ui.com/docs/components",
      heading: "Chakra UI",
      desc: "Skilled in Chakra UI with having 3 months of experience.",
    },
    {
      pic: git,
      url: "https://github.com/ChaurasiaSwati1",
      heading: "Github",
      desc: "Skill to use Github like creating project, performing operations like pull/push.",
    },
    {
      pic: gitl,
      url: "https://github.com/ChaurasiaSwati1",
      heading: "Gitlab",
      desc: "Skill to use Github like creating project, performing operations like pull/push.",
    },
    {
      pic: figma,
      url: "https://github.com/ChaurasiaSwati1",
      heading: "Figma",
      desc: "Skill to use figma like creating, importing, exporting components.",
    },
    {
      pic: fire,
      url: "https://firebase.google.com/docs/hosting",
      heading: "Fibase",
      desc: "Hosted project to firebase.",
    },
  ];



  return (
    <>
      <Box w="100%">
        <Container maxW="full" overflowY={"auto"} px={0} pb="30px" color={"#032747"}>
          <Text pb="10" fontSize="2rem" fontWeight="600">
            Frontend Technogies and Additional Skills
          </Text>
          <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} spacingX="6" spacingY="10" mb="10">

            {cardItem.map((item, index) => (
              <Box key={"index"}>
                <Card borderRadius={"8px"}
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                >
                  <Box
                    w={{ base: '100%', sm: '25%' }} p="16px" display={"inline-flex"} alignItems={"center"}>
                    <Link href={item.url} target="_blank">
                      <Image
                        objectFit='contain'
                        height={"80px"}
                        width={"auto"}
                        mx="auto"
                        src={item.pic} alt='Caffe Latte'
                      />
                    </Link>
                  </Box>


                  <Stack w={"75%"}>
                    <CardBody p="16px">
                      <Heading fontSize={"2rem"} mb="12px">{item.heading}</Heading>

                      <Text fontSize={"1.75rem"}>{item.desc}</Text>
                    </CardBody>
                  </Stack>
                </Card>

              </Box>
            ))}
          </SimpleGrid>
          <Text pb="10" fontSize="2rem" fontWeight="600">
            Education
          </Text>
          <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacingX="6" spacingY="10" mb="10">
            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Box
                  w={{ base: '100%', sm: '30%' }} p="16px" display={"inline-flex"} alignItems={"center"}>
                  <Text fontSize="1.75rem" fontWeight="600">
                    2018-07 - 2021-08
                  </Text>
                </Box>


                <Stack w={"70%"}>
                  <CardBody p="16px">
                    <Flex justifyContent={"center"} flexDir={"column"}>
                      <Text fontSize="1.75rem" fontWeight="500" pb="4">
                        Diploma In Computer Science And Engineering
                      </Text>
                      <Text fontSize="1.75rem" fontWeight="500">
                        Government Girls Polytechnic - Gorakhpur
                      </Text>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>

            </Box>

            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Box
                  w={{ base: '100%', sm: '30%' }} p="16px" display={"inline-flex"} alignItems={"center"}>
                  <Text fontSize="1.75rem" fontWeight="600">
                    2016-04 - 2018-03
                  </Text>
                </Box>


                <Stack w={"70%"}>
                  <CardBody p="16px">
                    <Flex justifyContent={"center"} flexDir={"column"}>
                      <Text fontSize="1.75rem" fontWeight="500" pb="4">
                        Intermediate(PCM Group)
                      </Text>
                      <Text fontSize="1.75rem" fontWeight="500">
                        Delhi Public School - Midhi-Baheri Ballia
                      </Text>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>

            </Box>
          </SimpleGrid>
          <Text pb="10" fontSize="2rem" fontWeight="600">
            Hobbies
          </Text>
          <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }} spacingX="6" spacingY="10" mb="10">
            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <CardBody p="16px" display={"flex"} alignItems={"center"}>
                  <Box display={"inline-flex"} flexDirection={"column"} justifyContent={"center"} mx="auto" alignItems={"center"}>
                    <Image
                      objectFit='contain'
                      height={"80px"}
                      width={"auto"}
                      mx="auto"
                      mb="15px"
                      src={camera} alt='Caffe Latte'
                    />

                    <Text fontSize="2rem" fontWeight="600">
                      Photography
                    </Text>
                  </Box>
                </CardBody>

              </Card>
            </Box>

            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <CardBody p="16px" display={"flex"} alignItems={"center"}>
                  <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                    <Image
                      objectFit='contain'
                      height={"80px"}
                      width={"auto"}
                      mx="auto"
                      mb="15px"
                      src={painting} alt='Caffe Latte'
                    />

                    <Text fontSize="2rem" fontWeight="600">
                      Painting
                    </Text>
                  </Box>
                </CardBody>

              </Card>
            </Box>

            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <CardBody p="16px" display={"flex"} alignItems={"center"}>
                  <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                    <Image
                      objectFit='contain'
                      height={"80px"}
                      width={"auto"}
                      mx="auto"
                      mb="15px"
                      src={sketch} alt='Caffe Latte'
                    />

                    <Text fontSize="2rem" fontWeight="600">
                      Sketching
                    </Text>
                  </Box>
                </CardBody>

              </Card>
            </Box>

            <Box>
              <Card borderRadius={"8px"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <CardBody p="16px" display={"flex"} alignItems={"center"}>
                  <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                    <Image
                      objectFit='contain'
                      height={"80px"}
                      width={"auto"}
                      mx="auto"
                      mb="15px"
                      src={writing} alt='Caffe Latte'
                    />

                    <Text fontSize="2rem" fontWeight="600">
                      Writing
                    </Text>
                  </Box>
                </CardBody>

              </Card>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default AboutContent;
