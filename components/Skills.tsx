import { MainSectionVidWrap, VideoMainSection } from "@/styles/MainSection";
import { VideoSkillsSection } from "@/styles/Skills";
import { Box } from "@chakra-ui/react";

export default function Skills({ colorMode }: any) {
  return (
    <Box as="section" py="300" position="relative">
      <MainSectionVidWrap>
        <VideoSkillsSection
          src={colorMode === "light" ? "day.mp4" : "night.mp4"}
          autoPlay
          loop
          muted
        ></VideoSkillsSection>
      </MainSectionVidWrap>
    </Box>
  );
}
