import { Image } from '@chakra-ui/image'
import { Wrap, WrapItem } from '@chakra-ui/layout'

const GalleryComponent = (photos) => {
    return (
        <Wrap justify="center" align='center'>
            {photos.map((photo) => {
                return (
              <WrapItem>
          <Image
            boxSize={photo.boxSize}
            src={photo.src}
            alt={photo.alt}
            fallbackSrc='https://via.placeholder.com/300'
          />
        </WrapItem> )
            })}
        </Wrap>
    )
  }
  
  export default GalleryComponent
  