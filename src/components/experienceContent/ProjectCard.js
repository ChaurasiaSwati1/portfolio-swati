import React from 'react';
import { Box, Link, Card, CardBody, Text, Image } from '@chakra-ui/react';
import edental from "../../assets/img/edental_logo.svg";
import engage from "../../assets/img/engage.png";
import rc from "../../assets/img/rc.svg";
import ict from "../../assets/img/ict.svg";
import ecadamia from "../../assets/img/ecadamia.png";
import fgs from "../../assets/img/fgs-logo.webp";
import exc from "../../assets/img/exa-blue-logo.png";
import mit from "../../assets/img/mit-logo.png";

const projectCard = [
    {
        id: 0, title: "Mithila IT - Worked as Frontend Developer",
        link: "https://www.mithilait.com/",
        desc: [
            { data: "Mithila It is a newly innovative company . In this Project...." },
            { data: "I worked as a Frontend Developer where I created UI screens and did api integretion which improves the sales by 40%." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "React JS" },
            { name: "Material UI/media queries" },
            { name: "JavaScript" },
        ],
        url: mit,
    },
    {
        id: 1, title: "Edental Portal - Worked as Frontend Developer",
        link: "https://www.edentalportal.com/",
        desc: [
            { data: "eDental Portal is Middle East’s only dental exam preparatory platform. In this Project...." },
            { data: "I worked as a Frontend Developer where I created UI screens which improves the sales by 40%." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Php" },
        ],
        url: edental,
    },
    {
        id: 2, title: "Realcube Property Portal - Worked as Frontend Developer",
        link: "https://www.realcube.estate/",
        desc: [
            { data: "RealCube is the leading cloud-based intelligent solution provider for property management and facilities management industries." },
            { data: "I worked as a Frontend Developer where I created UI screens which is fully responsive and SEO." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Grunt" },
            { name: "Php" },
        ],
        url: rc,
    },
    {
        id: 3, title: "Engage App Cloud - Worked as Frontend Developer",
        link: "https://www.engageapp.cloud/",
        desc: [
            { data: "Engage is a simple and efficient employee management tool, it helps you to plan and organize in a way which is best suitable for you and your team." },
            { data: "I worked as a Frontend Developer where I created UI screens, Responsive and SEO." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "React Js" },
        ],
        url: engage,
    },
    {
        id: 4, title: "ICT Portal - Worked as Frontend Developer, created UI screens.",
        link: "https://www.ict.ae/",
        desc: [
            { data: "International Capital Trading (ICT) is a privately owned, progressive leader in real estate development." },
            { data: "I worked as a Frontend Developer where I created UI screens." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Php" },
        ],
        url: ict,
    },
    {
        id: 5, title: "Ecadamia - Worked as Frontend Developer",
        link: "https://www.ecadamia.com/",
        desc: [
            { data: "Ecadamia - An integrated education management system powered by digital innovation" },
            { data: "I worked as a Frontend Developer where I created Landing page and other UI screens." },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Php" },
        ],
        url: ecadamia,
    },
    {
        id: 6, title: "Feel Good Stay - Worked as Frontend Developer",
        link: "https://www.feelgoodstay.in/",
        desc: [
            { data: "Feel Good Farm Stay a 17 acres of natural farm, where tranquillity meets the charm of rural living. In this Project...." },
            { data: " I worked on UI part using html, CSS, JavaScript functionality, responsive for all screen and also worked for maintaining SEO. " },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Grunt" },
            { name: "Php" },
        ],
        url: fgs,
    },
    {
        id: 6, title: "Exalogic Consulting - Worked as Frontend Developer",
        link: "https://www.exalogic.co/",
        desc: [
            { data: "Exalogic Consulting - A Global SAP Technology Partner offering advanced solutions for digital transformation." },
            { data: " I worked on UI part using html, CSS, JavaScript functionality, responsive for all screen and also worked for maintaining SEO. " },
            { data: "In this project I used..." },
        ],
        // skill: "HTML, CSS, Bootstrap",
        skills: [
            { name: "HTML" },
            { name: "CSS/media queries" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Php" },
        ],
        url: exc,
    },
]

const ProjectCardLayout = () => {
    return (
        <>
            {projectCard.map((project) => (
                <Box key={project.id}>
                    <Link
                        className="card_ovrlay"
                        href={project.link}
                        position="relative"
                        target="_blank"
                        color="purple.600"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Card
                            borderRadius="8px"
                            direction={{ base: "column", sm: "row" }}
                            overflow="hidden"
                            variant="outline"
                            h="100%"
                        >
                            <CardBody p="3rem">
                                <Text fontSize="2rem" fontWeight="600" pb="5">
                                    {project.title}
                                </Text>
                                {project.desc && Array.isArray(project.desc) && (
                                    <>
                                        {project.desc.map((desc, index) => (
                                            <Text fontWeight="500" mb="2" fontSize="1.5rem" key={index}>{desc.data}</Text>
                                        ))}
                                    </>
                                )}
                                {/* <Text fontWeight="500" fontSize="1.5rem">{project.data2}</Text>
                                <Text fontWeight="500" fontSize="1.5rem">{project.data3}</Text>
                                <Text fontWeight="500" fontSize="1.5rem" className="">{project.skill}</Text> */}
                                {/* <ul className="pl-3">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>Php</li>
                                </ul> */}
                                {project.skills && Array.isArray(project.skills) && (
                                    <> <ul className="pl-3">
                                        {project.skills.map((skill, index) => (
                                            <li key={index}>
                                                <Text fontSize="1.5rem">
                                                    {skill.name}
                                                </Text>
                                            </li>
                                        ))}
                                    </ul>
                                    </>
                                )}
                            </CardBody>
                        </Card>

                        <Box className="content" borderRadius="8px">
                            <Image
                                src={project.url} // Make sure to import or provide a valid image source
                                height="100%"
                                mx="auto"
                                alt="edental"
                                objectFit="contain"
                            />
                        </Box>
                    </Link>
                </Box>
            ))}
        </>
    );
};

export default ProjectCardLayout;
