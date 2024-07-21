import {
    Container,
    Flex, Text, Link,
    ButtonGroup, Button, SimpleGrid, CardBody, Card, Image, Box, Divider, CardFooter
} from "@chakra-ui/react";
import project from "../../assets/img/project.png";
import ui from "../../assets/img/ui.jpg";
import React from "react";
import CountUp from 'react-countup';
import experience from "../../assets/img/portfolio-icon2.jpg";

function Projects() {
    return (
        <>
            <Flex w="100%" pb={"30px"}>
                <Container maxW="container.xl" py="7" px={12}>
                {/* <Text
                            as="h3"
                            color={"#FFFFFF"}
                            fontWeight="600"
                            fontSize="3.2rem"
                            mb={"20px"}
                            w={"100%"}
                        >
                            Projects
                        </Text> */}
                        <Box bg={"#1D4044"} borderRadius={"8px"} py={"20"} px={{ base: "20", md: "30", lg: "40" }}>
                    <SimpleGrid w="100%" templateColumns={{ base: "1fr", sm: "1fr 1fr" }} alignItems={"center"} spacing={{ base: "10px", md: "15px", lg: "30px" }}>
                         <Box textAlign={"center"}> 
                                <Image
                                    className=""
                                    src={project}
                                    mx={"auto"}
                                    maxH="120px"
                                    maxW="120px"
                                    mb={"20px"}
                                    filter={"invert(1)"}
                                    w="100%"
                                    borderRadius={"50%"}
                                    objectFit="contain"

                                />
                                <Text as={"h3"} mb={"0"} className="counter"><CountUp delay={"2"} end={"15"} start={"0"}/>+</Text>
                                <Text as={"h4"} mb={"8px"} fontWeight={"600"} fontSize="2rem" color={"#ffffff"}>Projects Completed</Text>
                                
                             </Box>
                         <Box textAlign={"center"}> 
                                <Image
                                    className=""
                                    src={experience}
                                    mx={"auto"}
                                    maxH="120px"
                                    maxW="120px"
                                    mb={"20px"}
                                    filter={"invert(1)"}
                                    w="100%"
                                    borderRadius={"50%"}
                                    objectFit="contain"

                                />
                                <Text as={"h3"} mb={"0"} className="counter"><CountUp delay={"2"} end={"2"} start={"0"}/>+</Text>
                                <Text as={"h4"} mb={"8px"} fontWeight={"600"} fontSize="2rem" color={"#ffffff"}>Years Experience</Text>
                                
                             </Box>
                    </SimpleGrid>
                    </Box>
                </Container>
            </Flex>
        </>
    );
}

export default Projects;
