import { Center } from '@chakra-ui/react'
import { Text, Box, Link } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/color-mode'


const FourohFour = (statusCode) => {
    const router = useRouter()
const handleClick = () => {
        router.push("/")
    }
    return (
        <Center className="titleWrapper">
            <Text className="textStyle">
                Error: 404 | You have found a missing page!
            </Text>
            <Box rounded='full' shadow='md'>
                          <Link
                            onClick={() => router.push('/')}
                            w='full'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            border='solid 1px transparent'
                            fontSize={{ base: 'md', md: 'lg' }}
                            rounded='md'
                            color={useColorModeValue('white', 'black')}
                            bg={useColorModeValue('black', 'white')}
                            _hover={{
                              color: useColorModeValue('black', 'white'),
                              bg: useColorModeValue('#ffde59', 'black'),
                            }}
                            px={{ base: 8, md: 10 }}
                            py={{ base: 3, md: 4 }}
                          >
                            Go Back Home
                          </Link>
                        </Box>
            <div className="buttonWrapper">
            <button onClick={handleClick} className="nextButton">
                Go Back Home
            </button>
            </div>
        </Center>
    )
}
export default FourohFour;