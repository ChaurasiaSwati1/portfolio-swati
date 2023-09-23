import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import about from "../../assets/img/about.png"
import Name from '../../components/name/Name';
import ContactContent from "../../components/contactContent/ContactContent";
import Contact from "../../components/contactContent/Contact";

function ContactIndexPage() {
  return (
    <>
      <Box w={"100%"}>
      <Container maxW="100%" py={"0"} px={0}>
          <Box>
            <Name />
          </Box>
          </Container>
        <Container maxW="100%" p={"0"}>
          <Contact/>
        </Container>
      </Box>
    </>
  );
};


export default ContactIndexPage;