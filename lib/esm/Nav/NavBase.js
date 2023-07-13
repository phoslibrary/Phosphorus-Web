import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useViewportSize, useWindowScroll, useDisclosure } from "@mantine/hooks";
import { MOBILE_BREAKPOINT } from "../Layout/Layout";
import { Box, Container, Group, UnstyledButton, Image, Burger } from "@mantine/core";
import { NavMobile } from "./NavMobile";
import { ButtonBase, ButtonVariant, Text } from "phosphorus-core";
// COMPONENTS
/** A basic Nav that has support for desktop and mobile nav variants, automatically adapting according to the breakpoint. */
export function NavBase(props) {
    // Hooks
    const { width } = useViewportSize();
    const isMobile = width < MOBILE_BREAKPOINT;
    const [scroll] = useWindowScroll();
    const isScrolled = scroll.y > 0;
    // States
    const [opened, { open, close }] = useDisclosure(false);
    // Styles
    const backgroundStyle = (theme) => ({
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
    const containerStyle = (theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing.md,
    });
    const buttonContainerStyle = (theme) => ({
        gap: props.gap || theme.spacing.sm,
    });
    const buttonDrawerStyle = (theme) => ({
        gap: props.gap || theme.spacing.sm,
        width: "100%",
        height: "100%",
        display: "flex",
    });
    return (_jsxs(_Fragment, { children: [_jsx(NavMobile, Object.assign({ opened: opened, onClose: close }, props)), _jsx(Box, { sx: backgroundStyle, children: _jsxs(Container, { size: "md", px: "sm", sx: containerStyle, children: [_jsx(UnstyledButton, { onClick: () => props.faviconClick, children: _jsxs(Group, { children: [_jsx(Image, { src: props.favicon, height: 25, width: "auto" }), isMobile && props.hideTypefaceMobile || !props.typeface ? null :
                                        _jsx(Text, { family: props.typefaceFamily, weight: 800, children: props.typeface })] }) }), isMobile ?
                            _jsx(ButtonBase, { onClick: opened ? close : open, square: true, component: "div", variant: ButtonVariant.Subtle, children: _jsx(Burger, { opened: opened }) })
                            :
                                _jsx(Group, { sx: buttonContainerStyle, children: props.buttons })] }) })] }));
}
