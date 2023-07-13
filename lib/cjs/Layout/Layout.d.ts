/** The width at which the device should be considered mobile */
export declare const MOBILE_BREAKPOINT = 800;
/** The height at which a mobile device should be considered tall */
export declare const TALL_BREAKPOINT = 750;
/** Defines different values for when a device reaches different breakpoints.
 * The `default` value must be supplied; the others are optional.
*/
export type BreakpointVariant<type> = {
    default: type;
    mobile?: type;
    mobileTall?: type;
};
/** Will return the correct variant value based upon the viewport size and whether the value
 * has been supplied in the breakpoint variant.
 * @param variant - The breakpoint variant to look within
 * @param viewportSize - The viewport size, as found using `useViewportSize()`
 */
export declare function GetBreakpointValue(variant: BreakpointVariant<any>, viewportSize: {
    width: number;
    height: number;
}): any;
//# sourceMappingURL=Layout.d.ts.map