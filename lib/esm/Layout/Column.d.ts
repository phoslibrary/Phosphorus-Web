import { CSSProperties, ReactNode } from "react";
import { BreakpointVariant } from "./Layout";
import { T_FlexAlign, T_FlexDirection, T_FlexJustify } from "phosphorus-core";
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
};
export type ColumnProps = BaseColumnProps;
export type ColumnContainerProps = BaseColumnProps;
/** Defines an individual column of content on a page */
export declare const Column: {
    (props: ColumnProps): import("react/jsx-runtime").JSX.Element;
    /** Defines a container for a series of columns */
    Container(props: ColumnContainerProps): import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Column.d.ts.map