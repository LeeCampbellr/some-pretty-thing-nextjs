export const ALL_POSTS_QUERY = `
  query Posts {
    entries(sectionId: "10") {
      ... on posts_post_Entry {
        id
        title
        slug
      }
    }
  }
`;

export const POST_QUERY = `
  query Post($slug: [String]) {
    entry(slug: $slug) {
      ... on posts_post_Entry {
        id
        title
        slug
        postDate
        excerpt
        categories {
          title
          slug
        }
        featuredImage {
          blurhashUri: url @assetToBlurHash
          url
          title
          width
          height
        }
      }
    }
  }
`;
