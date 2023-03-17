import { AboutMeText, SecTitleText } from "@/styles/About";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Image as ImageCarousel,
} from "@chakra-ui/react";
import { Roboto_Mono, Space_Mono } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { imageCarousel, skillsets } from "@/libs/includes";

import { SKillsCard, SkillsCardTitleText } from "@/styles/Skills";

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

export default function Skills({ colorMode }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <Box as="section" py="25" position="relative">
      <Container maxW="container.xl">
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;skills&#62;
        </SecTitleText>
        <Box
          w="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          py={10}
          mb={10}
          gap={10}
        >
          <Box flex={1} w="100%">
            <Box className="embla">
              <Box className="embla__viewport" ref={emblaRef}>
                <Box className="embla__container">
                  {imageCarousel.map((imgCarousel, i) => (
                    <Box className="embla__slide" key={i}>
                      <ImageCarousel
                        className="embla__slide__img"
                        src={imgCarousel.src}
                        alt={imgCarousel.name}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>
            <AboutMeText className={font_roboto.className}>
              As a seasoned web developer, I have a thorough understanding of of
              a wide range of technologies and frameworks. I have knowledge and
              experience in HTML, CSS, and JavaScript are examples of front-end
              development languages. as well as backend languages such as PHP
              and Python. I have knowledgeable about databases such as MySQL,
              PostgreSQL, and MongoDB, and have worked with web frameworks such
              as Django, VueJS, and React. I have a keen sense of detail and am
              capable of to create visually appealing designs that are also
              user-friendly user-friendly. In addition, I have strong analytical
              abilities. enabling you to quickly identify and resolve complex
              issues and efficient manner. I have a strong desire for
              innovation. learning enables you to stay ahead of the curve in the
              rapidly-evolving
            </AboutMeText>
          </Box>
        </Box>

        {skillsets.map((skills, d) => (
          <>
            <SkillsCardTitleText
              className={font_space_mono.className}
              theme={colorMode}
            >
              {skills.type}
            </SkillsCardTitleText>
            <Grid templateColumns="repeat(4, 1fr)" gap={12} my={10} w="100%">
              {skills.list.map((lists, s) => (
                <GridItem>
                  <SKillsCard theme={colorMode}>
                    <Center>
                      <Image
                        src={
                          colorMode === "light"
                            ? lists.src.light
                            : lists.src.dark
                        }
                        width="175"
                        height="175"
                        alt={lists.name}
                      />
                    </Center>
                  </SKillsCard>
                </GridItem>
              ))}
            </Grid>
          </>
        ))}

        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/skills&#62;
        </SecTitleText>
      </Container>
    </Box>
  );
}
