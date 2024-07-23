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
import tailwind from "../../assets/img/tailwind.png";
import antd from "../../assets/img/antDesign.svg";
import painting from "../../assets/img/paint.png";
import mui from "../../assets/img/materialUI.svg";
import sketch from "../../assets/img/sketch.png";
import writing from "../../assets/img/writing.png";

function AboutContent() {
  const cardItem = [
    
    {
      pic: rjs,
      url: "",
      heading: "React JS",
      desc: "Skilled in React Js with having 2 years of experience.",
    },
    {
      pic: mui,
      url: "https://mui.com/material-ui/",
      heading: "Material UI",
      desc: "Skilled in Material UI with having 1 years of experience.",
    },
    {
      pic: chakra,
      url: "https://chakra-ui.com/docs/components",
      heading: "Chakra UI",
      desc: "Skilled in Chakra UI with having 2 year of experience.",
    },
    {
      pic: antd,
      url: "https://ant.design",
      heading: "Antd",
      desc: "Skilled in ant design with having 2 year of experience.",
    },
    {
      pic: tailwind,
      url: "https://tailwindcss.com",
      heading: "Tailwind CSS",
      desc: "Skilled in Tailwind CSS with having 2 year of experience.",
    },
    {
      pic: html,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "HTML",
      desc: "Strong organizational skills with having 2+ years of experience.",

    },
    {
      pic: css,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "CSS",
      desc: "Strong organizational skills with having 2+ years of experience.",

    },
    {
      pic: js,
      url: "https://chaurasiaswati1.github.io/tulsi/",
      heading: "Javascript",
      desc: "Skilled in Javascript with having 2+ years of experience.",
    },
    {
      pic: jquery,
      url: "https://www.w3schools.com/jquery/",
      heading: "Jquery",
      desc: "Skilled in Jquery with having 2 year of experience.",
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
      heading: "Firebase",
      desc: "Hosted project to firebase.",
    },
  ];



  return (
    <>
      <Container maxW="container.xl" pt={"0"} px={12} overflowY={"auto"} pb="30px" color={"#032747"}>
        <Text pb="10" fontSize="2rem" fontWeight="600">
          Frontend Technogies and Additional Skills
        </Text>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} spacingX="6" spacingY="10" mb="10">

          {cardItem.map((item, index) => (
            <Box key={"index"}>
              <Card borderRadius={"8px"}
                direction={{ sm: 'row' }}
                h={"100%"}
                overflow='hidden'
                variant='outline'
              >
                <Box
                  w={'25%'} p="16px" display={"inline-flex"} alignItems={"center"}>
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
      </Container>

    </>
  );
}

export default AboutContent;
