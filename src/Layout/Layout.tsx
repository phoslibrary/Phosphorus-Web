/** The width at which the device should be considered mobile */
export const MOBILE_BREAKPOINT = 800;
/** The height at which a mobile device should be considered tall */
export const TALL_BREAKPOINT = 750;

/** Defines different values for when a device reaches different breakpoints. 
 * The `default` value must be supplied; the others are optional.
*/
export type BreakpointVariant<type> = {
  default: type;
  mobile?: type;
  mobileTall?: type;
}

/** Will return the correct variant value based upon the viewport size and whether the value
 * has been supplied in the breakpoint variant.
 * @param variant - The breakpoint variant to look within
 * @param viewportSize - The viewport size, as found using `useViewportSize()`
 */
export function GetBreakpointValue(
  variant: BreakpointVariant<any>,
  viewportSize: {
    width: number,
    height: number
  }
) {
  if (!variant) return null;
  if (viewportSize.width <= MOBILE_BREAKPOINT) {
    if (viewportSize.height >= TALL_BREAKPOINT)
      return variant.mobileTall !== undefined ? variant.mobileTall :
        variant.mobile !== undefined ? variant.mobile : variant.default;
    else if (viewportSize.height < TALL_BREAKPOINT)
      return variant.mobile !== undefined ? variant.mobile : variant.default;
  } else
    return variant.default;
}