import { Heading } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React from 'react'

const Loading = () => {
  return (
    <>
      <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
          />
          <Heading as='h3'>Loading...</Heading>
    </>
  )
}

export default Loading
