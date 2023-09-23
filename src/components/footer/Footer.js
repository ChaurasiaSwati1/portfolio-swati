import {Container, Flex} from '@chakra-ui/react';
import React from 'react';
import FooterLayout from '../../layout/FooterLayout';
import BannerText from '../bannerHome/bannerText';


function Footer() {
 return (
   <>
     <Flex w="100%" borderRadius="8px"  h="100%" py={"30px"}>
        <Container maxW="container.xl" py={"0"} px={7}>
           <Flex py="18px">
              <FooterLayout/>
           </Flex>
        </Container>
     </Flex>
   </>
 );
}

export default Footer;
