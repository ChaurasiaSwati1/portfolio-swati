import {
    Container,
    Flex, Text, Link, SimpleGrid, CardBody, Card, Image,
} from "@chakra-ui/react";
import internship from "../../assets/img/internship.jpg";
import ui from "../../assets/img/ui.jpg";
import React from "react";
import laptop from "../../assets/img/laptop-png-6746.png";

function AboutCard() {
    return (
        <>
            <Flex w="100%" bg={"#f9f9f9"} pb={"30px"}>
                <Container maxW="container.xl" py="7" px={12}>
                <Text
                            as="h3"
                            color={"#1D4044"}
                            fontWeight="600"
                            fontSize="3.2rem"
                            mb={"20px"}
                            w={"100%"}
                        >
                            Experience
                        </Text>
                    <SimpleGrid w="100%" templateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }} alignItems={"center"} spacing={{ base: "10px", md: "15px", lg: "30px" }}>
                        <Card w='100%' className="home_card" h="100%">
                            <CardBody className="card_body" bg={"#1D4044"}>
                                <Image
                                    className=""
                                    src={internship}
                                    mx={"auto"}
                                    maxH={{ base: "70px", md: "220px" }}
                                    mb={"20px"}
                                    w="100%"
                                    borderRadius={"6px"}
                                    objectFit="cover"

                                />
                                <Text as={"h4"} mb={"8px"} fontWeight={"600"} fontSize="2rem">Intern at Exalogic</Text>
                                <Text as={"h6"} fontWeight={"500"} fontSize="1.6rem">In <Link href="https://www.exalogic.co/" target="_blank" color={"#1D4044"}>Exalogic Consulting</Link> I joined as an Intern.
                                    During my internship, I had the opportunity
                                    to work on various projects <Link href="/experience" color={"#1D4044"}>more...</Link>.
                                </Text>
                            </CardBody>
                        </Card>
                        <Card w='100%' className="home_card" h="100%">
                            <CardBody className="card_body" bg={"#1D4044"}>
                                <Image
                                    className=""
                                    src={ui}
                                    mx={"auto"}
                                    maxH={{ base: "70px", md: "220px" }}
                                    mb={"20px"}
                                    w="100%"
                                    borderRadius={"6px"}
                                    objectFit="cover"

                                />
                                <Text as={"h4"} mb={"8px"} fontWeight={"600"} fontSize="2rem">UI Developer</Text>
                                <Text as={"h6"} fontWeight={"500"} fontSize="1.6rem">After completing internship at <Link href="https://www.exalogic.co/" target="_blank" color={"#1D4044"}>Exalogic Consulting</Link> am working as UI Developer and exploring new technologies like React JS, Appgyver <Link href="/experience" color={"#1D4044"}>more...</Link>.
                                </Text>
                            </CardBody>
                        </Card>
                        <Card w='100%' className="home_card" h="100%">
                            <CardBody className="card_body" bg={"#1D4044"}>
                                <Image
                                    className=""
                                    src={laptop}
                                    mx={"auto"}
                                    maxH={{ base: "70px", md: "220px" }}
                                    mb={"20px"}
                                    w="100%"
                                    borderRadius={"6px"}
                                    objectFit="contain"

                                />
                                <Text as={"h4"} mb={"8px"} fontWeight={"600"} fontSize="2rem">Experience</Text>
                                <Text as={"h6"} fontWeight={"500"} fontSize="1.6rem">
                                    At <Link href="https://www.mithilait.com/" target="_blank" color={"#1D4044"}>Mithila It</Link> I am learning so may things like api integration, and At ExalogicI learned many languages and work on various projects <Link href="/experience" color={"#1D4044"}>more...</Link>.
                                </Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Container>
            </Flex>
        </>
    );
}

export default AboutCard;
