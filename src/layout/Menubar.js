import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text
} from "@chakra-ui/react";
import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { GiHamburgerMenu, GiNotebook } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { useLocation } from "react-router-dom";
import profile from "../assets/img/profile.jpg";

function MenuBar() {
  
  const location = useLocation();
  const pathname =location.pathname.split("/")[1];

  const menuItem = [
    {
      pic: GiNotebook,
      title: "Passion",
      url: "/passion",
      active: "passion",

    },
    {
      pic: IoMdContact,
      title: "Skills",
      url: "/skills",
      active: "skills",

    },
    {
      pic: BsBriefcaseFill,
      title: "Work Experience",
      url: "/experience",
      active: "experience",
    },
    {
      pic: FaBlogger,
      title: "Blogs",
      url: "/blogs",
      active: "blogs",
    },
  ];

  return (
    <>
      <Flex w="100%"  >
        <Container maxW="100%" p="0" >
          <Flex alignItems={"center"} display={{ sm: "flex", md: "none" }} className="mobile-nav">

            {/* <Box className="profile-icon">
              <Link href="/">
                <Image className="logo" src={profile} position={"relative"} zIndex={"5"} borderRadius={"50%"} height={"31px"} width={"31px"} objectFit={"cover"} mx="auto" />
                <Box className="spin"></Box>
              </Link>
            </Box> */}
            <Box className="hed_logo">
              <Link href="/">
                <Text as={"h2"} fontWeight={"600"} fontSize={"3.5rem"} color={"#ffffff"}  className="hed_name">SC</Text>
              </Link>
            </Box>


            <Spacer />
            <Menu>
              <MenuButton
                bg={"whiteAlpha.900"}
                color={"#032747"}
                as={IconButton}
                aria-label='Options'
                icon={<GiHamburgerMenu />}
                height={"36px"}
                w={"36px"}
                variant='outline'
                fontSize={"16px"}
                className="menu-btn"
              />
              <MenuList p="15px" >
                {menuItem.map((item, index) => (
                  <Link 
                   className="list-group-item" href={item.url} _hover={{ textDecoration: "none" }}
                  >
                    <MenuItem key={index} py="2" className={`list-item ${pathname === item.active ? "active" : ''}`}>
                      <Icon as={item.pic} _hover={{ color: '#f48a1b' }} fontSize="16px" mr="15px" />
                      <Text fontSize={"1.5rem"}
                        fontWeight="700">{item.title}</Text>
                    </MenuItem>
                  </Link>

                ))}
              </MenuList>
            </Menu>

          </Flex>
          <Flex
            className="nav-main"
            display={{ sm: "none", md: "flex" }}
            textAlign="left"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* <Box
              fontWeight="500"
              alignItems="center"
              display="inline-flex"
            >
              <Link
                href="/"
                color="whiteAlpha.900"
                cursor="pointer"
              >
                <Image className="logo" src={profile} position={"relative"} zIndex={"5"} borderRadius={"50%"} height={"31px"} width={"31px"} objectFit={"cover"} mx="auto" />
                <Box className="spin"></Box>
                {/* <Text fontSize={"20px"} fontWeight={"bold"}>Swati Chaurasia</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>UI Developer</Text> */}
              {/*</Link>
            </Box> */}
            <Box className="hed_logo">
              <Link href="/">
                <Text as={"h2"} fontWeight={"600"} fontSize={"3.5rem"} color={"#ffffff"}  className="hed_name">SC</Text>
              </Link>
            </Box>
            <Spacer />
            <List display={"flex"}>
              {menuItem.map((item, index) => (
                <ListItem key={index}
                  py="8px"
                  borderRadius="2px"
                  ml="3"
                  color="whiteAlpha.900"

                >
                  <Link
                    className={`list-item ${pathname === item.active ? "active" : ''}`} href={item.url} display={"flex"} p={"5px 12px"} ml={"5"} _hover={{
                      textDecoration: "none"
                    }}
                    _active={{
                      background: "#ffffff",
                      borderRadius: "5px",
                      color: "#032747",
                      textDecoration: "none"
                    }}>
                    <Icon as={item.pic} className="icon" fontSize="16px" mr="10px" />
                    <Text className="menu-txt" fontSize={"1.5rem"}
                      fontWeight="700">{item.title}</Text>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}

export default MenuBar;
