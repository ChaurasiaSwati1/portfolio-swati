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

function Hobbies() {

  return (
    <>
    <Box p={7}>
      <Container maxW="container.xl" py={"0"} px={7} >
        <Text pb="10" fontSize="2rem" fontWeight="600">
          Hobbies
        </Text>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }} spacingX="6" spacingY="10" mb="10">
          <Box>
            <Card borderRadius={"8px"}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <CardBody p="16px" display={"flex"} alignItems={"center"}>
                <Box display={"inline-flex"} flexDirection={"column"} justifyContent={"center"} mx="auto" alignItems={"center"}>
                  <Image
                    objectFit='contain'
                    height={"80px"}
                    width={"auto"}
                    mx="auto"
                    mb="15px"
                    src={camera} alt='Caffe Latte'
                  />

                  <Text fontSize="2rem" fontWeight="600">
                    Photography
                  </Text>
                </Box>
              </CardBody>

            </Card>
          </Box>

          <Box>
            <Card borderRadius={"8px"}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <CardBody p="16px" display={"flex"} alignItems={"center"}>
                <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                  <Image
                    objectFit='contain'
                    height={"80px"}
                    width={"auto"}
                    mx="auto"
                    mb="15px"
                    src={painting} alt='Caffe Latte'
                  />

                  <Text fontSize="2rem" fontWeight="600">
                    Painting
                  </Text>
                </Box>
              </CardBody>

            </Card>
          </Box>

          <Box>
            <Card borderRadius={"8px"}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <CardBody p="16px" display={"flex"} alignItems={"center"}>
                <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                  <Image
                    objectFit='contain'
                    height={"80px"}
                    width={"auto"}
                    mx="auto"
                    mb="15px"
                    src={sketch} alt='Caffe Latte'
                  />

                  <Text fontSize="2rem" fontWeight="600">
                    Sketching
                  </Text>
                </Box>
              </CardBody>

            </Card>
          </Box>

          <Box>
            <Card borderRadius={"8px"}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <CardBody p="16px" display={"flex"} alignItems={"center"}>
                <Box display={"inline-flex"} flexDirection={"column"} mx="auto" justifyContent={"center"} alignItems={"center"}>
                  <Image
                    objectFit='contain'
                    height={"80px"}
                    width={"auto"}
                    mx="auto"
                    mb="15px"
                    src={writing} alt='Caffe Latte'
                  />

                  <Text fontSize="2rem" fontWeight="600">
                    Writing
                  </Text>
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

export default Hobbies;
