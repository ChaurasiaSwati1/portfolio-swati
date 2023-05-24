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

function ContactIndexPage() {
  return (
    <>
      <Box>
        <Container maxW={"full"} py={"0"} px={7} m="0">
          <SimpleGrid templateColumns={{ lg: "1fr 1fr" }} spacing={5} minH="100vh">
            <Box>
            <Name/>
            <Text fontSize="16px" fontWeight="600" pb="5">
              Contact Me..
            </Text>
              <ContactContent />
            </Box>
            
            <Flex  pt="30" h="fit-content">
              <Image src={about} top={"55px"} maxH={"505px"} position={"fixed"} maxW={"505px"}   objectFit="cover" height="auto" width="100%"/>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};


export default ContactIndexPage;