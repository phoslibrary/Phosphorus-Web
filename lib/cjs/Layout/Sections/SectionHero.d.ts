import { MantineGradient } from "@mantine/core";
import { BaseSectionProps } from "./SectionPage";
import { BreakpointVariant } from "../Layout";
import { CSSProperties } from "react";
export type SectionHeroProps = BaseSectionProps & {
    /** A background image or gradient to apply */
    backgroundImage?: string;
    /** The position of the background image relative to the page */
    backgroundPosition?: BreakpointVariant<string>;
    /** A vector clipping path to apply over the background image */
    clipPath?: BreakpointVariant<string>;
    /** A gradient overlay to apply over the background image*/
    overlay?: BreakpointVariant<MantineGradient>;
    /** Optional styles to override the background overlay */
    overlayStyle?: CSSProperties;
};
/** A hero section of a page, often situated at the top with a large image as the background */
export declare function SectionHero(props: SectionHeroProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SectionHero.d.ts.map