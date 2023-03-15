import { SecTitleText } from "@/styles/About";
import { MainSectionVidWrap, VideoMainSection } from "@/styles/MainSection";
import { VideoSkillsSection } from "@/styles/Skills";
import { Box, Container } from "@chakra-ui/react";
import { Roboto_Mono } from "next/font/google";

const font_roboto = Roboto_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--header-font",
});

export default function Skills({ colorMode }: any) {
  return (
    <Box as="section" py="75" position="relative">
      <MainSectionVidWrap>
        <VideoSkillsSection
          src={"skills.mp4"}
          autoPlay
          loop
          muted
        ></VideoSkillsSection>
      </MainSectionVidWrap>
      <Container maxW="container.xl">
        <SecTitleText className={font_roboto.className}>
          &#60;skills&#62;
        </SecTitleText>

        <SecTitleText className={font_roboto.className}>
          &#60;/skills&#62;
        </SecTitleText>
      </Container>
    </Box>
  );
}
