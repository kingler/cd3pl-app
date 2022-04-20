// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LineCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LineCopyIcon(props: LineCopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1393 1"}
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
        d={"M.575.5H1392.42"}
        stroke={"currentColor"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default LineCopyIcon;
/* prettier-ignore-end */
