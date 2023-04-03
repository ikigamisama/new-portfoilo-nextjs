import { font_roboto } from "@/libs/includes";
import { MobileNavBG, NavLinks, NavLinksOrdinary } from "@/styles/Header";
import { CloseIcon } from "@chakra-ui/icons";
import { Center, Flex, IconButton, VStack } from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

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
          <NavLinks className={font_roboto.className}>
            <AnchorLink href="#about-me">&#60;about-me&#62;</AnchorLink>
          </NavLinks>
          <NavLinks className={font_roboto.className}>
            <AnchorLink href="#skills">&#60;skills&#62;</AnchorLink>
          </NavLinks>
          <NavLinks className={font_roboto.className}>
            <AnchorLink href="#projects">&#60;projects&#62;</AnchorLink>
          </NavLinks>
          <NavLinks className={font_roboto.className}>
            <AnchorLink href="#contact">&#60;contact&#62;</AnchorLink>
          </NavLinks>
        </VStack>
      </Center>
    </MobileNavBG>
  );
}
