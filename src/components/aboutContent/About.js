import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import React from "react";
import camera from "../../assets/img/camera.png";
import painting from "../../assets/img/paint.png";
import sketch from "../../assets/img/sketch.png";
import writing from "../../assets/img/writing.png";

function About() {

  return (
    <>
    <Box background={"#B2F5EA"}>
      <Container maxW="container.xl" pb={"25px"} px={12} >
        <Text pb="10" fontSize="2rem" fontWeight="600">
          Education
        </Text>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacingX="6" spacingY="10" mb="10">
          <Box>
            <Card borderRadius={"8px"}
              direction={{ sm: 'row' }}
              className="home_card"
              overflow='hidden'
              h={"100%"}
              variant='outline'
            >
              <Box
                w={{ sm: '30%' }} p="16px" display={"inline-flex"} alignItems={"center"}>
                <Text fontSize="1.75rem" fontWeight="600">
                  2018-07 - 2021-08
                </Text>
              </Box>


              <Stack w={"70%"}>
                <CardBody p="16px">
                  <Flex justifyContent={"center"} flexDir={"column"}>
                    <Text fontSize="1.75rem" fontWeight="500" pb="4">
                      Diploma In Computer Science And Engineering
                    </Text>
                    <Text fontSize="1.75rem" fontWeight="500">
                      Government Girls Polytechnic - Gorakhpur
                    </Text>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>

          </Box>

          <Box>
            <Card borderRadius={"8px"}
              direction={{ sm: 'row' }}
              overflow='hidden'
              variant='outline'
              h={"100%"}
              className="home_card"
            >
              <Box
                w={{ sm: '30%' }} p="16px" display={"inline-flex"} alignItems={"center"}>
                <Text fontSize="1.75rem" fontWeight="600">
                  2016-04 - 2018-03
                </Text>
              </Box>


              <Stack w={"70%"}>
                <CardBody p="16px">
                  <Flex justifyContent={"center"} flexDir={"column"}>
                    <Text fontSize="1.75rem" fontWeight="500" pb="4">
                      Intermediate(PCM Group)
                    </Text>
                    <Text fontSize="1.75rem" fontWeight="500">
                      Delhi Public School - Midhi-Baheri Ballia
                    </Text>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>

          </Box>
        </SimpleGrid>
      </Container>
      </Box>
    </>
  );
}

export default About;
