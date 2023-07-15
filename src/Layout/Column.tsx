import { Box, MantineTheme, Sx } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { CSSProperties, ReactNode } from "react"
import { BreakpointVariant, GetBreakpointValue } from "./Layout";
import { T_FlexAlign, T_FlexDirection, T_FlexJustify } from "phosphorus-core";



// TYPES
export type BaseColumnProps = {
  children: ReactNode;

  /** The direction of the elements within the column/container */
  direction?: BreakpointVariant<T_FlexDirection>;
  /** How items within this column/container are aligned */
  align?: BreakpointVariant<T_FlexAlign>;
  /** How items within this column/container are justified */
  justify?: BreakpointVariant<T_FlexJustify>;
  /** The gap between items within this column/container */
  gap?: number;
  /** The amount of the `flex-grow` attribute to apply */
  grow?: number;

  /** The desired width of this column/container */
  width?: BreakpointVariant<number | string>;
  /** The desired height of this column/container */
  height?: BreakpointVariant<number | string>;

  /** Any optional styles to override */
  style?: CSSProperties;
}

// These are currently kept this way so that future changes do not require
// a rework from components that implement these types. Unlikely, but still
// probably good practice.
export type ColumnProps = BaseColumnProps;
export type ColumnContainerProps = BaseColumnProps;



// COMPONENTS
/** Defines an individual column of content on a page */
export const Column = function Column(props: ColumnProps) {

  // Hooks
  const viewportSize = useViewportSize();

  // Styles
  const columnStyle: Sx = (theme: MantineTheme) => ({
    width: GetBreakpointValue(props.width, viewportSize),
    height: GetBreakpointValue(props.height, viewportSize) || "100%",
    flexGrow: props.grow,

    display: "flex",
    flexDirection: GetBreakpointValue(props.direction, viewportSize) || "column",
    alignItems: GetBreakpointValue(props.align, viewportSize),
    justifyContent: GetBreakpointValue(props.justify, viewportSize) || "center",
    gap: props.gap !== undefined ? props.gap : theme.spacing.sm,
  });

  return (
    <Box
      sx={columnStyle}
      style={props.style}
    >
      {props.children}
    </Box>
  )
}

/** Defines a container for a series of columns */
Column.Container = function ColumnContainer(props: ColumnContainerProps) {

  // Hooks
  const viewportSize = useViewportSize();

  // Styles
  const containerStyle: Sx = (theme: MantineTheme) => ({
    width: GetBreakpointValue(props.width, viewportSize),
    height: GetBreakpointValue(props.height, viewportSize) || "100%",

    flexGrow: props.grow ? 1 : 0,

    display: "flex",
    flexDirection: GetBreakpointValue(props.direction, viewportSize) || "row",
    alignItems: GetBreakpointValue(props.align, viewportSize),
    justifyContent: GetBreakpointValue(props.justify, viewportSize) || "center",
    gap: props.gap !== undefined ? props.gap : theme.spacing.sm,
  });

  return (
    <Box
      sx={containerStyle}
      style={props.style}
    >
      {props.children}
    </Box>
  )
}