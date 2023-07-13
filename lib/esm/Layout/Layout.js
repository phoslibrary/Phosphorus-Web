/** The width at which the device should be considered mobile */
export const MOBILE_BREAKPOINT = 800;
/** The height at which a mobile device should be considered tall */
export const TALL_BREAKPOINT = 750;
/** Will return the correct variant value based upon the viewport size and whether the value
 * has been supplied in the breakpoint variant.
 * @param variant - The breakpoint variant to look within
 * @param viewportSize - The viewport size, as found using `useViewportSize()`
 */
export function GetBreakpointValue(variant, viewportSize) {
    if (viewportSize.width <= MOBILE_BREAKPOINT) {
        if (viewportSize.height >= TALL_BREAKPOINT && variant.mobileTall)
            return variant.mobileTall || variant.mobile || variant.default;
        else if (viewportSize.height < TALL_BREAKPOINT && variant.mobile)
            return variant.mobile || variant.default;
    }
    else
        return variant.default;
}
