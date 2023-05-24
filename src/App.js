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
        <SimpleGrid
          templateColumns={{
            sm: "1fr",
            md: "2fr 4fr",
            lg: "2fr 5fr",
            xl: "1fr 4fr",
          }}
        >
          <Box className="menu_bg"   minH={"100vh"}
          maxH={"100vh"} backgroundRepeat="no-repeat" backgroundBlendMode="darken" backgroundSize="cover" overflowY={"auto"}>
                <Navbar/> 
            </Box>
          {/* <Box bg="rgba(255,192,203,.4)">
            <Navbar />
          </Box> */}
          <Box bg="rgb(247 244 244 / 10%)">
            <Box overflowY={"auto"} minH={"100vh"}
          maxH={"100vh"}>

            <Routes>
              <Route exact path="/" element={<HomeIndexPage />} />
              <Route path='/about' element={<AboutIndexPage/> } />
              <Route path='/experience' element={<ExperienceIndexPage/> } />
              <Route path='/contact' element={<ContactIndexPage/> } />
              <Route path='/gallery' element={<GalleryIndexPage/> } />
            </Routes>
            </Box>
          </Box>
          {/* <Box bg='white' borderRadius="7px" w="full" pos={'fixed'} zIndex={99} bottom="15px" minH={'50px'}>
              {/* <Navbar/>   */}
          {/* </Box> */}
        </SimpleGrid>
      </Box>
    </Router>
  );
}

export default App;
