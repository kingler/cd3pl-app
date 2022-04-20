// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalLinesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalLinesIcon(props: HorizontalLinesIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 224 105"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 104h224M0 78.25h224M0 52.5h224M0 26.75h224M0 1h224"}
        stroke={"currentColor"}
        strokeDasharray={"4 2"}
      ></path>
    </svg>
  );
}

export default HorizontalLinesIcon;
/* prettier-ignore-end */
