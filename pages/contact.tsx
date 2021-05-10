import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout'
import {
  Flex,
  IconButton,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react'
import React from 'react'
import {
  FaFacebook,
  FaGlobe,
  FaHammer,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import Layout from './components/layout'
import HubspotForm from 'react-hubspot-form'
import Loading from './components/loading'

const Contact = () => {
  return (
    <Layout title='Contact Us' heroHeading='Get In Touch'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        bg={'white'}
        px={8}
        py={10}
        mx='auto'
      >
        <Box
          w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
          mx='auto'
          pr={{ md: 20 }}
        >
          <HubspotForm
            portalId='19618721'
            formId='180d4297-b455-4f1b-a60f-bcc9dd81cdd3'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<Loading />}
          />
        </Box>
        <Center
          w={{ base: 'full', md: 10 / 12 }}
          mx='auto'
          textAlign='center'
          justifyContent='center'
        >
          <Box>
            <Stack pb={4}>
              <Heading>Ways to get in touch</Heading>
              <Text>
                If you have an enquiry, please contact us by phone, email or
                post. Alternatively, you can fill out the form on the left.
                Thank you for visiting{' '}
                <strong>Lawfully White Construction Ltd</strong>.
              </Text>
              <Text>
                <strong>Email</strong> us at{' '}
                <a>construction@lawfullywhite.com</a>
              </Text>
              <Text>
                <strong>Call</strong> us on 03334049380
              </Text>
            </Stack>
            <Heading align='center' pb={4}>
              Our Socials
            </Heading>
            <Wrap justify='center' align='center' spacing={10} pb={4}>
              <WrapItem>
                <IconButton
                  variant='outline'
                  colorScheme='black'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<FaFacebook />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant='outline'
                  colorScheme='black'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<FaLinkedin />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant='outline'
                  colorScheme='black'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<FaTwitter />}
                />
              </WrapItem>
            </Wrap>
            <Image
              w='full'
              rounded='lg'
              shadow='2xl'
              src='https://kutty.netlify.app/hero.jpg'
              alt='Hellonext feedback boards software screenshot'
              mt={4}
            />
            <Heading py={4} mt={4}>Keywords</Heading>
            <Wrap spacing={4} justify='center' align='center'>
              <Text>
                <strong>Services:</strong>
              </Text>
              {[
                'Builders',
                'Construction',
                'Plasterer',
                'Roofer',
                'Bricklayer',
              ].map((label) => (
                <WrapItem>
                  <Tag
                    size='md'
                    key={label}
                    variant='subtle'
                    colorScheme='black'
                  >
                    <TagLeftIcon boxSize='12px' as={FaHammer} />
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
              <Text>
                <strong>Areas:</strong>
              </Text>
              {[
                'Birmingham',
                'Dudley',
                'Walsall',
                'Wolverhampton',
                'Willenhall',
                'Wednesbury',
                'West Midlands',
              ].map((label) => (
                <WrapItem>
                  <Tag
                    size='md'
                    key={label}
                    variant='subtle'
                    colorScheme='black'
                  >
                    <TagLeftIcon boxSize='12px' as={FaGlobe} />
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Center>
      </Flex>
    </Layout>
  )
}

export default Contact