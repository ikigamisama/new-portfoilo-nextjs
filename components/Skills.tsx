import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Image as ImageCarousel,
} from "@chakra-ui/react";
import {
  font_roboto,
  font_space_mono,
  imageCarousel,
  skillsets,
} from "@/libs/includes";
import { AboutMeText, SecTitleText } from "@/styles/About";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { SKillsCard, SkillsCardTitleText } from "@/styles/Skills";
import SectionDiv from "./sections";

export default function Skills({ colorMode }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <SectionDiv>
      <Box id="skills"></Box>
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
          <Box key={d}>
            <SkillsCardTitleText
              className={font_space_mono.className}
              theme={colorMode}
            >
              {skills.type}
            </SkillsCardTitleText>
            <Grid templateColumns="repeat(4, 1fr)" gap={12} my={10} w="100%">
              {skills.list.map((lists, s) => (
                <GridItem key={s}>
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
          </Box>
        ))}

        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/skills&#62;
        </SecTitleText>
      </Container>
    </SectionDiv>
  );
}
