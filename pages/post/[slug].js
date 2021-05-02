import fetcher from '../../lib/fetcher'
import {GET_ALL_POSTS_SLUGS, SINGLE_POST_BY_SLUG} from '../../lib/wordpress/api'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Loading from '../components/loading'
import { Box } from '@chakra-ui/layout';
import { render } from 'react-dom'

const post = ({postData}) => {
    const blogPost = postData.data.post
  const router = useRouter();
  const cover = (!blogPost.featuredImage ? "https://res.cloudinary.com/charlenegrant/image/upload/v1619918838/lawfullywhite-assets/tools-middle_m9egrh.png" : blogPost.featuredImage.node.sourceUrl)
  const heroButtons = [
    {
      id: 1,
      label: 'Read more...',
      href: `/post/${blogPost.slug}#post`,
    },
    {
      id: 2,
      label: 'Back to Blog',
      href: '/blog',
    },
  ]

    if (!router.isFallback && !blogPost?.slug) {
      return <ErrorPage statusCode={404} />;
    }
    return (
      <div>
        {router.isFallback ? (
          <>
          <PostTitle>Loading…</PostTitle>
            <Loading />
            </>
            ) : (
            <Layout title={blogPost.title} heroImg={cover} heroIntro={' Enjoy what you read? start the conversation, leave a comment... '} heroButtons={heroButtons}>
              <Box id='post' style={{minHeight: '100vh'}}>
                <Box dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                </Box>
            </Layout>
        )}
      </div>
    );
  };

export default post

export async function getStaticPaths() {
    const response = await fetcher(GET_ALL_POSTS_SLUGS)
    const allPosts = await response.data.posts.nodes

    return {
        paths: allPosts.map((post) => `/post/${post.slug}`) || [],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const variables = {
        id: params.slug,
        idType: "SLUG"
    }

    const data = await fetcher(SINGLE_POST_BY_SLUG, { variables })
    return {
        props: {
            postData: data
        }
    }
}