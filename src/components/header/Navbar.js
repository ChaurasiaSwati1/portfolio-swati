import {Container, Flex} from '@chakra-ui/react';
import React from 'react';
import MenuBar from '../../layout/Menubar';
import BannerText from '../bannerHome/bannerText';


function Navbar() {
 return (
   <>
        <Container maxW="container.xl" py={"0"} px={12}>
           <Flex py="10px" justifyContent="space-between">
              <MenuBar/>
           </Flex>
        </Container>
   </>
 );
}

export default Navbar;
