import {
  HeaderMain,
  NavHeader,
  NavLinks,
  NavLinksOrdinary,
  ThemeButton,
} from "@/styles/Header";
import { Box, HStack } from "@chakra-ui/react";
import darkLogo from "@/assets/img/main-logo-dark-mode.png";
import lightLogo from "@/assets/img/main-logo-light-mode.png";
import Image from "next/image";
import { font_roboto } from "@/libs/includes";
import { HamburgerIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

export default function Navbar({
  colorMode,
  toggleColorMode,
  isMobile,
  onActivateMobile,
}: any) {
  return (
    <HeaderMain ismobile={isMobile.toString()}>
      <NavHeader>
        <Box>
          <a href="/">
            <Image
              priority
              src={colorMode === "light" ? lightLogo : darkLogo}
              alt="main-logo-iikigami"
              width="50"
            />
          </a>
        </Box>
        <HStack
          justifyContent="flex-end"
          gap={6}
          display={isMobile === false ? "flex" : "none"}
        >
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

          <ThemeButton
            className={font_roboto.className}
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </ThemeButton>
        </HStack>

        <Box
          justifyContent="flex-end"
          display={isMobile === true ? "flex" : "none"}
          flexDirection="row"
        >
          <ThemeButton
            className={font_roboto.className}
            onClick={() => onActivateMobile(true)}
            mr={4}
          >
            <HamburgerIcon />
          </ThemeButton>

          <ThemeButton
            className={font_roboto.className}
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </ThemeButton>
        </Box>
      </NavHeader>
    </HeaderMain>
  );
}
