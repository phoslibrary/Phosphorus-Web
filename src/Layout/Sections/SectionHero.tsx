import { BackgroundImage, MantineGradient, MantineTheme, Sx } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { BaseSectionProps, SectionPage } from "./SectionPage";
import { BreakpointVariant, GetBreakpointValue } from "../Layout";
import { CSSProperties } from "react";



// TYPES
export type SectionHeroProps = BaseSectionProps & {
  /** A background image or gradient to apply */
  backgroundImage?: string;
  /** The position of the background image relative to the page */
  backgroundPosition?: BreakpointVariant<string>;
  /** A vector clipping path to apply over the background image */
  clipPath?: BreakpointVariant<string>;

  /** A gradient overlay to apply over the background image*/
  overlay?: BreakpointVariant<MantineGradient>;
  /** Optional styles to override the background overlay */
  overlayStyle?: CSSProperties;
}



// COMPONENTS
/** A hero section of a page, often situated at the top with a large image as the background */
export function SectionHero(props: SectionHeroProps) {

  // Hooks
  const viewportSize = useViewportSize();

  // Variables
  let bgOverlay = null;
  if (props.overlay) {
    let gradient = GetBreakpointValue(props.overlay, viewportSize);
    bgOverlay = `linear-gradient(${gradient.deg !== undefined ? gradient.deg : 45}deg, ${gradient.from}, ${gradient.to})`;
  }

  // Styles
  const bgStyle: Sx = (theme: MantineTheme) => ({
    maxWidth: "100vw",
    height: props.grow ? "100%" :
      props.height !== undefined ? props.height : "100vh",
    position: "absolute",
    zIndex: -2,

    clipPath: GetBreakpointValue(props.clipPath, viewportSize),
    backgroundPosition: GetBreakpointValue(props.backgroundPosition, viewportSize) || "center",
  });
  const overlayStyle: Sx = (theme: MantineTheme) => ({
    maxWidth: "100vw",
    height: props.grow ? "100%" :
      props.height !== undefined ? props.height : "100vh",
    position: "absolute",
    zIndex: -1,

    backgroundImage: bgOverlay,
  });

  return (
    <>
      <BackgroundImage
        src={props.backgroundImage}
        sx={bgStyle}
        style={props.style}
      />
      <BackgroundImage
        src={null}
        sx={overlayStyle}
        style={props.overlayStyle}
      />
      <SectionPage
        grow
        gap={props.gap}
      >
        {props.children}
      </SectionPage>
    </>
  )
}