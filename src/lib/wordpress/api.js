// get the first 20 posts
export const ALL_POSTS = `query AllPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        date
        id
        excerpt(format: RAW)
        slug
        title
      }
    }
  }`;

// get all the slugs for static paths / generation
export const GET_ALL_POSTS_SLUGS = `
{
  posts(first: 10000){
    nodes{
      slug
    }
  }
}`;

// single post by slug to display single post page to user
export const SINGLE_POST_BY_SLUG = `
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    content
  }
}
`;
