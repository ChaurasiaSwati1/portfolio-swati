import {
  Container,
  Flex,
  Button,
  Box,
  List,
  ListItem,
  Image,
  SimpleGrid,
  Link,
  Text,
  Divider
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { MdCall } from "react-icons/md";
import profile from "../assets/img/swati_logo.png"
import { useLocation } from "react-router-dom";

function FooterLayout() {
  
	const location = useLocation();
	const pathname = location.pathname.split("/")[1];
  const menuItem = [
    {
      pic: FaLinkedinIn,
      title: "https://www.linkedin.com/in/swati-chaurasia-7a8a26220/",
      link: "https://www.linkedin.com/in/swati-chaurasia-7a8a26220",
    },
    {
      pic: FiMail,
      title: "Swatichaurasia9445@gmail.com",
      link: "mailto:Swatichaurasia9445@gmail.com",

    },
    {
      pic: MdCall,
      title: "9170839445",
      link: "",
    },
    {
      pic: IoMdContact,
      title: "Swati Chaurasia",
      link: "/",
    },
  ];
  const menuItems = [
		{
			// pic: IoMdContact,
			title: "About",
			url: "/skills",
			active: "skills",

		},
		{
			// pic: GiNotebook,
			title: "Blogs",
			url: "/blogs",
			active: "blogs",

		},
		{
			// pic: BsBriefcaseFill,
			title: "Work Experience",
			url: "/experience",
			active: "experience",
		},
		{
			// pic: FaBlogger,
			title: "Gallery",
			url: "/blogsGallery",
			active: "blogsGallery",
		},
	];
  return (
    <>
      <Flex w="100%"  >
        <Container maxW="container.xl"  px={7} minH="60px">
            <SimpleGrid className="footer" py={"30px"} templateColumns={{ sm: "1fr 1fr 1fr" }} spacing={{ sm: "10px", md: "30px" }} w={"100%"}>
              <Box textAlign="center">
                <Image
                  objectFit='contain'
                  height={{base:"70px",md:"100px"}}
                  width={{base:"70px",md:"100px"}}
                  borderRadius={"50%"}
                  border="4px solid #f12c2c"
                  mx="auto"
                  mb="15px"
                  src={profile} alt='logo'
                />
                <Text as={"h4"} mb={""} fontWeight={"600"} fontSize="2rem">Swati Chaurasia</Text>
                <Text as={"h4"} mb={"0"} fontWeight={"600"} color={"#f12c2c"} fontSize="1.5rem">Associate UI Developer</Text>

              </Box>
              <Box textAlign="">

                <Text as={"h4"} mb={"20px"} fontWeight={"600"} fontSize="2.2rem">Contact Info</Text>
                <Text as={"h4"} mb={"0"} fontWeight={"600"} fontSize="1.5rem">Email</Text>
                <Text as={"h4"} mb={"10px"} fontWeight={"500"} fontSize="1.5rem">Swatichaurasia9445@gmail.com</Text>
                <Text as={"h4"} mb={"0"} fontWeight={"600"} fontSize="1.5rem">Media</Text>
                <Text as={"h4"} mb={"10px"} fontWeight={"500"} fontSize="1.5rem"><Link href="https://www.linkedin.com/in/swati-chaurasia-7a8a26220" target="_blank">https://www.linkedin.com/in/swati-chaurasia-7a8a26220</Link></Text>
                <Text as={"h4"} mb={"0"} fontWeight={"600"} fontSize="1.5rem">Location</Text>
                <Text as={"h4"} mb={"10px"} fontWeight={"500"} fontSize="1.5rem">Ratsar Ballia (UP)</Text>
              </Box>
              <Box textAlign="">

                <Text as={"h4"} mb={"20px"} fontWeight={"600"} fontSize="2.2rem">Let's Talk</Text>
                <Text as={"h4"} mb={"10px"} fontWeight={"600"} fontSize="1.5rem">I am always ready to talk about new projects, improve UI designs, create something new, unique and ready to take challenges.</Text>
                <Link
                  fontWeight={600}
                  _hover={{ textDecoration: "none" }}
                  href="mailto:Swatichaurasia9445@gmail.com"
                >
                  <Button
                    fontSize="1.75rem"
                    // ml="15px"
                    p="8px 16px"
                    borderRadius="4px"
                    background="#f12c2c"
                    color="#ffffff"
                    height={"32px"}
                    _hover={{ padding: "7px 15px", background: "#ffffff", color: "#f12c2c", border: "1px solid #f12c2c" }}
                  >
                    {" "}
                    Contact Me
                  </Button>
                </Link>
              </Box>
            </SimpleGrid>
            <Divider borderColor={"#efa0a0"}/>
            <SimpleGrid alignItems={"center"} className="footer" py={"5"} templateColumns={{ sm: "1fr 1fr" }} spacing={{ sm: "0", md: "30px" }} w={"100%"}>            
            <List display={"flex"} alignItems={"center"}>
							{menuItems.map((item, index) => (
								<ListItem key={index}
									borderRadius="2px"
									color="#032747"

								>
									<Link className="footer_list" href={item.url} display={"flex"} p={"5px 12px"} ml={"5"} _hover={{
											textDecoration: "none"
										}}
										_active={{
											background: "#032747",
											borderRadius: "5px",
											color: "#ffffff",
											textDecoration: "none"
										}}>
										{/* <Icon as={item.pic} className="icon" fontSize="16px" mr="10px" /> */}
										<Text className="menu-txt" fontSize={"1.5rem"}
											fontWeight="600">{item.title}</Text>
									</Link>
								</ListItem>
							))}
						</List> 
            <Text display={{base: "none", sm: "inline-block" }} className="menu-txt" textAlign={"right"} fontSize={"1.5rem"}
											fontWeight="600">Swati Chaurasia</Text>
            </SimpleGrid>
        </Container>
      </Flex>
    </>
  );
}

export default FooterLayout;
