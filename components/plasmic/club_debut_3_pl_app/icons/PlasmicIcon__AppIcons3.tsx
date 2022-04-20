// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons3Icon(props: AppIcons3IconProps) {
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
          "M15.787 20.336a8.213 8.213 0 01-3.289.664 8.204 8.204 0 01-3.285-.664A8.637 8.637 0 016.5 18.499a8.645 8.645 0 01-1.837-2.71A8.204 8.204 0 014 12.5c0-1.167.221-2.263.664-3.288a8.663 8.663 0 014.545-4.548A8.204 8.204 0 0112.494 4a8.22 8.22 0 013.291.664 8.692 8.692 0 014.549 4.548A8.184 8.184 0 0121 12.5a8.184 8.184 0 01-.666 3.288 8.691 8.691 0 01-4.547 4.548zm-5.77-1.948c.772.33 1.599.495 2.481.495.885 0 1.714-.165 2.487-.495a6.405 6.405 0 003.404-3.403c.33-.771.495-1.6.495-2.485a6.23 6.23 0 00-.497-2.485 6.448 6.448 0 00-3.408-3.405 6.27 6.27 0 00-2.485-.493 6.26 6.26 0 00-2.48.493 6.409 6.409 0 00-3.4 3.405A6.274 6.274 0 006.12 12.5c0 .885.165 1.714.493 2.485a6.368 6.368 0 001.37 2.033 6.434 6.434 0 002.034 1.37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons3Icon;
/* prettier-ignore-end */
