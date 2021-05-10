import { Stack, Flex, Text, Container } from '@chakra-ui/react'
import { ReactChild } from 'react'

interface FeatureGridProps {
  title: string
  text: string
  children?: ReactChild
  aligned?: string
}

const FeatureGrid = ({
  title,
  text,
  children,
  aligned = 'center',
}: FeatureGridProps) => {
  return (
    <Stack align={{ aligned }}>
      <Container align={'center'}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          textAlign={'center'}
          rounded={'full'}
          bg={'#ffde59'}
          mb={1}
        >
          {children}
        </Flex>
      </Container>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default FeatureGrid
