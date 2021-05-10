import { Heading, Text } from '@chakra-ui/layout'
import { Avatar, AvatarGroup, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout'
import CTA from './practice/2col-cta'

const About = () => {
  return (
    <Layout title='About Us' heroHeading='About Us'>
      <Heading >The Back Story</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
        mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
        porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
        massa. Fusce ac turpis quis ligula lacinia aliquet.{' '}
      </Text>
      <Flex mt={6}>
        <Flex width="50%" flexDirection="column" >
          <Image height="300px" width="300px" textAlign="center" m="auto" />
        </Flex>
          <Flex width="50%" flexDirection="column" m='auto'>
          <Heading >The Vision</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </Text>
        </Flex>
        </Flex>
        <Heading textAlign='center' mt={6}>The Team</Heading>
      <AvatarGroup spacing={-3} max={5} size="md" justifyContent="center" mt={6}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        </AvatarGroup>
        <CTA SectionTitle={'Ready to start that project?'}
    SectionTag={'Book a quote now!'} 
    SectionText={'Speak to our friendly and highly courtious sales team and get closer to your dream space'}
                ButtonLabel={'Book A Quote'} ButtonLink='/contact' />
    </Layout>
  )
}

export default About
