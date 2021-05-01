

// Sample card from Airbnb

import { Badge, Box } from "@chakra-ui/layout"




function Card({title, paragraph, href, badge='New Post'}) {
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  href={href} d="flex" alignItems="baseline">
            <Box p="6">
                <Badge borderRadius="full" px="2" colorScheme="teal">
              {badge}
                </Badge>
                
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {title}
                </Box>
                </Box>
                
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {paragraph}
                </Box>
                 
      </Box>
    )
}
  
export default Card