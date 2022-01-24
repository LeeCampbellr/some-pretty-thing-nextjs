import styled from "styled-components"

export const Section = styled.section`
  align-items: center;
  background-color: ${(props) => (props.bg ? "var(--red20)" : "transparent")};
  border-bottom: ${(props) => (props.border ? "var(--borderBase)" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyStart
      ? "flex-start"
      : props.justifyCenter
      ? "center"
      : props.justifyEnd
      ? "flex-end"
      : props.spaceBetween
      ? "space-between"
      : props.spaceAround
      ? "space-around"
      : "initial"};
  margin: 0 auto;
  padding: ${(props) => (props.full ? "0" : "var(--spacingSection)")};
  padding-bottom: ${(props) =>
    props.xs
      ? "var(--spacingXsmall)"
      : props.sm
      ? "var(--spacingSmall)"
      : props.md
      ? "var(--spacingMedium)"
      : props.mg
      ? "var(--spacingMarge)"
      : props.lg
      ? "var(--spacingLarge)"
      : props.xl
      ? "var(--spacingXLarge)"
      : props.xxl
      ? "var(--spacingXXLarge)"
      : "0"};
  padding-top: ${(props) =>
    props.xsTop
      ? "var(--spacingXsmall)"
      : props.smTop
      ? "var(--spacingSmall)"
      : props.mdTop
      ? "var(--spacingMedium)"
      : props.mgTop
      ? "var(--spacingMarge)"
      : props.lgTop
      ? "var(--spacingLarge)"
      : props.xlTop
      ? "var(--spacingXLarge)"
      : props.xxlTop
      ? "var(--spacingXXLarge)"
      : "0"};
  position: relative;
  width: 100%;
`

export const Container = styled.div`
  align-items: ${(props) =>
    props.alignAround
      ? "space-around"
      : props.alignBetween
      ? "space-between"
      : props.alignCenter
      ? "center"
      : props.flex && props.alignStart
      ? "flex-start"
      : props.grid && props.alignStart
      ? "start"
      : props.flex && props.alignEnd
      ? "flex-end"
      : props.grid && props.alignEnd
      ? "end"
      : props.align === "top"
      ? "start"
      : props.align === "center"
      ? "center"
      : props.align === "bottom"
      ? "end"
      : "initial"};
  background-color: ${(props) => (props.bg ? "var(--red20)" : "transparent")};
  display: ${(props) =>
    props.grid
      ? "grid"
      : props.flex
      ? "flex"
      : props.block
      ? "block"
      : "initial"};
  direction: ${(props) =>
    props.layout === "imageLeft"
      ? "ltr"
      : props.layout === "imageRight"
      ? "rtl"
      : "ltr"};
  ${(props) => props.grid && "gap: var(--spacingGutter);"}
  ${(props) => props.flexColumn && "flex-direction: column;"}
  grid-template-columns: ${(props) =>
    props.grid && props.gridTwo
      ? "var(--gridTwo)"
      : props.grid && props.gridThree
      ? "var(--gridThree)"
      : props.grid && props.gridFour
      ? "var(--gridFour)"
      : props.grid && props.gridBrand
      ? "var(--gridBrand)"
      : props.grid && props.gridInsta
      ? "var(--gridInsta)"
      : "1fr"};
  justify-content: ${(props) =>
    props.justifyStart && props.flex
      ? "flex-start"
      : props.justifyStart && props.grid
      ? "start"
      : props.justifyCenter
      ? "center"
      : props.justifyEnd && props.flex
      ? "flex-end"
      : props.justifyEnd && props.grid
      ? "end"
      : props.spaceBetween
      ? "space-between"
      : props.spaceAround
      ? "space-around"
      : "initial"};
  margin: 0 auto;
  max-width: ${(props) =>
    props.containerXSmall
      ? "var(--containerXSmall)"
      : props.containerSmall
      ? "var(--containerSmall)"
      : props.containerMedium
      ? "var(--containerMedium)"
      : props.containerLarge
      ? "var(--containerLarge)"
      : props.containerXLarge
      ? "var(--containerXLarge)"
      : "initial"};
  position: relative;
  padding: ${(props) => (props.section ? "var(--spacingSection)" : "0")};
  padding-bottom: ${(props) =>
    props.xs
      ? "var(--spacingXsmall)"
      : props.sm
      ? "var(--spacingSmall)"
      : props.md
      ? "var(--spacingMedium)"
      : props.mg
      ? "var(--spacingMarge)"
      : props.lg
      ? "var(--spacingLarge)"
      : props.xl
      ? "var(--spacingXLarge)"
      : props.xxl
      ? "var(--spacingXXLarge)"
      : "0"};
  padding-top: ${(props) =>
    props.xsTop
      ? "var(--spacingXsmall)"
      : props.smTop
      ? "var(--spacingSmall)"
      : props.mdTop
      ? "var(--spacingMedium)"
      : props.mgTop
      ? "var(--spacingMarge)"
      : props.lgTop
      ? "var(--spacingLarge)"
      : props.xlTop
      ? "var(--spacingXLarge)"
      : props.xxlTop
      ? "var(--spacingXXLarge)"
      : "0"};
  width: 100%;

  * {
    direction: ltr;
  }
`

export const Content = styled.div`
  align-self: ${(props) =>
    props.alignStart
      ? "start"
      : props.alignCenter
      ? "center"
      : props.alignEnd
      ? "end"
      : "initial"};
  display: flex;
  flex-direction: column;
  justify-self: ${(props) =>
    props.justifyStart
      ? "start"
      : props.justifyCenter
      ? "center"
      : props.justifyEnd
      ? "end"
      : "initial"};
  position: relative;
  text-align: ${(props) =>
    props.textCenter
      ? "center"
      : props.textRight
      ? "right"
      : props.textLeft
      ? "left"
      : "left"};
`

export const Image = styled.div`
  img {
    margin: 0 auto;
    max-width: 100%;
    width: ${(props) =>
      props.size === "small"
        ? "50%"
        : props.size === "medium"
        ? "75%"
        : props.size === "large"
        ? "90%"
        : props.size === "fullWidth"
        ? "100%"
        : "100%"};
  }
`

export const Video = styled.div`
  video {
    margin: 0 auto;
    max-width: 100%;
    width: ${(props) =>
      props.size === "small"
        ? "50%"
        : props.size === "medium"
        ? "75%"
        : props.size === "large"
        ? "90%"
        : props.size === "fullWidth"
        ? "100%"
        : "100%"};
  }
`
