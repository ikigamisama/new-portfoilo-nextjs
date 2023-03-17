import { SecTitleText } from "@/styles/About";
import { Box, Container } from "@chakra-ui/react";
import { Roboto_Mono } from "next/font/google";

const font_roboto = Roboto_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--header-font",
});

export default function Projects({ colorMode }: any) {
  return (
    <Box as="section" py="75" position="relative" id="projects">
      <Container maxW="container.xl">
        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;projects&#62;
        </SecTitleText>

        <SecTitleText className={font_roboto.className} theme={colorMode}>
          &#60;/projects&#62;
        </SecTitleText>
      </Container>
    </Box>
  );
}
