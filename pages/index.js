import { Code, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'
import Card from './components/card'
import Layout from './components/layout'

import { chakra } from '@chakra-ui/react'
import Hero from './components/hero'

// heroImg, heroHeading, heroIntro, heroButtons
const heading = (
  <Heading as='h1' size='4xl'>
    Testing the firebase preview/merge
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
    <Layout>
      <Hero
        heroImg='https://picsum.photos/200/300'
        heroHeading={heading}
        heroIntro='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.'
        heroButtons={heroButtons}
      />

      <Text fontSize='md'>
        Get started by editing <Code>pages/index.js</Code>
      </Text>

      <Grid>
        <GridItem>
          <Card
            title='Documentation'
            paragraph='Find in-depth information about Next.js features and API.'
            href='https://nextjs.org/docs'
          />
        </GridItem>
        <GridItem>
          <Card
            title='Learn'
            paragraph='Learn about Next.js in an interactive course with quizzes!'
            href='https://nextjs.org/learn'
          />
        </GridItem>
        <GridItem>
          <Card
            title='Examples'
            paragraph='Discover and deploy boilerplate example Next.js projects.'
            href='https://github.com/vercel/next.js/tree/master/examples'
          />
        </GridItem>
        <GridItem>
          <Card
            title='Deploy'
            paragraph='Instantly deploy your Next.js site to a public URL with Vercel.'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          />
        </GridItem>
      </Grid>
    </Layout>
  )
}
