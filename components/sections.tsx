import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const SectionDivAnimate = chakra(motion.section, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export default function SectionDiv({ children }: any) {
  return (
    <SectionDivAnimate
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      py="75"
    >
      {children}
    </SectionDivAnimate>
  );
}
