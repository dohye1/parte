import { css } from "styled-components";
import { getElevation } from "../utils/elevation.util";
import {
  getWidthStyle,
  getFlexBasisStyle,
  getHeightStyle,
} from "../utils/style.util";
import { BoxProps } from "./Box.types";

export const commonBoxStyle = css<BoxProps>`
  ${({
    display = "block",
    width,
    height,
    // ====================
    backgroundColor,
    color,
    // ====================
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    // ====================
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    alignSelf,
    // ====================
    gridTemplateColumns,
    gridTemplateRows,

    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    elevation,
    borderRadius,
  }) =>
    css`
      display: ${display};
      ${getWidthStyle(width)};
      ${getHeightStyle(height)};

      ${backgroundColor && `background-color: ${backgroundColor};`}
      ${color && `color: ${color};`}

      ${flexDirection && `flex-direction: ${flexDirection};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${alignItems && `align-items: ${alignItems};`}
      ${alignContent && `align-content: ${alignContent};`}
      ${flexWrap && `flex-wrap: ${flexWrap};`}
      ${rowGap && `row-gap: ${rowGap}px;`}
      ${columnGap && `column-gap: ${columnGap}px;`}
      ${gap && `gap: ${gap}px;`}

      ${typeof order === "number" ? `order: ${order};` : ""};
      ${typeof flexGrow === "number" ? `flex-grow: ${flexGrow};` : ""};
      ${typeof flexShrink === "number" ? `flex-shrink: ${flexShrink};` : ""};
      ${getFlexBasisStyle(flexBasis)}
      ${flex && `flex: ${flex};`}
      ${alignSelf && `align-self: ${alignSelf};`}
      
      ${gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`}
      ${gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`}
      
      ${[typeof padding === "number" ? `padding: ${padding}px;` : ""]};
      ${[
        typeof paddingLeft === "number"
          ? `padding-left: ${paddingLeft}px;`
          : "",
      ]};
      ${[
        typeof paddingRight === "number"
          ? `padding-right: ${paddingRight}px;`
          : "",
      ]};
      ${[
        typeof paddingTop === "number" ? `padding-top: ${paddingTop}px;` : "",
      ]};
      ${[
        typeof paddingBottom === "number"
          ? `padding-bottom: ${paddingBottom}px;`
          : "",
      ]};
      ${[typeof margin === "number" ? `margin: ${margin}px;` : ""]};
      ${[
        typeof marginLeft === "number" ? `margin-left: ${marginLeft}px;` : "",
      ]};
      ${[
        typeof marginRight === "number"
          ? `margin-right: ${marginRight}px;`
          : "",
      ]};
      ${[typeof marginTop === "number" ? `margin-top: ${marginTop}px;` : ""]};
      ${[
        typeof marginBottom === "number"
          ? `margin-bottom: ${marginBottom}px;`
          : "",
      ]};

      ${typeof elevation === "number" && getElevation(elevation)};
      ${borderRadius === undefined
        ? ""
        : css`
            border-radius: ${typeof borderRadius === "number"
              ? `${borderRadius}px`
              : borderRadius};
          `};
    `}
`;
