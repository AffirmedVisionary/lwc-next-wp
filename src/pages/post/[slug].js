import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import fetcher from "../../lib/fetcher";
import {
  GET_ALL_POSTS_SLUGS,
  SINGLE_POST_BY_SLUG,
} from "../../lib/wordpress/api";
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import Hero from "../../components/hero";

const post = ({ postData }) => {
  const blogPost = postData.data.post;
  const router = useRouter();
  const cover = !blogPost.featuredImage
    ? "https://res.cloudinary.com/charlenegrant/image/upload/v1619918838/lawfullywhite-assets/tools-middle_m9egrh.png"
    : blogPost.featuredImage.node.sourceUrl;
  const heroButtons = [
    {
      id: 1,
      label: "Read more...",
      href: `/post/${blogPost.slug}#post`,
    },
    {
      id: 2,
      label: "Back to Blog",
      href: "/blog",
    },
  ];

  if (!router.isFallback && !blogPost?.slug) {
    return (
      <Hero
        statusCode={404}
        heroHeading="You have found a missing brick"
        label="Go Back Home"
      />
    );
  }
  return (
    <div>
      {router.isFallback ? (
        <>
          <Heading>Loading…</Heading>
          <Loading />
        </>
      ) : (
        <Layout
          title={blogPost.title}
          heroImg={cover}
          heroIntro={
            " Enjoy what you read? start the conversation, leave a comment... "
          }
          heroButtons={heroButtons}
        >
          <Box id="post" style={{ minHeight: "100vh" }}>
            <Box dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </Box>
        </Layout>
      )}
    </div>
  );
};

export default post;

export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_POSTS_SLUGS);
  const allPosts = await response.data.posts.nodes;

  return {
    paths: allPosts.map((post) => `/post/${post.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: "SLUG",
  };

  const data = await fetcher(SINGLE_POST_BY_SLUG, { variables });
  return {
    props: {
      postData: data,
    },
  };
}
