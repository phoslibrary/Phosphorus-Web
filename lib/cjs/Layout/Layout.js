"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBreakpointValue = exports.TALL_BREAKPOINT = exports.MOBILE_BREAKPOINT = void 0;
/** The width at which the device should be considered mobile */
exports.MOBILE_BREAKPOINT = 800;
/** The height at which a mobile device should be considered tall */
exports.TALL_BREAKPOINT = 750;
/** Will return the correct variant value based upon the viewport size and whether the value
 * has been supplied in the breakpoint variant.
 * @param variant - The breakpoint variant to look within
 * @param viewportSize - The viewport size, as found using `useViewportSize()`
 */
function GetBreakpointValue(variant, viewportSize) {
    if (viewportSize.width <= exports.MOBILE_BREAKPOINT) {
        if (viewportSize.height >= exports.TALL_BREAKPOINT && variant.mobileTall)
            return variant.mobileTall || variant.mobile || variant.default;
        else if (viewportSize.height < exports.TALL_BREAKPOINT && variant.mobile)
            return variant.mobile || variant.default;
    }
    else
        return variant.default;
}
exports.GetBreakpointValue = GetBreakpointValue;
