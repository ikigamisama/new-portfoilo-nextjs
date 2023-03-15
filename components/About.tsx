import {
  AboutButtonTabList,
  AboutMeHeadingText,
  AboutMeImg,
  AboutMeText,
  SecTitleText,
  WorkDescriptionText,
  WorkTitleCompanyText,
  WorkTitleDuration,
  WorkTitleHeadText,
} from "@/styles/About";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Lato, Roboto_Mono, Space_Mono } from "next/font/google";
import { useState } from "react";

const font_roboto = Roboto_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--header-font",
});

const font_space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font_mono",
});

const font_space_lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font_lato",
});

const workHistory = [
  {
    name: "Maligaya Taxi",
    duration: "Feb 2017 - Sept 2018",
    position: "IT Staff / Web Developer",
    description: [
      "The Information Technology (IT) staff is responsible for the smooth operation of the company’s computer systems. They install and maintain software, hardware and networks.",
      "They also provide support to users and train them on how to use the different systems. The IT staff is also responsible for ensuring that the company’s data is secure.",
      "IT staff must constantly keep up with new trends and developments to ensure that their organization’s systems are up to date.",
      "IT staff often train users on how to use new computer systems and software. With the ever-changing landscape of technology,",
    ],
  },
  {
    name: "Applicable Limited",
    duration: "Oct 2018 - Oct 2019",
    position: "Web Developer (Front End)",
    description: [
      "Determining the structure and design of web pages. ",
      "Ensuring user experience determines design choices.",
      "Developing features to enhance the user experience.",
      "Optimizing web pages for maximum speed and scalability.",
    ],
  },
  {
    name: "Flatworld Solutions",
    duration: "Mar 2020 - Dec 2020",
    position: "Web Developer (Full Stack)",
    description: [
      "Developing front end and back end website architecture.",
      "Designing user interactions on web pages.",
      "Web developer should have a strong understanding of web standards and accessibility.",
      "Ensuring responsiveness of applications.",
      "Meeting both technical and consumer needs.",
    ],
  },
  {
    name: "Acquirely",
    duration: "July 2021 - Feb 2023",
    position: "Web Developer (Front End)",
    description: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
      "Translating design in Figma to reusable components",
    ],
  },
];
export default function About({ colorMode }: any) {
  const [currentTabActive, setCurrentTabActive] = useState(0);

  return (
    <Box as="section" py="100">
      <Container maxW="container.xl">
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;about-me&#62;
        </SecTitleText>

        <Box
          w="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          py={10}
          mb={10}
        >
          <Box flex={1}>
            <AboutMeImg srcimg={"/meh.jpg"} theme={colorMode} />
          </Box>
          <Box flex={1}>
            <AboutMeHeadingText className={font_space_mono.className}>
              A simplicity-focused innovator
            </AboutMeHeadingText>
            <AboutMeText className={font_roboto.className}>
              Yo, I'm Franz I am a web developer full stack and have been
              working in the industry for over 5 years. I have worked on a
              variety of projects, ranging from small personal websites to large
              scale enterprise applications. I am comfortable working with all
              aspects of web development, from design and front-end development
              to back-end programming and database administration. I am also
              experienced in managing web servers and have a good understanding
              of how to optimize website performance. In addition to my
              technical skills, I am also a good communicator and have a strong
              ability to work in a team environment.
            </AboutMeText>

            <AboutMeText className={font_roboto.className}>
              Right now i'm pursuing to be Data Analytics because I have always
              been fascinated by numbers and their role in our world. I want to
              help businesses make data-driven decisions. I love finding
              patterns in data and using my scientific and mathematical skills
              to interpret those patterns. I also enjoy using my creativity to
              solve problems. Data analytics is a rapidly growing field and I am
              excited to be a part of it. I believe that data analytics and data
              science will change the world and I want to be a part of that
              change.
            </AboutMeText>
          </Box>
        </Box>
        <AboutMeHeadingText
          className={font_space_mono.className}
          theme={colorMode}
        >
          Work History
        </AboutMeHeadingText>

        <HStack w="100%" alignItems="flex-start" py={50}>
          <Box w="25%">
            <VStack>
              {workHistory.map((list, i) => (
                <AboutButtonTabList
                  className={font_roboto.className}
                  key={i}
                  onClick={() => setCurrentTabActive(i)}
                  currentclick={currentTabActive === i ? "true" : "false"}
                >
                  {list.name}
                </AboutButtonTabList>
              ))}
            </VStack>
          </Box>
          <Box w="75%">
            {workHistory.map((list, i) => {
              if (currentTabActive === i) {
                return (
                  <Box px={4} key={i}>
                    <WorkTitleHeadText className={font_space_lato.className}>
                      {list.position}
                      <WorkTitleCompanyText>
                        {" "}
                        @ {list.name}
                      </WorkTitleCompanyText>
                    </WorkTitleHeadText>
                    <WorkTitleDuration className={font_space_mono.className}>
                      {list.duration}
                    </WorkTitleDuration>

                    <List>
                      {list.description.map((descriptionList, ii) => (
                        <WorkDescriptionText
                          className={font_roboto.className}
                          key={ii}
                        >
                          <ListIcon
                            as={CheckCircleIcon}
                            color="#3182CE"
                            mr={6}
                          />
                          {descriptionList}
                        </WorkDescriptionText>
                      ))}
                    </List>
                  </Box>
                );
              }
            })}
          </Box>
        </HStack>
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/about-me&#62;
        </SecTitleText>
      </Container>
    </Box>
  );
}
