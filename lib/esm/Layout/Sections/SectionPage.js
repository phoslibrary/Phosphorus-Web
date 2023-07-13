import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Container } from "@mantine/core";
// COMPONENTS
/** An element used to define a "page section", or a horizontal ribbon of grouped content. */
export function SectionPage(props) {
    // Styles
    const backgroundStyle = (theme) => ({
        backgroundColor: props.backgroundColor ? `${theme.colors[props.backgroundColor][4]}${props.backgroundOpacity ? props.backgroundOpacity : "FF"}` : null,
        padding: `${props.paddingV || 0}px ${props.paddingH || 0}px`
    });
    const containerStyle = (theme) => ({
        height: props.grow ? "100vh" : props.height || "auto",
        padding: theme.spacing.md,
        gap: props.gap || theme.spacing.md,
        boxSizing: "border-box",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: props.grow ? "center" : "",
        position: "relative",
    });
    return (_jsx(Box, { sx: backgroundStyle, style: props.backgroundStyle, children: _jsx(Container, { size: "md", px: "sm", sx: containerStyle, style: props.style, children: props.children }) }));
}
