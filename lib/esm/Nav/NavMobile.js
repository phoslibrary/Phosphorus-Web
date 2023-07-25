import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Drawer, Image, Burger, Space, Stack } from "@mantine/core";
import { ButtonBase, ButtonVariant, Text } from "phosphorus-core";
// COMPONENTS
/** A nav drawer for mobile devices. This is included by default in the `NavBase` component. */
export function NavMobile(props) {
    // Styles
    const containerStyle = (theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing.md,
    });
    const buttonDrawerStyle = (theme) => ({
        gap: props.gap || theme.spacing.sm,
        width: "100%",
        height: "100%",
        display: "flex",
    });
    return (_jsxs(Drawer, { opened: props.opened, onClose: () => props.onClose(), position: props.position, withCloseButton: false, zIndex: 9999, children: [_jsxs(Container, { size: "md", px: "sm", sx: containerStyle, children: [_jsx(ButtonBase, Object.assign({ square: true, style: Object.assign({ backgroundColor: "#FFFFFF00" }, props.faviconButtonProps.style) }, props.faviconButtonProps, { onClick: props.faviconButtonProps.onClick ? props.faviconButtonProps.onClick : () => props.onClose(), children: _jsx(Image, { src: props.favicon, height: 25, width: "auto" }) })), _jsx(ButtonBase, { onClick: () => props.onClose(), square: true, component: "div", variant: ButtonVariant.Subtle, children: _jsx(Burger, { opened: props.opened }) })] }), _jsx(Text, { family: props.typefaceFamily, weight: 800, size: 35, children: props.typeface }), _jsx(Space, { h: 40 }), _jsx(Stack, { sx: buttonDrawerStyle, onClick: () => props.onClose(), children: props.buttons })] }));
}
