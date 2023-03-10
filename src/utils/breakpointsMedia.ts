import { css } from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `;
  });
}
