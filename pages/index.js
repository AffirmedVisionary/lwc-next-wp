import { Code, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import Card from "./components/card";
import Layout from "./components/layout";


export default function Home() {
  return (
    <Layout>


        <Heading as="h1" size="4xl" >
          Testing the firebase preview/merge
        </Heading>

        <Text fontSize="md">
          Get started by editing{' '}
          <Code>pages/index.js</Code>
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
