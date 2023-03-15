import { HeaderMain, NavHeader, NavLinks, ThemeButton } from "@/styles/Header";
import { Box, HStack, useColorMode } from "@chakra-ui/react";
import darkLogo from "@/assets/img/main-logo-dark-mode.png";
import lightLogo from "@/assets/img/main-logo-light-mode.png";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const headerFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--header-font",
});

export default function Navbar({ colorMode, toggleColorMode }: any) {
  return (
    <HeaderMain>
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
        <HStack justifyContent="flex-end" gap={6}>
          <NavLinks href="#" className={headerFont.className}>
            &#60;home&#62;
          </NavLinks>
          <NavLinks href="#" className={headerFont.className}>
            &#60;about-me&#62;
          </NavLinks>
          <NavLinks href="#" className={headerFont.className}>
            &#60;skills&#62;
          </NavLinks>
          <NavLinks href="#" className={headerFont.className}>
            &#60;projects&#62;
          </NavLinks>
          <NavLinks href="#" className={headerFont.className}>
            &#60;contact&#62;
          </NavLinks>

          <ThemeButton
            className={headerFont.className}
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
      </NavHeader>
    </HeaderMain>
  );
}
