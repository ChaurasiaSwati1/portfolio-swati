import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  OrderedList,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ui from "../../assets/img/ui.jpg";

function HomeCorporate() {
  return (
    <>
      <Box w="100%">
        <Container maxW="full" overflowY={"auto"} px={0} color={"#032747"}>
          <Box justifyContent="center" h="100%" minH="200px">
            <Image
              className="hoverable shape_img shape_cor"
              src={ui}
              mx={"auto"}
              top={"55px"}
              maxH={{
                base: "auto",
                sm: "200px",
                md: "280px",
                lg: "300px",
                xl: "420px",
              }}
              maxW={{
                base: "auto",
                sm: "auto",
                md: "280px",
                lg: "300px",
                xl: "420px",
              }}
              objectFit="contain"
              height="auto"
              width="auto"
            />
            <Text fontSize="1.75rem" pb="5" textAlign={"justify"}>
              I had a valuable internship experience where I gained hands-on
              experience working with various technologies. React JS, HTML, CSS,
              JavaScript, and Bootstrap are all widely used in web development
              and I have experience with them.
              <br />
              Additionally, I also worked on PHP projects, as PHP is a
              popular server-side scripting language used for web development.
              It's commonly used in combination with HTML and CSS to create
              dynamic websites and web applications.
              <br /><br />
              By working on projects using these technologies, I had likely
              developed a strong foundation in front-end web development and
              gained practical knowledge in building user interfaces,
              implementing interactivity, and creating responsive designs.
              <br />
              <OrderedList fontSize={"1.75rem"} fontWeight={500} pt={5}>
                <ListItem pb="2">
                  <Box fontWeight={"600"} as="span">Front-End Development</Box> : I have
                  experience in developing user interfaces using HTML, CSS/SCSS,
                  and Bootstrap. I also worked with front-end frameworks like
                  React.js, Chakra UI, and Tailwind CSS.
                </ListItem>
                <ListItem pb="2">
                <Box fontWeight={"600"} as="span">Javascript</Box> : I have proficient in JavaScript and have used jQuery for
                  scripting purposes.
                </ListItem>
                <ListItem pb="2">
                  <Box fontWeight={"600"} as="span">Project Experience</Box> : I worked
                  on several projects, including Edental, Realcube, Provis,
                  Ecademia, Mall Management, POS - Point of Sale, Engage, SCMAF,
                  SmartFarm, ENursing, RCOAPM, and My Villa. These projects
                  likely gave me exposure to various aspects of front-end
                  development and allowed me to apply my skills in real-world
                  scenarios.
                </ListItem>
                <ListItem pb="2">
                  <Box fontWeight={"600"} as="span">React.js</Box> : I developed UI
                  screens using React.js, utilizing features like passing props,
                  useState, and leveraging packages like Ant Design, react
                  Counter, react-icon, and react-apexcharts.
                </ListItem>
                <ListItem pb="2">
                  <Box fontWeight={"600"} as="span">
                    Collaboration and Communication
                  </Box> : I worked with design teams, project managers, and customers,
                  attending meetings to ensure alignment with project
                  specifications. This experience highlights my ability to work
                  in a team and effectively communicate with stakeholders.
                </ListItem>
              </OrderedList>
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomeCorporate;
