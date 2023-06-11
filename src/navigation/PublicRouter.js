import {
  Box,
  Flex
} from "@chakra-ui/react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import FooterLayout from "../layout/FooterLayout";
import Landing from "../layout/Landing";
import AboutIndexPage from "../pages/about/index";
import ContactIndexPage from "../pages/contact/index";
import ExperienceIndexPage from "../pages/experience/index";
import GalleryIndexPage from "../pages/gallery/index";
import HomeIndexPage from "../pages/home/index";
// import bg from ""

function PublicRouter() {
  let location = useLocation();

  return (
    <>
      {(location.pathname === '/') ? (
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      ) : (
        <React.Fragment>
          <Box width={"100%"}>
            <Box>
              <Box className="menu_bg" minH="64px"
                maxH={"64px"} backgroundSize="cover" overflow="hidden">
                <Flex className="menu_topbar" alignItems={"center"}>
                  <Navbar />
                </Flex>
              </Box>
              <Box className="content-bg">

                <Box h={"calc(100vh - 154px)"} overflowY={"auto"}>
                  <Routes>
                    <Route exact path='/blogs' element={<HomeIndexPage />} />
                    <Route path='/skills' element={<AboutIndexPage />} />
                    <Route path='/experience' element={<ExperienceIndexPage />} />
                    <Route path='/contact' element={<ContactIndexPage />} />
                    <Route path='/blogsGallery' element={<GalleryIndexPage />} />
                  </Routes>
                </Box>
              </Box>
              <Box className="footer-main" minH="50px" >
                <Flex className="" alignItems={"center"} h={"100%"}>
                  <FooterLayout />
                </Flex>
              </Box>
            </Box>
          </Box>

        </React.Fragment>
      )}
    </>
  );
}

export default PublicRouter;
