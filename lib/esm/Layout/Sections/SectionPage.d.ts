import { CSSProperties, ReactNode } from "react";
export type BaseSectionProps = {
    children: ReactNode;
    /** The height of this section */
    height?: string | number;
    /** Whether this section should grow to the height of its parent elements. Will override the `height` attribute */
    grow?: boolean;
    /** The gap between elements within this section */
    gap?: number;
    /** Any optional styles to override */
    style?: CSSProperties;
};
export type SectionPageProps = BaseSectionProps & {
    /** Horizontal padding */
    paddingH?: string | number;
    /** Vertical padding */
    paddingV?: string | number;
    /** Background color */
    backgroundColor?: string;
    /** Opacity of the background color */
    backgroundOpacity?: string;
    /** Any optional styles to override on the background */
    backgroundStyle?: CSSProperties;
};
/** An element used to define a "page section", or a horizontal ribbon of grouped content. */
export declare function SectionPage(props: SectionPageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SectionPage.d.ts.map