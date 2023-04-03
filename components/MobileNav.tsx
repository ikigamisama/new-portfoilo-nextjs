import { font_roboto } from "@/libs/includes";
import { MobileNavBG, NavLinks, NavLinksOrdinary } from "@/styles/Header";
import { CloseIcon } from "@chakra-ui/icons";
import { Center, Flex, IconButton, VStack } from "@chakra-ui/react";

export default function MobileNav({ colorMode, isActivate, onActivate }: any) {
  return (
    <MobileNavBG as="aside" theme={colorMode} isactive={isActivate.toString()}>
      <Flex justifyContent="end" w="100%" mb={10}>
        <IconButton
          icon={<CloseIcon />}
          onClick={() => onActivate(false)}
          aria-label="close-nav-mobile"
        />
      </Flex>

      <Center>
        <VStack gap={1}>
          <NavLinksOrdinary className={font_roboto.className}>
            &#60;home&#62;
          </NavLinksOrdinary>
          <NavLinks href="#about-me" className={font_roboto.className}>
            &#60;about-me&#62;
          </NavLinks>
          <NavLinks href="#skills" className={font_roboto.className}>
            &#60;skills&#62;
          </NavLinks>
          <NavLinks href="#projects" className={font_roboto.className}>
            &#60;projects&#62;
          </NavLinks>
          <NavLinks href="#contact" className={font_roboto.className}>
            &#60;contact&#62;
          </NavLinks>
        </VStack>
      </Center>
    </MobileNavBG>
  );
}
