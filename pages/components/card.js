

// Sample card from Airbnb

import { Badge, Box } from "@chakra-ui/layout"
import Link from "next/link"




function Card({title, paragraph, href, badge='New Post'}) {
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  d="flex" alignItems="baseline">
        <Box p="6">
          
          <a href={href}>
                <Badge borderRadius="full" px="2" colorScheme="teal">
              {badge}
                </Badge>
                </a>
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