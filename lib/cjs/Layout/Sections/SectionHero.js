"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHero = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const hooks_1 = require("@mantine/hooks");
const SectionPage_1 = require("./SectionPage");
const Layout_1 = require("../Layout");
// COMPONENTS
/** A hero section of a page, often situated at the top with a large image as the background */
function SectionHero(props) {
    // Hooks
    const viewportSize = (0, hooks_1.useViewportSize)();
    // Variables
    let bgOverlay = null;
    if (props.overlay) {
        let gradient = (0, Layout_1.GetBreakpointValue)(props.overlay, viewportSize);
        bgOverlay = `linear-gradient(${gradient.deg || 45}deg, ${gradient.from}, ${gradient.to})`;
    }
    // Styles
    const bgStyle = (theme) => ({
        maxWidth: "100vw",
        height: props.grow ? "100%" : props.height || "100vh",
        position: "absolute",
        zIndex: -2,
        clipPath: (0, Layout_1.GetBreakpointValue)(props.clipPath, viewportSize),
        backgroundPosition: (0, Layout_1.GetBreakpointValue)(props.backgroundPosition, viewportSize) || "center",
    });
    const overlayStyle = (theme) => ({
        maxWidth: "100vw",
        height: props.grow ? "100%" : props.height || "100vh",
        position: "absolute",
        zIndex: -1,
        backgroundImage: bgOverlay,
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.BackgroundImage, { src: props.backgroundImage, sx: bgStyle, style: props.style }), (0, jsx_runtime_1.jsx)(core_1.BackgroundImage, { src: null, sx: overlayStyle, style: props.overlayStyle }), (0, jsx_runtime_1.jsx)(SectionPage_1.SectionPage, { grow: true, gap: props.gap, children: props.children })] }));
}
exports.SectionHero = SectionHero;
