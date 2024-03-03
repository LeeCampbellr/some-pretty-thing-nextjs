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
        homeHeaderLayout
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

export default HOME_QUERY;
