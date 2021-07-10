import { useRouter } from "next/router";
import {
  chakra,
  Box,
  useColorModeValue,
  Link,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import fetcher from "../lib/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import Layout from "../components/layout";

const blog = ({ allPosts }) => {
  const posts = allPosts;
  return (
    <Layout title="The Blog">
      <main className="main">
        <SimpleGrid columns={3} spacing={10}>
          {posts.map((post, index) => {
            const router = useRouter();
            const cover = !post.featuredImage
              ? "https://res.cloudinary.com/charlenegrant/image/upload/v1619918838/lawfullywhite-assets/tools-middle_m9egrh.png"
              : post.featuredImage.node.sourceUrl;
            return (
              <Center
                key={index}
                height="300px"
                bg={useColorModeValue("white", "gray.800")}
                mx={{ lg: 8 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                shadow={{ lg: "lg" }}
                rounded={{ lg: "lg" }}
                bgSize="cover"
                backgroundImage={`url(${cover})`}
                bgPos="center"
              >
                <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }}>
                  <chakra.h2
                    textAlign="center"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                    noOfLines={2}
                  >
                    {post.title}
                  </chakra.h2>

                  <Box mt={8} textAlign="center">
                    <Link
                      onClick={(e) => {
                        e.preventDefault(), router.push(`/post/${post.slug}`);
                      }}
                      bg="gray.900"
                      color="gray.100"
                      px={5}
                      py={3}
                      fontWeight="semibold"
                      rounded="lg"
                      _hover={{ bg: "gray.800" }}
                    >
                      Read Now
                    </Link>
                  </Box>
                </Box>
              </Center>
            );
          })}
        </SimpleGrid>
      </main>
    </Layout>
  );
};

export default blog;

export async function getStaticProps() {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;

  return {
    props: { allPosts },
    revalidate: 1,
  };
}
