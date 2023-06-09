import { SecTitleText } from "@/styles/About";
import { ContactTextHead } from "@/styles/Contact";
import { MainSectionVidWrap } from "@/styles/MainSection";
import { VideoSkillsSection } from "@/styles/Skills";
import { Box, Container, Image } from "@chakra-ui/react";

import contactMeImg from "@/assets/img/contact-me.jpg";
import { font_roboto } from "@/libs/includes";
import { motion } from "framer-motion";
import useMediaQuery from "@/libs/mediaQuery";

export default function Contact({ colorMode, isMobile }: any) {
  const isAboveLarge = useMediaQuery("(max-width: 1024px)");
  return (
    <Box as="section" position="relative" py="75" id="contact">
      <MainSectionVidWrap>
        <VideoSkillsSection
          src={"contacts.mp4"}
          autoPlay
          loop
          muted
        ></VideoSkillsSection>
      </MainSectionVidWrap>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 },
        }}
      >
        <Container
          maxW={isAboveLarge === true ? "container.md" : "container.xl"}
          px={isMobile === true ? "40px" : "0px"}
        >
          <SecTitleText className={font_roboto.className}>
            &#60;contact&#62;
          </SecTitleText>

          <ContactTextHead className={font_roboto.className}>
            Feel free to drop to my email{" "}
            <a href="mailto:ikigamidevs.15@gmail.com">
              ikigamidevs.15@gmail.com
            </a>
          </ContactTextHead>

          <Image src={contactMeImg.src} w="100%" />
          <SecTitleText className={font_roboto.className}>
            &#60;/contact&#62;
          </SecTitleText>
        </Container>
      </motion.div>
    </Box>
  );
}
