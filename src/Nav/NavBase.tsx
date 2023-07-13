import { ReactNode } from "react";
import { useViewportSize, useWindowScroll, useDisclosure } from "@mantine/hooks";
import { MOBILE_BREAKPOINT } from "../Layout/Layout";
import { MantineTheme, Sx, Box, Container, Group, UnstyledButton, Image, Burger } from "@mantine/core";
import { NavMobile } from "./NavMobile";
import { ButtonBase, ButtonVariant, T_ComponentSize, Text } from "phosphorus-core";



// TYPES
export type BaseNavProps = {
  /** A list of all buttons to display in this Navbar */
  buttons: ReactNode[];

  /** The favicon for this Navbar */
  favicon: string;
  /** An `onClick` event for when the user clicks on the favicon */
  faviconClick?: void;

  /** An optional typeface to show */
  typeface?: string;
  typefaceFamily?: string;

  /** The gap between components */
  gap?: T_ComponentSize | number | string;
}

export type NavBaseProps = BaseNavProps & {
  /** Whether to hide the typeface on mobile devices */
  hideTypefaceMobile?: boolean;

  /** Information about either the background color or image */
  background?: string;
  /** Whether to only show the background after the user has scrolled past the page top */
  backgroundOnScroll?: boolean;

  /** The side of the screen where the nav will be opened from. Defaults to `left` */
  mobileNavPosition?: "bottom" | "left" | "right" | "top";
}



// COMPONENTS
/** A basic Nav that has support for desktop and mobile nav variants, automatically adapting according to the breakpoint. */
export function NavBase(props: NavBaseProps) {

  // Hooks
  const { width } = useViewportSize();
  const isMobile = width < MOBILE_BREAKPOINT;
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 0;

  // States
  const [opened, { open, close }] = useDisclosure(false);

  // Styles
  const backgroundStyle: Sx = (theme: MantineTheme) => ({
    background: !props.backgroundOnScroll ? props.background || null :
      isScrolled ? props.background || null : null,
    backgroundColor: !props.backgroundOnScroll ? props.background || theme.white :
      isScrolled ? props.background || theme.white : null,
    boxShadow: !props.backgroundOnScroll || isScrolled ? `0px 10px 30px 0px rgba(0,0,0,0.2)` : null,
    position: "fixed",
    zIndex: 999,
    top: 0,
    left: 0,
    width: "100vw",
  });
  const containerStyle: Sx = (theme: MantineTheme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
  });
  const buttonContainerStyle: Sx = (theme: MantineTheme) => ({
    gap: props.gap || theme.spacing.sm,
  });
  const buttonDrawerStyle: Sx = (theme: MantineTheme) => ({
    gap: props.gap || theme.spacing.sm,
    width: "100%",
    height: "100%",

    display: "flex",
  });

  return (
    <>
      {/* Mobile nav */}
      <NavMobile
        opened={opened}
        onClose={close}
        {...props}
      />

      {/* General nav */}
      <Box sx={backgroundStyle}>
        <Container
          size="md"
          px="sm"
          sx={containerStyle}
        >
          {/* Favicon & typeface */}
          <UnstyledButton
            onClick={() => props.faviconClick}
          >
            <Group>
              <Image
                src={props.favicon}
                height={25}
                width="auto"
              />

              {isMobile && props.hideTypefaceMobile || !props.typeface ? null :
                <Text
                  family={props.typefaceFamily}
                  weight={800}
                >
                  {props.typeface}
                </Text>
              }
            </Group>
          </UnstyledButton>

          {/* Buttons */}
          {isMobile ?
            <ButtonBase
              onClick={opened ? close : open}
              square
              component="div"
              variant={ButtonVariant.Subtle}
            >
              <Burger
                opened={opened}
              />
            </ButtonBase>
            :
            <Group sx={buttonContainerStyle}>
              {props.buttons}
            </Group>
          }
        </Container>
      </Box>
    </>
  )
}