import { Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import Layout from './components/layout'

const Services = () => {
  return (
    <Layout title='Services' heroHeading='Our Services'>
      <SimpleThreeColumns />
    </Layout>
  )
}

export default Services

import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Icon from '@chakra-ui/icon'
import CTA from './practice/2col-cta'

export const Feature1 = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export function SimpleThreeColumns() {
  return (
    <Container maxW={'5xl'} p={4}>
        <Heading mb={4} >Our Services</Heading>
  <Text fontSize="xl" mb={4}>Here at Lawfully White we pride ourselves in executing challenges with remarkable precision</Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature1
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Home Extensions'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Loft Conversions'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Landscaping'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'House maintenance'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Trade specific tasks'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'White Goods'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Plastering'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature1
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Roofing'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
      <CTA SectionTitle={'Ready to start that project?'}
    SectionTag={'Book a quote now!'}
    SectionText={'Speak to our friendly and highly courtious sales team and get closer to your dream space'}
                ButtonLabel={'Book A Quote'} ButtonLink='/contact' />

    </Container>
  );
}
