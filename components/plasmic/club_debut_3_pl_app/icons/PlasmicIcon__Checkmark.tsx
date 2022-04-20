// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckmarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckmarkIcon(props: CheckmarkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
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

      <path
        d={
          "M10.605.304l.093.093a1.046 1.046 0 010 1.47L4.943 7.695a1.02 1.02 0 01-1.454 0L.302 4.474a1.046 1.046 0 010-1.47l.093-.094a1.02 1.02 0 011.454 0L4.22 5.308 9.151.314a1.01 1.01 0 011.454-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckmarkIcon;
/* prettier-ignore-end */
