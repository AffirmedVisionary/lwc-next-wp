import PropType from "prop-types";
import { useRouter } from "next/router";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { chakra, Box, Stack, Image, Flex } from "@chakra-ui/react";

const CTA = ({
  SectionTitle,
  SectionTag,
  SectionText,
  ButtonLabel,
  ButtonLink,
}) => {
  const router = useRouter();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"white"}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("black", "#ffde59")}
          mb={6}
        >
          <chakra.span display="block">{SectionTitle}</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("black", "#ffde59")}
          >
            {SectionTag}
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("black", "white")}
        >
          {SectionText}
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box
            display="inline-flex"
            rounded="md"
            shadow="md"
            onClick={(e) => {
              e.preventDefault(), router.push(`${ButtonLink}`);
            }}
          >
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("black", "black")}
              bg={useColorModeValue("#ffde59", "white")}
              _hover={{
                color: useColorModeValue("#ffde59", "black"),
                bg: useColorModeValue("black", "#ffde59"),
              }}
            >
              {ButtonLabel}
            </chakra.a>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Flex>
  );
};

CTA.propTypes = {
  SectionTitle: PropType.string,
  SectionTag: PropType.string,
  SectionText: PropType.string,
  ButtonLabel: PropType.string,
  ButtonLink: PropType.string,
};

export default CTA;

// const serviceTitle = [
//   "Home & Commercial Remodelling.",
//   "Renovation of both commercial and residential buildings.",
//   "Residential Developments.",
//   "Commercial Developments.",
//   "Office remodelling.",
//   "Retail Developments.",
//   "New Builds.",
//   "Building regulations advice.",
//   "Demolition.",
//   "Design & Build",
//   "Modular Construction.",
//   "Civil Engineering.",
//   "Swimming pool’s & Leisure Facilities.",
//   "Structural works.",
//   "Partnering on Developments.",
//   "Sectional Construction within an existing project.",
//   "Asset Management.",
//   "Sourcing land for development",
// ];
