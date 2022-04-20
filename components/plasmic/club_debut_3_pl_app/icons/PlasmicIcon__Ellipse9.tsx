// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse9Icon(props: Ellipse9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        opacity={".78"}
        cx={"29.5"}
        cy={"29.5"}
        r={"29.5"}
        fill={"currentColor"}
        fillOpacity={".29"}
      ></circle>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
