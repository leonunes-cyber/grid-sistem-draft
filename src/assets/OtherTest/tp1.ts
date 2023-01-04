import styled, { css, DefaultTheme } from "styled-components";

type ParagrapghProps = {
  variant: "sm" | "md";
  type?: "bold" | "normal" | "semiBold";
  fontWeight?: "bold" | "semibold" | "light";
  textColor?: string;
  isVisible?: string;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
};

const ParagraphModifiers = {
  sm: (theme: DefaultTheme) => css`
    @media (max-width: 767px) {
      font-size: ${theme.font.size.xxs};
      font-style: normal;
      line-height: 15px;
    }
    @media (min-width: 768px) {
      font-size: ${theme.font.size.xs};
      font-style: normal;
      line-height: 21px;
    }
  `,
  md: (theme: DefaultTheme) => css`
    @media (max-width: 767px) {
      font-size: ${theme.font.size.xs};
      font-style: normal;
      line-height: 18px;
    }
    @media (min-width: 768px) {
      font-size: ${theme.font.size.sm};
      font-style: normal;
      line-height: 24px;
    }
  `,

  bold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.bold};
  `,
  semiBold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.semiBold};
  `,
  normal: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.regular};
  `,
};

export const Paragraph = styled("p")<ParagrapghProps>`
  ${({
    theme,
    variant,
    type,
    textColor,
    textAlign = "left",
    fontWeight,
  }) => css`
    ${ParagraphModifiers[variant](theme)};
    ${type && ParagraphModifiers[type](theme)};
    color: ${textColor || theme.color.gray.nth1};
    text-align: ${textAlign};
    ${fontWeight &&
    css`
      font-weight: ${fontWeight === "bold"
        ? 700
        : fontWeight === "semibold"
        ? 600
        : 400} !important;
    `}
  `}
`;
