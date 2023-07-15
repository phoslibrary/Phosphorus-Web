"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const hooks_1 = require("@mantine/hooks");
const Layout_1 = require("./Layout");
// COMPONENTS
/** Defines an individual column of content on a page */
const Column = function Column(props) {
    // Hooks
    const viewportSize = (0, hooks_1.useViewportSize)();
    // Styles
    const columnStyle = (theme) => ({
        width: (0, Layout_1.GetBreakpointValue)(props.width, viewportSize),
        height: (0, Layout_1.GetBreakpointValue)(props.height, viewportSize) || "100%",
        flexGrow: props.grow,
        display: "flex",
        flexDirection: (0, Layout_1.GetBreakpointValue)(props.direction, viewportSize) || "column",
        alignItems: (0, Layout_1.GetBreakpointValue)(props.align, viewportSize),
        justifyContent: (0, Layout_1.GetBreakpointValue)(props.justify, viewportSize) || "center",
        gap: props.gap !== undefined ? props.gap : theme.spacing.sm,
    });
    return ((0, jsx_runtime_1.jsx)(core_1.Box, { sx: columnStyle, style: props.style, children: props.children }));
};
exports.Column = Column;
/** Defines a container for a series of columns */
exports.Column.Container = function ColumnContainer(props) {
    // Hooks
    const viewportSize = (0, hooks_1.useViewportSize)();
    // Styles
    const containerStyle = (theme) => ({
        width: (0, Layout_1.GetBreakpointValue)(props.width, viewportSize),
        height: (0, Layout_1.GetBreakpointValue)(props.height, viewportSize) || "100%",
        flexGrow: props.grow ? 1 : 0,
        display: "flex",
        flexDirection: (0, Layout_1.GetBreakpointValue)(props.direction, viewportSize) || "row",
        alignItems: (0, Layout_1.GetBreakpointValue)(props.align, viewportSize),
        justifyContent: (0, Layout_1.GetBreakpointValue)(props.justify, viewportSize) || "center",
        gap: props.gap !== undefined ? props.gap : theme.spacing.sm,
    });
    return ((0, jsx_runtime_1.jsx)(core_1.Box, { sx: containerStyle, style: props.style, children: props.children }));
};
