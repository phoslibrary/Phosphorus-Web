import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { GetBreakpointValue } from "./Layout";
// COMPONENTS
/** Defines an individual column of content on a page */
export const Column = function Column(props) {
    // Hooks
    const viewportSize = useViewportSize();
    // Styles
    const columnStyle = (theme) => ({
        width: GetBreakpointValue(props.width, viewportSize),
        height: GetBreakpointValue(props.height, viewportSize) || "100%",
        flexGrow: props.grow,
        display: "flex",
        flexDirection: GetBreakpointValue(props.direction, viewportSize) || "column",
        alignItems: GetBreakpointValue(props.align, viewportSize),
        justifyContent: GetBreakpointValue(props.justify, viewportSize) || "center",
        gap: props.gap || theme.spacing.sm,
    });
    return (_jsx(Box, { sx: columnStyle, style: props.style, children: props.children }));
};
/** Defines a container for a series of columns */
Column.Container = function ColumnContainer(props) {
    // Hooks
    const viewportSize = useViewportSize();
    // Styles
    const containerStyle = (theme) => ({
        width: GetBreakpointValue(props.width, viewportSize),
        height: GetBreakpointValue(props.height, viewportSize) || "100%",
        flexGrow: props.grow ? 1 : 0,
        display: "flex",
        flexDirection: GetBreakpointValue(props.direction, viewportSize) || "row",
        alignItems: GetBreakpointValue(props.align, viewportSize),
        justifyContent: GetBreakpointValue(props.justify, viewportSize) || "center",
        gap: props.gap || theme.spacing.sm,
    });
    return (_jsx(Box, { sx: containerStyle, style: props.style, children: props.children }));
};
