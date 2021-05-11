import images from '../lib/data/galleryImages.json'
import Layout from './components/layout'
import GalleryComponent from './components/gallery'

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
      <GalleryComponent pictures={images}/>
      </Layout>
  )
}

export default Gallery
