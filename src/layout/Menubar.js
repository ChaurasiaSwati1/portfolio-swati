import {
  Container,
  VStack,
  Flex,
  Text,
  Menu,
  Box,
  Button,
  Image,
  List,
  ListItem,
  ListIcon,
  Avatar,
  Icon,
  Link,
} from "@chakra-ui/react";
import React from "react";
import profile from "../assets/img/profile.jpg"

function MenuBar() {
  const menuItem = [
   {
     //   icon: MdTrendingUp,
     title: "About",
     url: "/about",
     
   },
   {
     //   icon: MdTrendingUp,
     title: "Work Experience",
     url: "/experience",
   },
    {
      //   icon: EmailIcon,
      title: "Contact Me",
      url: "/contact",
    },
  ];

  return (
    <>
      <Flex w="100%"  >
        <Container maxW="container.xl">
          <Flex
            textAlign="left"
            flexDirection={"column"}
            gap={5}
            justifyContent="space-between"
          >
            <Box
              pt="5"
              fontWeight="600"
              alignItems="center"
              display="inline-flex"
            >
              <Link
                href="/"
                color="whiteAlpha.900"
                cursor="pointer"
                _hover={{
                  color: "purple.700 !important",
                  textDecoration: "none",
                }}
                _active={{ color: "purple.700 !important" }}
              >
                <Image src={profile} borderRadius={"50%"} height={"150px"} width={"150px"} objectFit={"cover"} mx="auto" mb="10"/>

                <Text fontSize={"24px"} fontWeight={"bold"}>Swati Chaurasia</Text>
                <Text fontSize={"16px"} fontWeight={"bold"}>UI Developer</Text>
              </Link>
            </Box>
            {menuItem.map((item, index) => (
              <List key={index}>
                <ListItem
                  py="7px"
                  borderRadius="2px"
                  color="whiteAlpha.900"
                  _hover={{ color: "purple.700 !important" }}
                  _active={{ color: "purple.700 !important" }}
                >
                  <Link href={item.url} _hover={{ textDecoration: "none" }}>
                    {/* <ListIcon as={item.icon}  _hover={{ color: '#f48a1b' }} fontSize="20px" mr={{sm:'10px', md:'0px', lg:'10px'}}/> */}
                    <Text fontSize={"14px"}
                  fontWeight="700">{item.title}</Text>
                  </Link>
                </ListItem>
              </List>
            ))}
          </Flex>
        </Container>
      </Flex>
    </>
  );
}

export default MenuBar;
