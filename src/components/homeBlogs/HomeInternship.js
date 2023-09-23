import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import internship from "../../assets/img/internship.jpg";

function HomeInternship() {
  return (
    <>
      <Box w="100%">
        <Container maxW="full" overflowY={"auto"} px={0} color={"#032747"}>
          <Box justifyContent="center" h="100%" minH="200px">
            
          <Image
                className="hoverable shape_img shape_in"
                src={internship}
                mx={"auto"}
                top={"55px"}
                maxH={{ base: "auto", sm: "200px", md: "280px", lg: "300px", xl: "420px" }}
                maxW={{ base: "auto",sm: "auto", md: "280px", lg: "300px", xl: "420px" }}
                objectFit="contain"
                height="auto"
                width="auto"
                
              />
            <Text fontSize="1.75rem" pb="5" textAlign={"justify"}>
              My first assignment where I had to work on developing UI screens
              using HTML, CSS, and JavaScript. It was a steep learning curve,
              but with dedication and support from my team, I quickly grasped
              the concepts and started producing quality work.
            <br/>
              During my internship at <Link href="https://www.exalogic.co/" color={"#f12c2c"}>Exalogic Consulting</Link>, I had the opportunity
              to work on various projects, including Edental Portal, Realcube
              Portal, and Engage App. These experiences allowed me to apply my
              knowledge of front-end technologies such as HTML, CSS, Bootstrap,
              JavaScript, jQuery, React JS, and Chakra UI to create interactive
              and user-friendly UI screens.
            <br/>
              Working closely with design teams and project managers, I learned
              how to effectively communicate and collaborate to deliver UI
              designs that met project specifications. Attending meetings and
              aligning with team members ensured that the development process
              remained on track.
            <br/>
              One of the significant projects I worked on during my internship
              involved SEO optimization. This experience provided me with
              insights into improving web page visibility and search engine
              rankings, which is a crucial aspect of modern web development.
            <br/>
              I'm proud of the progress I made during my six-month internship,
              overcoming challenges and expanding my skill set. The exposure to
              new technologies and the support of my team helped me develop a
              strong foundation in UI development and enhanced my
              problem-solving abilities.
            <br/>
              As I continue to learn and grow in my career, I am now focusing on
              expanding my knowledge to include backend development using
              technologies like Node.js, Express.js, and MongoDB. This will
              enable me to contribute to full-stack development and enhance my
              understanding of the complete software development lifecycle.
            <br/>
              I am excited to leverage my experience, skills, and passion for UI
              development in my future endeavors, taking on new challenges and
              contributing to the success of teams and organizations.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomeInternship;
