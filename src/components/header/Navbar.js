import {Container, Flex} from '@chakra-ui/react';
import React from 'react';
import MenuBar from '../../layout/Menubar';
import BannerText from '../bannerHome/bannerText';


function Navbar() {
 return (
   <>
     <Flex w="100%" borderRadius="8px">
        <Container maxW="container.xl" h="100%" overflowY={"auto"}>
           <Flex py="15px" justifyContent="space-between">
              <MenuBar/>
           </Flex>
           {/* <Flex>
              <BannerText/>
           </Flex> */}
        </Container>
     </Flex>
   </>
 );
}

export default Navbar;
