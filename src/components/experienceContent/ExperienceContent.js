import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  OrderedList,
  Heading,
  Link,
  CardBody,
  Card,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import edental from "../../assets/img/edental_logo.svg";
import engage from "../../assets/img/engage.png";
import rc from "../../assets/img/rc.svg";
import ict from "../../assets/img/ict.svg";
import ecadamia from "../../assets/img/ecadamia.png";

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
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Developed application UIs via emerging front- end
                          technologies like HTML, CSS, Bootstrap, Javascript,
                          Jquery, React JS, Chakra UI.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Hands on experience in developing Interactive UI
                          Screens, implementing functional Logic using HTML,
                          CSS, Javascript/Jquery.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Worked with UI team and project managers to develop
                          and present Logical UI Screens.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Collaborate with designers to implement concept and
                          design of website.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Developed User-frendly, Interactive and Responsive Web
                          page Design.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontSize={"1.75rem"} mb="5">
                          Worked on SEO optimization .
                        </Text>
                      </ListItem>
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
                        <ListItem fontSize="1.75rem" pb="2">
                          Edental
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          Realcube
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          Provis
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          Ecademia
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          Mall Management
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          POS - Point of Sale
                        </ListItem>
                      </UnorderedList>
                      <UnorderedList pt="5" ml="2.2rem">
                        <ListItem fontSize="1.75rem" pb="2">
                          Engage
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          SCMAF
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          SmartFarm
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          E-Nursing
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          RCOAPM
                        </ListItem>
                        <ListItem fontSize="1.75rem" pb="2">
                          My Villa
                        </ListItem>
                      </UnorderedList>
                    </SimpleGrid>
                    <OrderedList fontSize={"1.75rem"} fontWeight={500} pt={5}>
                      <ListItem pb="2">
                        In these projects I used HTML, CSS/SCSS,
                        Javascript/Jquery, Bootstrap.
                      </ListItem>
                      <ListItem pb="2">
                        I developed UI Screens and functionality.
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
            <Box>
              <Link
                className="card_ovrlay"
                href="https://www.edentalportal.com/"
                position="relative"
                target="_blank"
                color="purple.600"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Card
                  borderRadius={"8px"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  h="100%"
                >
                  <CardBody p="3rem">
                    <Text fontSize="2rem" fontWeight="600" pb="5">
                      Edental Portal - Worked as Frontend Developer
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
                      eDental Portal is Middle East’s only dental exam
                      preparatory platform. In this Project....
<br/>
I worked as a Frontend Developer where I created UI screens which improves the sales by 40%.
<br/>
In this project I used...
<ul className="pl-3">
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>
  <li>Javascript</li>
  <li>Php</li>
</ul>

                    </Text>
                  </CardBody>
                </Card>

                <Box className="content" borderRadius="8px">
                  <Image
                    src={edental}
                    height="100%"
                    mx="auto"
                    alt="edental"
                    objectFit={"contain"}
                  />
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                className="card_ovrlay"
                href="https://www.realcube.estate/"
                position="relative"
                target="_blank"
                color="purple.600"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Card
                  borderRadius={"8px"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  h="100%"
                >
                  <CardBody p="3rem">
                    <Text fontSize="2rem" fontWeight="600" pb="5">
                      Realcube Property Portal - Worked as Frontend Developer
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
                      RealCube is the leading cloud-based intelligent solution
                      provider for property management and facilities management
                      industries. 
                      <br/>
I worked as a Frontend Developer where I created UI screens which is fully responsive.
<br/>
In this project I used...
<ul className="pl-3">
  <li>HTML</li>
  <li>CSS/Bootstrap</li>
  <li>Javascript</li>
  <li>Php</li>
</ul>
                    </Text>
                  </CardBody>
                </Card>

                <Box className="content" borderRadius="8px">
                  <Image
                    src={rc}
                    height="100%"
                    mx="auto"
                    alt="realcube"
                    objectFit={"contain"}
                  />
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                className="card_ovrlay"
                href="https://www.engageapp.cloud/"
                position="relative"
                target="_blank"
                color="purple.600"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Card
                  borderRadius={"8px"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  h="100%"
                >
                  <CardBody p="3rem">
                    <Text fontSize="2rem" fontWeight="600" pb="5">
                      Engage App Cloud - Worked as Frontend Developer
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
                      Engage is a simple and efficient employee management tool,
                      it helps you to plan and organize in a way which is best
                      suitable for you and your team. 
                      <br/>
I worked as a Frontend Developer where I created UI screens which improves the sales by 40%.
<br/>
In this project I used...
<ul className="pl-3">
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>
  <li>React Js</li>
</ul>
                    </Text>
                  </CardBody>
                </Card>

                <Box className="content" borderRadius="8px">
                  <Image
                    src={engage}
                    height="100%"
                    mx="auto"
                    alt="engage"
                    objectFit={"contain"}
                  />
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                className="card_ovrlay"
                href="https://www.ict.ae/"
                position="relative"
                target="_blank"
                color="purple.600"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Card
                  borderRadius={"8px"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  h="100%"
                >
                  <CardBody p="3rem">
                    <Text fontSize="2rem" fontWeight="600" pb="5">
                      ICT Portal - Worked as Frontend Developer, created UI
                      screens.
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
                    In this project I used...
<ul className="pl-3">
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>
  <li>Javascript</li>
  <li>Php</li>
</ul>
                    </Text>
                  </CardBody>
                </Card>

                <Box className="content" borderRadius="8px">
                  <Image
                    src={ict}
                    height="100%"
                    mx="auto"
                    alt="ict"
                    objectFit={"contain"}
                  />
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                className="card_ovrlay"
                href="https://www.ecadamia.com/"
                position="relative"
                target="_blank"
                color="purple.600"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Card
                  borderRadius={"8px"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  h="100%"
                >
                  <CardBody p="3rem">
                    <Text fontSize="2rem" fontWeight="600" pb="5">
                      Ecadamia - An integrated education management system
                      powered by digital innovation
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
I worked as a Frontend Developer where I created Landing page and other UI screens.
<br/>
In this project I used...
<ul className="pl-3">
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>
  <li>Javascript</li>
  <li>Php</li>
</ul>
                    </Text>
                  </CardBody>
                </Card>

                <Box className="content" borderRadius="8px">
                  <Image
                    src={ecadamia}
                    height="100%"
                    mx="auto"
                    alt="ecadamia"
                    objectFit={"contain"}
                  />
                </Box>
              </Link>
            </Box>
          </SimpleGrid>
          <Flex w="100%" mb="10">
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
          </Flex>

          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            spacingX="6"
            spacingY="10"
            mb="20"
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
