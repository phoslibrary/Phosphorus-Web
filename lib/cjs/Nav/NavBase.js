"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBase = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("@mantine/hooks");
const Layout_1 = require("../Layout/Layout");
const core_1 = require("@mantine/core");
const NavMobile_1 = require("./NavMobile");
const phosphorus_core_1 = require("phosphorus-core");
// COMPONENTS
/** A basic Nav that has support for desktop and mobile nav variants, automatically adapting according to the breakpoint. */
function NavBase(props) {
    // Hooks
    const { width } = (0, hooks_1.useViewportSize)();
    const isMobile = width < Layout_1.MOBILE_BREAKPOINT;
    const [scroll] = (0, hooks_1.useWindowScroll)();
    const isScrolled = scroll.y > 0;
    // States
    const [opened, { open, close }] = (0, hooks_1.useDisclosure)(false);
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavMobile_1.NavMobile, Object.assign({ opened: opened, onClose: close }, props)), (0, jsx_runtime_1.jsx)(core_1.Box, { sx: backgroundStyle, children: (0, jsx_runtime_1.jsxs)(core_1.Container, { size: "md", px: "sm", sx: containerStyle, children: [(0, jsx_runtime_1.jsx)(phosphorus_core_1.ButtonBase, Object.assign({ style: Object.assign({ padding: 0, backgroundColor: "#FFFFFF00", color: "unset" }, props.faviconButtonProps.style) }, props.faviconButtonProps, { children: (0, jsx_runtime_1.jsxs)(core_1.Group, { children: [(0, jsx_runtime_1.jsx)(core_1.Image, { src: props.favicon, height: 25, width: "auto" }), isMobile && props.hideTypefaceMobile || !props.typeface ? null :
                                        (0, jsx_runtime_1.jsx)(phosphorus_core_1.Text, { family: props.typefaceFamily, weight: 800, children: props.typeface })] }) })), isMobile ?
                            (0, jsx_runtime_1.jsx)(phosphorus_core_1.ButtonBase, { onClick: opened ? close : open, square: true, component: "div", variant: phosphorus_core_1.ButtonVariant.Subtle, children: (0, jsx_runtime_1.jsx)(core_1.Burger, { opened: opened }) })
                            :
                                (0, jsx_runtime_1.jsx)(core_1.Group, { sx: buttonContainerStyle, children: props.buttons })] }) })] }));
}
exports.NavBase = NavBase;
