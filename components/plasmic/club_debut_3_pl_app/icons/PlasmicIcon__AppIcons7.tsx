// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons7Icon(props: AppIcons7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.788 6.862h-.324l-2.698-2.698a.558.558 0 10-.789.789l1.91 1.909H8.113l1.909-1.91a.558.558 0 10-.79-.788L6.537 6.862h-.324c-.718 0-2.212 0-2.212 2.046 0 .773.158 1.29.497 1.626.198.196.43.296.673.353l1.004 6.148C6.399 18.415 6.999 20 9.662 20h4.488c2.697 0 3.181-1.357 3.471-2.868l1.2-6.238c.246-.056.481-.16.682-.36.34-.336.497-.853.497-1.625 0-2.047-1.494-2.047-2.212-2.047h0zm-1.263 10.06c-.248 1.289-.466 1.962-2.375 1.962H9.662c-1.728 0-2.172-.713-2.387-2.029l-.963-5.9h11.36l-1.147 5.967zm2.192-7.18c-.104.103-.418.102-.752.098L6.212 9.839h-.177c-.334.005-.648.006-.752-.098-.05-.05-.167-.23-.167-.833 0-.844.208-.93 1.096-.93h11.576c.888 0 1.096.086 1.096.93 0 .603-.117.784-.167.833h0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default AppIcons7Icon;
/* prettier-ignore-end */
