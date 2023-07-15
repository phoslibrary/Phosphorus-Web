"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMobile = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const phosphorus_core_1 = require("phosphorus-core");
// COMPONENTS
/** A nav drawer for mobile devices. This is included by default in the `NavBase` component. */
function NavMobile(props) {
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
    return ((0, jsx_runtime_1.jsxs)(core_1.Drawer, { opened: props.opened, onClose: props.onClose, position: props.position, withCloseButton: false, zIndex: 9999, children: [(0, jsx_runtime_1.jsxs)(core_1.Container, { size: "md", px: "sm", sx: containerStyle, children: [(0, jsx_runtime_1.jsx)(core_1.UnstyledButton, { onClick: () => props.faviconClick, children: (0, jsx_runtime_1.jsx)(core_1.Image, { src: props.favicon, height: 25, width: "auto" }) }), (0, jsx_runtime_1.jsx)(phosphorus_core_1.ButtonBase, { onClick: props.opened ? close : open, square: true, component: "div", variant: phosphorus_core_1.ButtonVariant.Subtle, children: (0, jsx_runtime_1.jsx)(core_1.Burger, { opened: props.opened }) })] }), (0, jsx_runtime_1.jsx)(phosphorus_core_1.Text, { family: props.typefaceFamily, weight: 800, size: 35, children: props.typeface }), (0, jsx_runtime_1.jsx)(core_1.Space, { h: 40 }), (0, jsx_runtime_1.jsx)(core_1.Stack, { sx: buttonDrawerStyle, children: props.buttons })] }));
}
exports.NavMobile = NavMobile;
