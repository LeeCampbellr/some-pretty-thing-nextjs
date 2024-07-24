const HOME_QUERY = `
 query HomePage {
    home: entry(slug: "home") {
      ... on home_home_Entry {
        id
        slug
        title
        metaTags {
          title
        }
        metaImage {
          url
        }
        metaDescription
        popularPosts {
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
    }
    featuredPost: entry(sectionId: "10") {
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
    recentPosts: entries(sectionId: "10") {
      ... on posts_post_Entry {
        id
        title
        slug
      }
    }
  }
`;

export default HOME_QUERY;
