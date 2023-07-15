import { Box, Container, MantineTheme, Sx } from "@mantine/core";
import { CSSProperties, ReactNode } from "react";



// TYPES
export type BaseSectionProps = {
  children: ReactNode;

  /** The height of this section */
  height?: string | number;
  /** Whether this section should grow to the height of its parent elements. Will override the `height` attribute */
  grow?: boolean;
  /** The gap between elements within this section */
  gap?: number;

  /** Any optional styles to override */
  style?: CSSProperties;
}

export type SectionPageProps = BaseSectionProps & {
  /** Horizontal padding */
  paddingH?: string | number;
  /** Vertical padding */
  paddingV?: string | number;

  /** Background color */
  backgroundColor?: string;
  /** Opacity of the background color */
  backgroundOpacity?: string;
  /** Any optional styles to override on the background */
  backgroundStyle?: CSSProperties;
}



// COMPONENTS
/** An element used to define a "page section", or a horizontal ribbon of grouped content. */
export function SectionPage(props: SectionPageProps) {

  // Styles
  const backgroundStyle: Sx = (theme: MantineTheme) => ({
    backgroundColor: props.backgroundColor ? `${theme.colors[props.backgroundColor][4]
      }${props.backgroundOpacity ? props.backgroundOpacity : "FF"
      }` : null,

    padding: `${props.paddingV !== undefined ? props.paddingV : 20
      }px ${props.paddingH !== undefined ? props.paddingH : 0
      }px`
  });
  const containerStyle: Sx = (theme: MantineTheme) => ({
    height: props.grow ? "100vh" :
      props.height !== undefined ? props.height : "auto",
    padding: theme.spacing.md,
    gap: props.gap !== undefined ? props.gap : theme.spacing.md,
    boxSizing: "border-box",
    flex: 1,

    display: "flex",
    flexDirection: "column",
    justifyContent: props.grow ? "center" : "",

    position: "relative",
  });

  return (
    <Box
      sx={backgroundStyle}
      style={props.backgroundStyle}
    >
      <Container
        size="md"
        px="sm"
        sx={containerStyle}
        style={props.style}
      >
        {props.children}
      </Container>
    </Box>
  )
}