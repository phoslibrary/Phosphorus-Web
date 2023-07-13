import { BaseNavProps } from "./NavBase";
export type NavMobileProps = BaseNavProps & {
    /** Determines whether the nav is opened */
    opened: boolean;
    /** Called when the nav is closed */
    onClose: () => void;
    /** The side of the screen where the nav will be opened from. Defaults to `left` */
    position?: "bottom" | "left" | "right" | "top";
};
/** A nav drawer for mobile devices. This is included by default in the `NavBase` component. */
export declare function NavMobile(props: NavMobileProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavMobile.d.ts.map