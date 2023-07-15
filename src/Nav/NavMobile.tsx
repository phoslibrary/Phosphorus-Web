import { Container, Drawer, Image, UnstyledButton, Sx, MantineTheme, Burger, Space, Stack } from "@mantine/core";
import { BaseNavProps } from "./NavBase";
import { ButtonBase, ButtonVariant, Text } from "phosphorus-core";



// TYPES
export type NavMobileProps = BaseNavProps & {
  /** Determines whether the nav is opened */
  opened: boolean;
  /** Called when the nav is closed */
  onClose: () => void;

  /** The side of the screen where the nav will be opened from. Defaults to `left` */
  position?: "bottom" | "left" | "right" | "top";
}



// COMPONENTS
/** A nav drawer for mobile devices. This is included by default in the `NavBase` component. */
export function NavMobile(props: NavMobileProps) {

  // Styles
  const containerStyle: Sx = (theme: MantineTheme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
  });
  const buttonDrawerStyle: Sx = (theme: MantineTheme) => ({
    gap: props.gap || theme.spacing.sm,
    width: "100%",
    height: "100%",

    display: "flex",
  });


  return (
    <Drawer
      opened={props.opened}
      onClose={props.onClose}
      position={props.position}
      withCloseButton={false}
      zIndex={9999}
    >
      <Container
        size="md"
        px="sm"
        sx={containerStyle}
      >
        <UnstyledButton
          onClick={() => props.faviconClick}
        >
          <Image
            src={props.favicon}
            height={25}
            width="auto"
          />
        </UnstyledButton>

        <ButtonBase
          onClick={props.opened ? close : open}
          square
          component="div"
          variant={ButtonVariant.Subtle}
        >
          <Burger
            opened={props.opened}
          />
        </ButtonBase>
      </Container>

      <Text
        family={props.typefaceFamily}
        weight={800}
        size={35}
      >
        {props.typeface}
      </Text>

      <Space h={40} />

      <Stack
        sx={buttonDrawerStyle}
      >
        {props.buttons}
      </Stack>
    </Drawer>
  )
}