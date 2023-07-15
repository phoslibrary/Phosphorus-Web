import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BackgroundImage } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { SectionPage } from "./SectionPage";
import { GetBreakpointValue } from "../Layout";
// COMPONENTS
/** A hero section of a page, often situated at the top with a large image as the background */
export function SectionHero(props) {
    // Hooks
    const viewportSize = useViewportSize();
    // Variables
    let bgOverlay = null;
    if (props.overlay) {
        let gradient = GetBreakpointValue(props.overlay, viewportSize);
        bgOverlay = `linear-gradient(${gradient.deg !== undefined ? gradient.deg : 45}deg, ${gradient.from}, ${gradient.to})`;
    }
    // Styles
    const bgStyle = (theme) => ({
        maxWidth: "100vw",
        height: props.grow ? "100%" :
            props.height !== undefined ? props.height : "100vh",
        position: "absolute",
        zIndex: -2,
        clipPath: GetBreakpointValue(props.clipPath, viewportSize),
        backgroundPosition: GetBreakpointValue(props.backgroundPosition, viewportSize) || "center",
    });
    const overlayStyle = (theme) => ({
        maxWidth: "100vw",
        height: props.grow ? "100%" :
            props.height !== undefined ? props.height : "100vh",
        position: "absolute",
        zIndex: -1,
        backgroundImage: bgOverlay,
    });
    return (_jsxs(_Fragment, { children: [_jsx(BackgroundImage, { src: props.backgroundImage, sx: bgStyle, style: props.style }), _jsx(BackgroundImage, { src: null, sx: overlayStyle, style: props.overlayStyle }), _jsx(SectionPage, { grow: true, gap: props.gap, children: props.children })] }));
}
