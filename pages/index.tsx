import Layout from './components/layout'
import { chakra } from '@chakra-ui/react'
import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import ThreeColumnsServices from './components/servicesGrid'
import IconBullets from './components/iconBullets'

// heroImg, heroHeading, heroIntro, heroButtons
const heading = (
  <Heading as='h1' size='4xl' className="animate__animated animate__bounce">
    <chakra.h1 color='black'>Lawfully White</chakra.h1>
    <chakra.h1 color='white'> Construction Ltd</chakra.h1>
  </Heading>
)


const heroButtons = [
  {
    id: 1,
    label: 'Get In Touch',
    href: '/contact',
  },
  {
    id: 2,
    label: 'About Us',
    href: '/about',
  },
]

export default function Home() {
  return (
    <Layout 
    heroHeading={heading}
    heroIntro='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.'
    heroButtons={heroButtons}>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black', '#ffde59')}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('#ffde59', 'black')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A construction company beaming with vision</Heading>
          <Text color={'black'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <IconBullets
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Talented tradespersons'}
            />
            <IconBullets
              icon={<Icon as={IoLogoBitcoin} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Proffesional workflows'}
            />
            <IconBullets
              icon={
                <Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Cemented team'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </SimpleGrid>

      <ThreeColumnsServices />

    </Layout>
  )
}