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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Box background="rgba(0, 0, 0, .4) url('/assets/img/sidebar_bg.jpg')"  minH={"100vh"}
          maxH={"100vh"} backgroundRepeat="no-repeat" backgroundBlendMode="darken" backgroundSize="cover" overflowY={"auto"}>
                <Navbar/> 
            </Box>
          {/* <Box bg="rgba(255,192,203,.4)">
            <Navbar />
          </Box> */}
          <Box bg="rgba(170,225,252,.1)">
            <Box overflowY={"auto"} minH={"100vh"}
          maxH={"100vh"}>

            <Routes>
              <Route exact path="/" element={<HomeIndexPage />} />
              <Route path='/about' element={<AboutIndexPage/> } />
              <Route path='/experience' element={<ExperienceIndexPage/> } />
                {/*<Route path='/contact' element={<Contact/> } /> */}
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
