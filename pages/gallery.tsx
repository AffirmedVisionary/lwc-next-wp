import { Image } from '@chakra-ui/image'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import photos from '../lib/data/galleryImages.json'
import Layout from './components/layout'

const heroButtons = [
  {
    id: 1,
    label: 'Add to the Gallery',
    href: '/contact',
  },
]

const Gallery = () => {
  return (
    <Layout title={'Reviews'} heroButtons={heroButtons} heroHeading='Our Reviews'>
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
      </Layout>
  )
}

export default Gallery
