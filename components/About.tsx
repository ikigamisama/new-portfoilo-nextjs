import {
  font_roboto,
  font_space_lato,
  font_space_mono,
  workHistory,
} from "@/libs/includes";
import {
  AboutButtonTabList,
  AboutImageWrapper,
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
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionDiv from "./sections";

export default function About({ colorMode }: any) {
  const [currentTabActive, setCurrentTabActive] = useState(0);

  return (
    <SectionDiv>
      <Box id="about-me"></Box>
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
          <AboutImageWrapper flex={1}>
            <AboutMeImg srcimg={"/meh.jpg"} theme={colorMode} />
          </AboutImageWrapper>
          <Box flex={1}>
            <AboutMeHeadingText
              className={font_space_mono.className}
              theme={colorMode}
            >
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
            <AnimatePresence mode="wait">
              {workHistory.map((list, i) => {
                if (currentTabActive === i) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box px={4}>
                        <WorkTitleHeadText
                          theme={colorMode}
                          className={font_space_lato.className}
                        >
                          {list.position}
                          <WorkTitleCompanyText>
                            {" "}
                            @ {list.name}
                          </WorkTitleCompanyText>
                        </WorkTitleHeadText>
                        <WorkTitleDuration
                          className={font_space_mono.className}
                        >
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
                    </motion.div>
                  );
                }
              })}
            </AnimatePresence>
          </Box>
        </HStack>
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/about-me&#62;
        </SecTitleText>
      </Container>
    </SectionDiv>
  );
}
