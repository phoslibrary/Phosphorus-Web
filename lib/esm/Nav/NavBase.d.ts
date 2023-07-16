import { ReactNode } from "react";
import { BaseButtonProps, T_ComponentSize } from "phosphorus-core";
export type BaseNavProps = {
    /** A list of all buttons to display in this Navbar */
    buttons: ReactNode[];
    /** The favicon for this Navbar */
    favicon: string;
    /** All additional props for the favicon's button component */
    faviconButtonProps?: BaseButtonProps;
    /** An optional typeface to show */
    typeface?: string;
    typefaceFamily?: string;
    /** The gap between components */
    gap?: T_ComponentSize | number | string;
};
export type NavBaseProps = BaseNavProps & {
    /** Whether to hide the typeface on mobile devices */
    hideTypefaceMobile?: boolean;
    /** Information about either the background color or image */
    background?: string;
    /** Whether to only show the background after the user has scrolled past the page top */
    backgroundOnScroll?: boolean;
    /** The side of the screen where the nav will be opened from. Defaults to `left` */
    mobileNavPosition?: "bottom" | "left" | "right" | "top";
};
/** A basic Nav that has support for desktop and mobile nav variants, automatically adapting according to the breakpoint. */
export declare function NavBase(props: NavBaseProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavBase.d.ts.map