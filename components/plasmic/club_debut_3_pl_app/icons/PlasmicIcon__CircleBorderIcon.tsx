// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleBorderIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleBorderIconIcon(props: CircleBorderIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.787 16.336A8.213 8.213 0 018.498 17a8.204 8.204 0 01-3.285-.664A8.637 8.637 0 012.5 14.499a8.645 8.645 0 01-1.837-2.71A8.204 8.204 0 010 8.5c0-1.167.221-2.263.664-3.288A8.663 8.663 0 015.209.664 8.203 8.203 0 018.494 0a8.22 8.22 0 013.291.664 8.692 8.692 0 014.549 4.548A8.184 8.184 0 0117 8.5a8.184 8.184 0 01-.666 3.288 8.691 8.691 0 01-4.547 4.548zm-5.77-1.948c.772.33 1.598.495 2.481.495.885 0 1.714-.165 2.487-.495a6.405 6.405 0 003.404-3.403c.33-.771.495-1.6.495-2.485a6.23 6.23 0 00-.497-2.485 6.448 6.448 0 00-3.408-3.405 6.27 6.27 0 00-2.485-.493 6.26 6.26 0 00-2.48.493 6.409 6.409 0 00-3.4 3.405A6.274 6.274 0 002.12 8.5c0 .885.165 1.714.493 2.485a6.368 6.368 0 001.37 2.033 6.434 6.434 0 002.034 1.37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleBorderIconIcon;
/* prettier-ignore-end */
