// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10Icon(props: Ellipse10IconProps) {
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
        fillOpacity={".3"}
      ></circle>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
