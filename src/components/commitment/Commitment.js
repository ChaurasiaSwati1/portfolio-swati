import {
    Container,
    Flex,
    Text
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

function Commitment() {
        return (
        <>
            <Flex w="100%" bg={"#f12c2c"} className="">

                <Container maxW="container.xl" p="7">
                    <Flex alignItems={"center"} direction={"column"}>
                        <Text
                            as="h3"
                            color={"#ffffff"}
                            fontWeight="600"
                            fontSize="3.2rem"
                            mb={"20px"}
                        >
                            About Me...
                        </Text>
                        <Text
                            color={"#ffffff"}
                            fontWeight="400"
                            fontSize="1.75rem"
                            mb={"20px"}
                            textAlign={"center"}
                        >
                            Passionate UI Developer with strong organizational skills, ready to leverage my expertise in HTML, CSS/SCSS, Bootstrap, React Js, Chakra UI, Tailwind CSS, Git, Figma, Excel, Scripting Languages, Javascript, Jquery and other technologies to support teams to achieve their success goals.
                        </Text>
                        <Text
                            color={"#ffffff"}
                            fontWeight="400"
                            fontSize="1.75rem"
                            mb={"35px"}
                            textAlign={"center"}
                        >
                            I am fully dedicated to my work and exploring more to advance my skills for more opportunity.
                        </Text>
                    </Flex>
                </Container>
            </Flex>
        </>
    );
}

export default Commitment;
