import fetcher from '../../lib/fetcher'
import {GET_ALL_POSTS_SLUGS, SINGLE_POST_BY_SLUG} from '../../lib/wordpress/api'
import { useRouter } from 'next/router'

const post = ({postData}) => {
    const blogPost = postData.data.post
    const router = useRouter();
    if (!router.isFallback && !blogPost?.slug) {
      return <ErrorPage statusCode={404} />;
    }
    return (
      <div>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
            ) : (
                    <>
                    <h1>{blogPost.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                        </>
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