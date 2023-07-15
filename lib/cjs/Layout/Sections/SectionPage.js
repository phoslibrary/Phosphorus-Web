"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
// COMPONENTS
/** An element used to define a "page section", or a horizontal ribbon of grouped content. */
function SectionPage(props) {
    // Styles
    const backgroundStyle = (theme) => ({
        backgroundColor: props.backgroundColor ? `${theme.colors[props.backgroundColor][4]}${props.backgroundOpacity ? props.backgroundOpacity : "FF"}` : null,
        padding: `${props.paddingV !== undefined ? props.paddingV : 20}px ${props.paddingH !== undefined ? props.paddingH : 0}px`
    });
    const containerStyle = (theme) => ({
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
    return ((0, jsx_runtime_1.jsx)(core_1.Box, { sx: backgroundStyle, style: props.backgroundStyle, children: (0, jsx_runtime_1.jsx)(core_1.Container, { size: "md", px: "sm", sx: containerStyle, style: props.style, children: props.children }) }));
}
exports.SectionPage = SectionPage;
