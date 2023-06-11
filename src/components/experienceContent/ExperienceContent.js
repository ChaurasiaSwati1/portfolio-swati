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
        <Container maxW="full" overflowY={"auto"} px={0} color={"#032747"}>
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
                      preparatory platform. We guide qualified dentists to
                      prepare for Dental Licensing Examinations across the Gulf
                      countries, enabling dentists to be registered and legally
                      practice in the Gulf. There is a significant gap between
                      what is taught at Universities, what is practiced
                      clinically and what is tested in licensing exams. To
                      bridge the gap, eDental offers a personalised, intelligent
                      revision resource that gives you access to extensive
                      question bank, rich explanations, simulated tests, tutor
                      support and progress analysis. We help you focus on your
                      exam preparation effectively to achieve exam success.
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
                      industries. We believe in the power of technology to
                      change the world for the better, and we are committed to
                      creating products that empower people and businesses to
                      achieve their goals.
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
                      suitable for you and your team. Engage is aimed at, giving
                      you and your team the ability to manage your self by
                      collaborating with watch other. To this extant engage
                      takes care of all small miscellaneous tasks associated
                      with managing, by providing you relevant information on
                      your fingertips and gives you and your team the
                      opportunity to focus on the work which matters.
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
                      International Capital Trading (ICT) is a privately owned,
                      progressive leader in real estate development. Rooting its
                      values deeply in the ethical sustainability goals of Abu
                      Dhabi 2030, ICT aims to enhance the quality and enjoyment
                      of urban living for generations to come. With established
                      assets and operations throughout the world, ICT has
                      developed a reputation for its active policies of
                      corporate responsibility. <br />
                      ICT’s pioneering mixed-use projects include Nation Towers,
                      United Square, and Cubes Park, each of which occupies
                      prime frontage along the Abu Dhabi corniche. Community and
                      residential developments include the ocean-inspired
                      Marasy, Al Aryam and Al Bateen Gardens. ICT’s luxury St.
                      Regis and Al Raha Beach hotels make Abu Dhabi a world
                      class tourist destination.
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
                      Ecadamia - An integrated education management system
                      powered by digital innovation
                    </Text>
                    <Text fontWeight="500" fontSize={"1.5rem"}>
                      Ecadamia is an inclusive education management platform
                      that addresses every requirement of educational
                      institutions. It works on streamlining legacy processes
                      with the help of a state-of-the-art digital architecture
                      that improves resource utilization while reducing costs
                      and time taken to complete these tasks.<br/> Ecadamia removes
                      siloes within your organization and seamlessly integrates
                      a variety of functions with and maps them to relevant
                      stakeholders all through a simple and easy to use
                      solution. Leveraging the power of digital you manage the
                      growth of your educational institution anywhere, anytime,
                      with just a few clicks and actions.
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
