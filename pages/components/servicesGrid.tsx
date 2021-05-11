import servicesArray from '../../lib/data/services.json'
import FeatureGrid from './feature1'
import CTA from '../practice/2col-cta'
import { Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'


export default function ThreeColumnsServices() {
    const services = servicesArray
  
    return (
      <>
        <Heading mb={4}>Our Services</Heading>
        <Text fontSize='xl' mb={4}>
          Here at Lawfully White we pride ourselves in executing challenges with
          remarkable precision
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign='center'>
          {services.map((service) => {
            const iconName = `{${service.icon}}`
            return (
              <FeatureGrid
                key={service.number}
                title={service.service}
                text={service.shortDescription}
                aligned='center'
              >
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src={service.imageSrc}
                  alt={service.imageAlt}
                />
              </FeatureGrid>
            )
          })}
        </SimpleGrid>
        <CTA
          SectionTitle={'Ready to start that project?'}
          SectionTag={'Book a quote now!'}
          SectionText={
            'Speak to our friendly and highly courtious sales team and get closer to your dream space'
          }
          ButtonLabel={'Book A Quote'}
          ButtonLink='/contact'
        />
      </>
    )
  }
  