import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import ProjectCardLayout from "./ProjectCard";

const project1 = [
  { id: 1, name: "Feel Good Stay" },
  { id: 2, name: "EXC-Academy" },
  { id: 3, name: "REFX" },
  { id: 4, name: "Edental Doctor Portal" },
  { id: 5, name: "Edental Patient Portal" },
  { id: 6, name: "Engage" },
  { id: 7, name: "Ecadamia" },
  { id: 8, name: "Realcube" },
  { id: 9, name: "Provis" },
  { id: 10, name: "Equipment Tool Management" },
]
const project2 = [
  { id: 1, name: "ICT" },
  { id: 2, name: "Smart Farm" },
  { id: 3, name: "E-Nursing" },
  { id: 4, name: "Mall management" },
  { id: 5, name: "RCOAPM" },
  { id: 6, name: "POS" },
  { id: 7, name: "My Villa" },
  { id: 8, name: "HR-PED" },
  { id: 9, name: "BTP Sap Ariba Sourcing" },
]
const experience = [
  { id: 1, desc: `Developed application UIs via emerging front-end technologies like HTML, CSS, Bootstrap, Javascript, Jquery, React JS, Chakra UI and Tailwind CSS.` },
  { id: 2, desc: `Hands on experience in developing Interactive UI Screens, implementing functional Logic using HTML, CSS, Javascript/Jquery React JS, Chakra UI and Tailwind CSS.` },
  { id: 3, desc: `Worked with UI team and project managers to develop and present Logical UI Screens.` },
  { id: 4, desc: `Collaborate with designers to implement concept and  design of website.` },
  { id: 5, desc: `Developed User-frendly, Interactive and Responsive Web page Design.` },
  { id: 6, desc: `Worked on SEO optimization.` },
]

function ExperienceContent() {
  return (
    <>
      <Box w="100%">
        <Container maxW="container.xl" py={"0"} px={12} overflowY={"auto"} color={"#032747"}>
          <Text pb="10" fontSize="2rem" fontWeight="600">
            Experience at Exalogic
          </Text>
          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            spacingX="6"
            spacingY="10"
            mb="10"
          >
            <Box>
              <Card
                borderRadius={"8px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                h="100%"
              >
                <CardBody p="3rem">
                  <Text fontSize="2rem" fontWeight="600" pb="5">
                    Experience as Frontend Developer
                  </Text>
                  <Box>
                    <UnorderedList
                      fontSize="1.75rem"
                      fontWeight="500"
                      ml="2.2rem"
                    >
                      {experience.map((i) => (
                        <ListItem fontSize="1.75rem" mb="5" key={i.id}>
                          {i.desc}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card
                borderRadius={"8px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                h="100%"
              >
                <CardBody p="3rem">
                  <Text fontSize="2rem" fontWeight="600" pb="5">
                    Projects
                  </Text>
                  <Box>
                    <SimpleGrid
                      fontWeight="400"
                      templateColumns={{ sm: "1fr 1fr" }}
                      spacing={5}
                    >
                      <UnorderedList pt="5" ml="2.2rem">
                        {project1.map((i) => (
                          <ListItem fontSize="1.75rem" pb="2" key={i.id}>
                            {i.name}
                          </ListItem>
                        ))}
                      </UnorderedList>
                      <UnorderedList pt="5" ml="2.2rem">
                        {project2.map((i) => (
                          <ListItem fontSize="1.75rem" pb="2" key={i.id}>
                            {i.name}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </SimpleGrid>
                    <OrderedList fontSize={"1.75rem"} fontWeight={500} pt={5}>
                      <ListItem pb="2">
                        In these projects I used HTML, CSS/SCSS,
                        Javascript/Jquery, Bootstrap, PHP, React JS, Chakra UI, Tailwind, Ant Design & Appgyver.
                      </ListItem>
                      <ListItem pb="2">
                        I developed UI Screens, Landing Pages and functionality.
                      </ListItem>
                    </OrderedList>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>

          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            spacingX="6"
            spacingY="10"
            mb="10"
          >

            <ProjectCardLayout />
          </SimpleGrid>
          <Flex w="100%" mb="10">

          </Flex>

          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            spacingX="6"
            spacingY="10"
            mb="20"
          >
            {/* <Box>
              <Card
                borderRadius={"8px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                h="100%"
              >
                <CardBody p="3rem">
                  <Text fontSize="2rem" fontWeight="600" pb="5">
                    Learning Node Js.
                  </Text>
                  <UnorderedList
                    ml="2.2rem"
                    fontSize={"1.75rem"}
                    fontWeight={500}
                    pt={5}
                  >
                    <ListItem pb="2">
                      In this I used Node JS, Express Js, Schemas, and mongodb.
                    </ListItem>
                    <ListItem pb="2">
                      Developed Register and Login Screen.
                    </ListItem>
                    <ListItem pb="2">
                      In this user can Register throught new email and Login to
                      the same.
                    </ListItem>
                    <ListItem pb="2">
                      For Data storage I used Mongo DB.
                    </ListItem>
                  </UnorderedList>
                </CardBody>
              </Card>
            </Box> */}
            <Box>
              <Card
                borderRadius={"8px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                h="100%"
                w="100%"
              >
                <CardBody p="3rem">
                  <Text fontSize="2rem" fontWeight="600" pb="5">
                    In above projects..
                  </Text>
                  <UnorderedList fontSize={"1.75rem"} fontWeight={500} pt={5}>
                    <ListItem pb="2">
                      Developed UI Screens as per logic using HTML Css and Jquery.
                    </ListItem>
                    <ListItem pb="2">
                      Also developed UI Screens using React Js, by passing Props,
                      UseState , using various packages like Ant Design, react
                      Counter, react-icon, react-apexcharts , and Chakra UI.
                    </ListItem>
                  </UnorderedList>
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Card
                borderRadius={"8px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                h="100%"
              >
                <CardBody p="3rem">
                  <Text fontSize="2rem" fontWeight="600" pb="5">
                    Additional Experience..
                  </Text>
                  <Box>
                    <UnorderedList
                      fontSize="1.75rem"
                      fontWeight="500"
                      pb="5"
                      ml="2.2rem"
                    >
                      <ListItem pb="2">Also worked On SAP Fiori</ListItem>
                      <ListItem pb="2">
                        Developed Realcube as demo Project for Practice.
                      </ListItem>
                    </UnorderedList>
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

export default ExperienceContent;
