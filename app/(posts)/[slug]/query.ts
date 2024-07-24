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
          title
          slug
          postDate
          metaDescription
          scripts
          metaTags {
            title
          }
          metaImage {
            url
          }
          featuredImage {
            blurhashUri: url @assetToBlurHash
            url
            width
            title
            height
          }
          categories {
            title
            slug
          }
          postContent {

          }
        }
      }



      postContent: entry(slug: $slug) {
        ... on posts_post_Entry {
          postContent {
            ...brandBlock
            ...contentCenter
            ...contentIntroIndex
            ...contentIntroShop
            ...contentIntroSponsored
            ...contentSplit
            ...contentSplitImage
            ...iframe
            ...image
            ...imageGallery
            ...imageSplit
            ...quote
            ...widget
          }
        }
      }
    }
    ${FRAGMENT_POST_BRAND_BLOCK},
    ${FRAGMENT_POST_CONTENT_CENTER},
    ${FRAGMENT_POST_CONTENT_INTRO_INDEX},
    ${FRAGMENT_POST_CONTENT_INTRO_SHOP},
    ${FRAGMENT_POST_CONTENT_INTRO_SPONSORED},
    ${FRAGMENT_POST_CONTENT_SPLIT},
    ${FRAGMENT_POST_CONTENT_SPLIT_IMAGE},
    ${FRAGMENT_POST_IFRAME},
    ${FRAGMENT_POST_IMAGE},
    ${FRAGMENT_POST_IMAGE_GALLERY},
    ${FRAGMENT_POST_IMAGE_SPLIT},
    ${FRAGMENT_POST_WIDGET},
    ${FRAGMENT_POST_QUOTE},
  `;
