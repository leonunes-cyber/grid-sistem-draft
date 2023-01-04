// vendors
import styled, { css } from "styled-components";

type TitleProps = {
  type: "h1" | "h2" | "h3";
  color?: string;
};

const Title = styled.h1<TitleProps>`
  color: ${({ color }) => color && color};

  ${({ type }) =>
    type === "h1" &&
    css`
      font-size: 2.5rem;
    `}
`;
