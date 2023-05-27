import {
  Container,
  VStack,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Heading,
  Button,
  defineStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/header/Navbar";
import Footer from "./layout/FooterLayout";
import HomeIndexPage from "./pages/home/index";
import ExperienceIndexPage from "./pages/experience/index";
import AboutIndexPage from "./pages/about/index";
import ContactIndexPage from "./pages/contact/index";
import GalleryIndexPage from "./pages/gallery/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import bg from ""

function App() {
  return (
    <Router>
      <Box width={"100%"}>
        <Box>
          <Box className="menu_bg" minH="90px"
            maxH={"90px"} backgroundSize="cover" overflow="hidden">
            <Flex className="menu_topbar" alignItems={"center"}><Navbar /> </Flex>
          </Box>
          <Box className="content-bg" bg="rgb(247 244 244 / 10%)">
            <Box >

              <Routes>
                <Route exact path="/" element={<HomeIndexPage />} />
                <Route path='/about' element={<AboutIndexPage />} />
                <Route path='/experience' element={<ExperienceIndexPage />} />
                <Route path='/contact' element={<ContactIndexPage />} />
                <Route path='/gallery' element={<GalleryIndexPage />} />
              </Routes>
            </Box>
          </Box>
          <Box className="footer-main" minH="50px" >
            <Flex className="" alignItems={"center"} h={"100%"}><Footer /> </Flex>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
