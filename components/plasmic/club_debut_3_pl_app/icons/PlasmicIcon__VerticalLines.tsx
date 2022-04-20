// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerticalLinesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerticalLinesIcon(props: VerticalLinesIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 225 104"}
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
        d={
          "M1 0v104M32.857 0v104M64.714 0v104M96.571 0v104M128.429 0v104M160.286 0v104M192.143 0v104M224 0v104"
        }
        stroke={"currentColor"}
        strokeDasharray={"4 2"}
      ></path>
    </svg>
  );
}

export default VerticalLinesIcon;
/* prettier-ignore-end */
