import { useState } from "react";
import { SecTitleText } from "@/styles/About";
import {
  ProjectDescriptionText,
  ProjectListTextAlign,
  ProjectTabs,
  ProjectTitleText,
  ProjectTools,
} from "@/styles/Projects";
import { Box, Center, Container, HStack, Image } from "@chakra-ui/react";
import {
  font_roboto,
  font_space_lato,
  font_space_mono,
  projectList,
  tabProjectList,
} from "@/libs/includes";
import { AnimatePresence, motion } from "framer-motion";
import SectionDiv from "./sections";

export default function Projects({ colorMode }: any) {
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <SectionDiv>
      <Box id="projects"></Box>
      <Container maxW="container.xl">
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;projects&#62;
        </SecTitleText>
        <Center>
          <HStack>
            {tabProjectList.map((data, i) => (
              <ProjectTabs
                key={i}
                activetab={currentTab === data.category ? "true" : "false"}
                theme={colorMode}
                className={font_space_mono.className}
                onClick={() => {
                  setCurrentTab(data.category);
                }}
              >
                {data.category}
              </ProjectTabs>
            ))}
          </HStack>
        </Center>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {projectList.map((pList, k) => {
              if (currentTab === pList.type || currentTab === "All") {
                return (
                  <HStack gap={9} my={12} key={k}>
                    <ProjectListTextAlign
                      w="65%"
                      aligntext={k % 2 === 0 ? "left" : "right"}
                      alignItems={k % 2 === 0 ? "start" : "end"}
                      order={k % 2 === 0 ? 1 : 2}
                    >
                      <ProjectTitleText
                        className={font_space_lato.className}
                        theme={colorMode}
                      >
                        {pList.name}
                      </ProjectTitleText>
                      <ProjectDescriptionText
                        className={font_roboto.className}
                        paragraphalign="right"
                      >
                        {pList.description}
                      </ProjectDescriptionText>

                      <HStack gap={6}>
                        {pList.tools.map((tools, t) => (
                          <ProjectTools
                            key={t}
                            className={font_roboto.className}
                          >
                            {tools}
                          </ProjectTools>
                        ))}
                      </HStack>
                    </ProjectListTextAlign>
                    <Box w="35%" order={k % 2 === 0 ? 2 : 1}>
                      <Image src={pList.image} />
                    </Box>
                  </HStack>
                );
              }
            })}
          </motion.div>
        </AnimatePresence>

        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/projects&#62;
        </SecTitleText>
      </Container>
    </SectionDiv>
  );
}
