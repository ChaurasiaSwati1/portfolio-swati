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
  MenuItem,
  Avatar, IconButton,
  MenuButton,
  MenuList,
  Icon, Spacer,
  Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React,  { useState, useEffect }  from "react";
import profile from "../assets/img/profile.jpg"
import { GiHamburgerMenu, GiNotebook } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";

function MenuBar() {
  
  const [active, setActive] = useState(null)
  const menuItem = [
    {
      pic: GiNotebook,
      title: "Goals",
      url: "/",

    },
    {
      pic: IoMdContact,
      title: "Achievements",
      url: "/about",

    },
    {
      pic: BsBriefcaseFill,
      title: "Work Experience",
      url: "/experience",
    },
    // {
    //   pic: MdCall,
    //   title: "Contact Me",
    //   url: "/contact",
    // },
    {
      pic: FaBlogger,
      title: "Blogs",
      url: "/gallery",
    },
  ];

  return (
    <>
      <Flex w="100%"  >
        <Container maxW="100%" p="0" >
          <Flex alignItems={"center"} display={{ sm: "flex", md: "none" }} className="mobile-nav">

            <Box className="profile-icon">
              <Link href="/">
                <Image className="logo" src={profile} position={"relative"} zIndex={"5"} borderRadius={"50%"} height={"42px"} width={"42px"} objectFit={"cover"} mx="auto" />
                <Box className="spin"></Box>
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
                variant='outline'
                className="menu-btn"
              />
              <MenuList p="15px" >
                {menuItem.map((item, index) => (
                  <Link 
                  onClick={() => setActive(item)} className={`list-group-item ${active == item && 'active'}`} href={item.url} _hover={{ textDecoration: "none" }}
                  >
                    <MenuItem key={index} py="2" className="list-item">
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
            justifyContent="space-between"
          >
            <Box
              fontWeight="500"
              alignItems="center"
              display="inline-flex"
            >
              <Link
                href="/"
                color="whiteAlpha.900"
                cursor="pointer"
              >
                <Image className="logo" src={profile} position={"relative"} zIndex={"5"} borderRadius={"50%"} height={"42px"} width={"42px"} objectFit={"cover"} mx="auto" />
                <Box className="spin"></Box>
                {/* <Text fontSize={"20px"} fontWeight={"bold"}>Swati Chaurasia</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>UI Developer</Text> */}
              </Link>
            </Box>
            <Spacer />
            <List display={"flex"}>
              {menuItem.map((item, index) => (
                <ListItem key={index}
                  py="8px"
                  borderRadius="2px"
                  color="whiteAlpha.900"

                >
                  <Link
                    className="list-item" href={item.url} display={"flex"} p={"5px 12px"} ml={"5"} _hover={{
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
