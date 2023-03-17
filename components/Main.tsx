import { FIELD_LIST } from "@/libs/includes";
import {
  BGMainSection,
  ContentIntroText,
  MainSectionHeadingText,
  MainSectionSubHeadingText,
  MainSectionText,
  MainSectionVidWrap,
  MainSectionWrapContent,
  ResumeDownloadButton,
  VideoMainSection,
} from "@/styles/MainSection";
import { Container, Flex, HStack } from "@chakra-ui/react";
import { Lato, Roboto_Mono, Space_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Navbar from "./Navbar";

const font_roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font_roboto_mono",
});

const font_space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font_mono",
});

const font_lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font_lato",
});

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

type FadeProp = { fade: "fade-in-text" | "fade-out-text" };

export default function Main({ colorMode, toggleColorMode }: any) {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: "fade-in-text" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in-text"
        ? setFadeProp({ fade: "fade-out-text" })
        : setFadeProp({ fade: "fade-in-text" });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % FIELD_LIST.length);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <BGMainSection>
      <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />

      <MainSectionVidWrap>
        <VideoMainSection
          src={colorMode === "light" ? "day.mp4" : "night.mp4"}
          autoPlay
          loop
          muted
        ></VideoMainSection>
      </MainSectionVidWrap>

      <MainSectionWrapContent>
        <Container maxW="container.xl">
          <HStack>
            <Flex flex={1} direction="column">
              <ContentIntroText className={font_roboto_mono.className}>
                Yo, my name is
              </ContentIntroText>

              <ReactTypingEffect
                text={["Franz Monzales", "Ikigami Ryoda"]}
                cursorClassName="name-cursor-typing"
                displayTextRenderer={(text) => {
                  return (
                    <MainSectionHeadingText className={font_lato.className}>
                      {text}
                    </MainSectionHeadingText>
                  );
                }}
              />

              <MainSectionSubHeadingText
                className={font_space_mono.className + " " + fadeProp.fade}
              >
                {FIELD_LIST[wordOrder]}
              </MainSectionSubHeadingText>

              <MainSectionText className={font_lato.className}>
                I'm a full-stack web developer with a passion for developing
                innovative, user-friendly applications.
              </MainSectionText>

              <ResumeDownloadButton className={font_roboto_mono.className}>
                Download My Resume
              </ResumeDownloadButton>
            </Flex>
            <Flex flex={1}> </Flex>
          </HStack>
        </Container>
      </MainSectionWrapContent>
    </BGMainSection>
  );
}
