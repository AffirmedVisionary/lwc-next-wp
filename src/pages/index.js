import PropType from "prop-types";
import {
  chakra,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import Layout from "../components/layout";
import CTA from "../components/practice/2col-cta";

// heroImg, heroHeading, heroIntro, heroButtons
const heading = (
  <Heading as="h1" size="4xl" className="animate__animated animate__bounce">
    <chakra.h1 color="black">Lawfully White</chakra.h1>
    <chakra.h1 color="white"> Construction Ltd</chakra.h1>
  </Heading>
);

const heroButtons = [
  {
    id: 1,
    label: "Get In Touch",
    href: "/contact",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about",
  },
];

export default function Home() {
  return (
    <Layout
      heroHeading={heading}
      heroIntro="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua."
      heroButtons={heroButtons}
    >
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={useColorModeValue("black", "#ffde59")}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("#ffde59", "black")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Story
            </Text>
            <Heading>A construction company beaming with vision</Heading>
            <Text color={"black"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Talented tradespersons"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"yellow.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Proffesional workflows"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"yellow.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Cemented team"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <SimpleThreeColumns />
    </Layout>
  );
}

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

Feature.propTypes = {
  iconBg: PropType.string,
  text: PropType.string,
  icon: PropType.element,
};

import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

export const Feature1 = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

Feature1.propTypes = {
  title: PropType.string,
  text: PropType.string,
  icon: PropType.element,
};

export function SimpleThreeColumns() {
  return (
    <Container maxW={"5xl"} p={4}>
      <Heading mb={4}>Our Services</Heading>
      <Text fontSize="xl" mb={4}>
        Here at Lawfully White we pride ourselves in executing challenges with
        remarkable precision
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature1
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Home Extensions"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Loft Conversions"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Landscaping"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"House maintenance"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Trade specific tasks"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"White Goods"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Plastering"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Roofing"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
      <CTA
        SectionTitle={"Ready to start that project?"}
        SectionTag={"Book a quote now!"}
        SectionText={
          "Speak to our friendly and highly courtious sales team and get closer to your dream space"
        }
        ButtonLabel={"Book A Quote"}
        ButtonLink="/contact"
      />
    </Container>
  );
}
