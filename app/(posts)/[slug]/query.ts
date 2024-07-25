export interface PostProps {
  post: {
    id: string;
    title: string;
    slug: string;
  };
}

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
            ... on postContent_brandBlock_BlockType {
              typeHandle
              id
              brand {
                ... on brand_BlockType {
                  id
                  image {
                    url
                    width
                    height
                  }
                  linkUrl
                }
              }
            }
            ... on postContent_contentCenter_BlockType {
              typeHandle
              id
              paragraph
              sectionId
            }
            ... on postContent_contentIntroIndex_BlockType {
              typeHandle
              id
              paragraph
              sections {
                title
                sectionId
              }
            }
            ... on postContent_contentIntroShop_BlockType {
              typeHandle
              id
              paragraph
              sectionId
              shopIndex {
                itemTitle
                link
              }
            }
            ... on postContent_contentIntroSponsored_BlockType {
              typeHandle
              id
              paragraph
              sectionId
              sponsoredContent
              sponsoredLogo {
                title
                url
                width
                height
              }
            }
            ... on postContent_contentSplit_BlockType {
              typeHandle
              id
              paragraphRight
              paragraphLeft
              sectionId
            }
            ... on postContent_contentSplitImage_BlockType {
              alignment
              id
              imageSize
              image {
                title
                url
                kind
                width
                height
              }
              layout
              paragraph
              sectionId
              typeHandle
            }
            ... on postContent_iframe_BlockType {
              typeHandle
              id
              embed
            }
            ... on postContent_image_BlockType {
              id
              image {
                title
                url
                kind
                width
                height
              }
              imageSize
              sectionId
              typeHandle
            }
            ... on postContent_imageGallery_BlockType {
              typeHandle
              id
              alignment
              gallery {
                title
                url
                kind
                width
                height
              }
              sectionId
            }
            ... on postContent_imageSplit_BlockType {
              alignment
              id
              imageLeft {
                url
                title
                kind
                width
                height
              }
              imageLeftSize
              imageRight {
                url
                title
                kind
                width
                height
              }
              imageRightSize
              sectionId
              typeHandle
            }
            ... on postContent_quote_BlockType {
              typeHandle
              id
              sectionId
              quote
            }
            ...  on postContent_widget_BlockType {
              typeHandle
              id
              embed
            }
          }
        }
      }
    }
  `;
