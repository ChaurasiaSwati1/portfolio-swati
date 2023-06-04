import {
  Container,
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { MdCall } from "react-icons/md";

function FooterLayout() {
  const menuItem = [
    {
      pic: FaLinkedinIn,
      title: "https://www.linkedin.com/in/swati-chaurasia-7a8a26220/",

    },
    {
      pic: FiMail,
      title: "Swatichaurasia9445@gmail.com",

    },
    {
      pic: MdCall,
      title: "9170839445",
    },
    {
      pic: IoMdContact,
      title: "Swati Chaurasia",
    },
  ];

  return (
    <>
      <Flex w="100%"  >
        <Container maxW="container.xl" py={"8px"} px={7} minH="60px">
          <List display={"flex"} alignItems={"center"} h={"100%"} w={"100%"}>
            <SimpleGrid className="footer" templateColumns={{md:"2fr 1fr 1fr 1fr"}} spacing={{sm:"0",md:"4"}} w={"100%"}>
              {menuItem.map((item, index) => (
                <ListItem key={index}
                  py="8px"
                  borderRadius="2px"
                  color="whiteAlpha.900"

                >
                  <Link href="" className="foot-link" display={"flex"} _hover={{
                      textDecoration: "none"
                    }}
                    _active={{
                      background: "#ffffff",
                      borderRadius: "5px",
                      color: "#032747",
                      textDecoration: "none"
                    }}>
                    <Icon as={item.pic} className="icon foot-icon" fontSize="12px" mr="10px" />
                    <Text className="menu-txt" fontSize={"10px"}
                      fontWeight="400">{item.title}</Text>
                  </Link>
                </ListItem>

              ))}
            </SimpleGrid>
          </List>
        </Container>
      </Flex>
    </>
  );
}

export default FooterLayout;
