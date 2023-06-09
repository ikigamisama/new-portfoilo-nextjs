import {
  FIELD_LIST,
  font_space_lato,
  font_roboto,
  font_space_mono,
} from "@/libs/includes";
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
import { Container, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Navbar from "./Navbar";
import useMediaQuery from "@/libs/mediaQuery";
import MobileNav from "./MobileNav";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

type FadeProp = { fade: "fade-in-text" | "fade-out-text" };

export default function Main({ colorMode, toggleColorMode, isMobile }: any) {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: "fade-in-text" });
  const [wordOrder, setWordOrder] = useState(0);
  const [mobileNavBar, setMobileNavbar] = useState(false);

  const isAboveLarge = useMediaQuery("(max-width: 1024px)");

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
      <Navbar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        isMobile={isMobile}
        onActivateMobile={setMobileNavbar}
      />

      {isMobile && (
        <MobileNav
          colorMode={colorMode}
          isActivate={mobileNavBar}
          onActivate={setMobileNavbar}
        />
      )}

      <MainSectionVidWrap>
        <VideoMainSection
          src={colorMode === "light" ? "day.mp4" : "night.mp4"}
          autoPlay
          loop
          muted
        ></VideoMainSection>
      </MainSectionVidWrap>

      <MainSectionWrapContent>
        <Container
          maxW={isAboveLarge === true ? "container.md" : "container.xl"}
          px={isMobile === true ? "50px" : "0px"}
        >
          <Flex flex={1} direction="column">
            <ContentIntroText className={font_roboto.className}>
              Yo, my name is
            </ContentIntroText>

            <ReactTypingEffect
              text={["Franz Monzales", "Ikigami Ryoda"]}
              cursorClassName="name-cursor-typing"
              displayTextRenderer={(text) => {
                return (
                  <MainSectionHeadingText className={font_space_lato.className}>
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

            <MainSectionText className={font_space_lato.className}>
              I'm a full-stack web developer with a passion for developing
              innovative, user-friendly applications.
            </MainSectionText>

            <ResumeDownloadButton className={font_roboto.className}>
              Download My Resume
            </ResumeDownloadButton>
          </Flex>
        </Container>
      </MainSectionWrapContent>
    </BGMainSection>
  );
}
