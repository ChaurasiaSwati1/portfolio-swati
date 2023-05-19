import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  OrderedList,
  Heading,
  Link,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ExperienceContent() {
  return (
    <>
      <Box w="100%">
        <Container maxW="full" overflowY={"auto"} px={0} color={"#032747"}>
          <Box justifyContent="center" h="100%" minH="400px">
            <UnorderedList fontSize="16px" fontWeight="600" fontStyle={"italic"}>
              <ListItem pb="5">
                Developed application UIs via emerging front- end technologies
                like HTML, CSS, Bootstrap, Javascript, Jquery, React JS, Chakra
                UI.
              </ListItem>
              <ListItem pb="5">
                Hands on experience in developing Interactive UI Screens, implementing functional Logics using HTML, CSS, Javascript/Jquery.
              </ListItem>
              <ListItem pb="5">
                Few projects are mention below..
                <UnorderedList fontWeight={400} pt={5}>
                  <ListItem pb="2">
                    Worked as Frontend Developer -{" "}
                    <Link href="https://www.edentalportal.com/" target="_blank" color="purple.600">
                      Edental Portal
                    </Link>


                  </ListItem>
                  <ListItem pb="2">
                    Worked as Frontend Developer -{" "}
                    <Link href="https://www.realcube.estate/" target="_blank" color="purple.600">
                      Realcube Portal
                    </Link>
                  </ListItem>
                  <ListItem pb="2">
                    Worked as Frontend Developer -{" "}
                    <Link href="https://www.engageapp.cloud/" target="_blank" color="purple.600">
                      Engage App
                    </Link>
                  </ListItem>
                </UnorderedList>
                <OrderedList fontWeight={400} pt={5}>
                  <ListItem pb="2">Developed UI Screens as per logic using HTML Css and Jquery.</ListItem>
                  <ListItem pb="2">Also developed UI Screens using React Js, by passing Props, UseState , using various packages  like Ant Design, react Counter, react-icon, react-apexcharts
                    , Chakra UI</ListItem>
                </OrderedList>
              </ListItem>
              <ListItem pb="5">
                Worked with design teams and project managers to develop
                and present Logical UI Screens.
              </ListItem>
              <ListItem pb="5">
                Collaborate with designers to implement concept and design of
                website.
              </ListItem>
              <ListItem pb="5">
              Developed User-frendly, Interactive and Responsive Web page Design.
              </ListItem>
              <ListItem pb="5">Worked on SEO optimization .</ListItem>
              <ListItem pb="5">Learning Node Js.
              <OrderedList fontWeight={400} pt={5}>
                  <ListItem pb="2">In this I used Node JS, Express Js, Schemas, and mongodb.</ListItem>
                  <ListItem pb="2">Developed Register and Login Screen.</ListItem>
                  <ListItem pb="2">In this user can Register throught new email and Login to the same.</ListItem>
                  <ListItem pb="2">For Data storage I used Mongo DB.</ListItem>
                </OrderedList>
              </ListItem>
              <ListItem pb="5">
                Projects
                <SimpleGrid
                  fontWeight="400"
                  templateColumns={{ sm: "1fr 1fr" }}
                  spacing={5}
                >
                  <UnorderedList pt="5">
                    <ListItem fontSize="16px" pb="2">
                      Edental
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Realcube
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Provis
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Ecademia
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      Mall Management
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      POS - Point of Sale
                    </ListItem>
                  </UnorderedList>
                  <UnorderedList pt="5">
                    <ListItem fontSize="16px" pb="2">
                      Engage
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      SCMAF
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      SmartFarm
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      E-Nursing
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      RCOAPM
                    </ListItem>
                    <ListItem fontSize="16px" pb="2">
                      My Villa
                    </ListItem>
                  </UnorderedList>
                </SimpleGrid>
                <OrderedList fontWeight={400} pt={5}>
                  <ListItem pb="2">In these projects I used HTML, CSS/SCSS, Javascript/Jquery, Bootstrap.</ListItem>
                  <ListItem pb="2">I developed UI Screens and functionality.</ListItem>
                </OrderedList>
              </ListItem>
            </UnorderedList>

          </Box>
          <Box>

            <Text fontSize="24px" fontWeight="600" pb="5">
              Additional Experience..
            </Text>
            <UnorderedList fontSize="16px" fontWeight="600" fontStyle={"italic"} pb="5">
              <ListItem pb="2">
                Also worked On SAP Fiori
              </ListItem>
              <ListItem pb="2">
                Developed Realcube as demo Project for Practice.
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ExperienceContent;
