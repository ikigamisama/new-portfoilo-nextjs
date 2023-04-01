import { useState } from "react";
import { SecTitleText } from "@/styles/About";
import { ProjectTabs } from "@/styles/Projects";
import { Box, Center, Container, HStack } from "@chakra-ui/react";
import { Roboto_Mono, Space_Mono } from "next/font/google";
import { tabProjectList } from "@/libs/includes";

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
export default function Projects({ colorMode }: any) {
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <Box as="section" py="75" position="relative" id="projects">
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
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/projects&#62;
        </SecTitleText>
      </Container>
    </Box>
  );
}
