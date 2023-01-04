// vendors
import React from "react";
import styled, { css } from "styled-components";

// utils
import { breakpointsMedia } from "../utils/breakpointsMedia";

type RowProps = {
  rows?: number;
  gap?: number;
  margin?: string;
  children?: React.ReactNode;
};

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  background-color: #f1f2f3;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  gap: ${({ gap = 2 }) => gap && gap + "rem"};

  /* div:first-child {
    margin-left: 0;
  } */
`;

function calcSize(col: number, space: number) {
  return ` ${(100 / 12) * col}% - ${space * (12 / col - 1)}rem / ${12 / col}`;
}

type ColumnProps = {
  display?: string;
  col?: number | Record<string, number>;
  gap?: number;
  height?: string;
  flexDirection?: string;
};

export const Col = styled.div<ColumnProps>`
  display: ${({ display }) => display || " block"};
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  height: ${({ height }) => height || " 100%"};
  float: left;

  :after {
    content: "";
    display: table;
    clear: both;
  }

  ${({ col = 12, gap = 2 }) => {
    if (typeof col == "number") {
      return css`
        width: calc(${calcSize(col, gap)});
      `;
    }

    return breakpointsMedia({
      xs:
        col?.xs &&
        css`
          width: calc(${calcSize(col.xs, gap)});
        `,
      sm:
        col?.sm &&
        css`
          width: calc(${calcSize(col.sm, gap)});
        `,
      md:
        col?.md &&
        css`
          width: calc(${calcSize(col.md, gap)});
        `,
      lg:
        col?.lg &&
        css`
          width: calc(${calcSize(col.lg, gap)});
        `,
      xl:
        col?.xl &&
        css`
          width: calc(${calcSize(col.xl, gap)});
        `,
      xxl:
        col?.xxl &&
        css`
          width: calc(${calcSize(col.xxl, gap)});
        `,
    });
  }}
`;

export const BackRed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: red;
`;

export const BackBlue = styled.div`
  height: 100%;
  background-color: blue;
`;
