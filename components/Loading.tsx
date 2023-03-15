import { LoaderWrapper, RingLoader } from "@/styles/Loader";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import lightLogo from "@/assets/img/main-logo-light-mode.png";

export default function Loading({
  loader,
  colorMode,
}: {
  loader?: Boolean;
  colorMode: String;
}) {
  return (
    <LoaderWrapper id="loader_page" isload={loader} theme={colorMode}>
      <Center w="100%" h="100%">
        <RingLoader />
        <Box>
          <a href="/">
            <Image
              priority
              src={lightLogo}
              alt="main-logo-iikigami"
              width="150"
            />
          </a>
        </Box>
      </Center>
    </LoaderWrapper>
  );
}
