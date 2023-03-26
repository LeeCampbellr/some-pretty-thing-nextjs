import { gql } from "graphql-request"

export const FRAGMENT_POST_BRAND_BLOCK = gql`
  fragment brandBlock on postContent_brandBlock_BlockType {
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
`

export const FRAGMENT_POST_CONTENT_CENTER = gql`
  fragment contentCenter on postContent_contentCenter_BlockType {
    typeHandle
    id
    paragraph
    sectionId
  }
`

export const FRAGMENT_POST_CONTENT_INTRO_INDEX = gql`
  fragment contentIntroIndex on postContent_contentIntroIndex_BlockType {
    typeHandle
    id
    paragraph
    sections {
      title
      sectionId
    }
  }
`

export const FRAGMENT_POST_CONTENT_INTRO_SHOP = gql`
  fragment contentIntroShop on postContent_contentIntroShop_BlockType {
    typeHandle
    id
    paragraph
    sectionId
    shopIndex {
      itemTitle
      link
    }
  }
`

export const FRAGMENT_POST_CONTENT_INTRO_SPONSORED = gql`
  fragment contentIntroSponsored on postContent_contentIntroSponsored_BlockType {
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
`
export const FRAGMENT_POST_CONTENT_SPLIT = gql`
  fragment contentSplit on postContent_contentSplit_BlockType {
    typeHandle
    id
    paragraphRight
    paragraphLeft
    sectionId
  }
`

export const FRAGMENT_POST_CONTENT_SPLIT_IMAGE = gql`
  fragment contentSplitImage on postContent_contentSplitImage_BlockType {
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
`

export const FRAGMENT_POST_IFRAME = gql`
  fragment iframe on postContent_iframe_BlockType {
    typeHandle
    id
    embed
  }
`

export const FRAGMENT_POST_IMAGE = gql`
  fragment image on postContent_image_BlockType {
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
`

export const FRAGMENT_POST_IMAGE_GALLERY = gql`
  fragment imageGallery on postContent_imageGallery_BlockType {
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
`

export const FRAGMENT_POST_IMAGE_SPLIT = gql`
  fragment imageSplit on postContent_imageSplit_BlockType {
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
`

export const FRAGMENT_POST_QUOTE = gql`
  fragment quote on postContent_quote_BlockType {
    typeHandle
    id
    sectionId
    quote
  }
`

export const FRAGMENT_POST_WIDGET = gql`
  fragment widget on postContent_widget_BlockType {
    typeHandle
    id
    embed
  }
`
