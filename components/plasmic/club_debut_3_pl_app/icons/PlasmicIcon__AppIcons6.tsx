// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons6Icon(props: AppIcons6IconProps) {
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
          "M3 3h8v10H3V3zm18 0h-8v6h8V3zM9 11V5H5v6h4zm10-4V5h-4v2h4zm0 6v6h-4v-6h4zM9 19v-2H5v2h4zm12-8h-8v10h8V11zM3 15h8v6H3v-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons6Icon;
/* prettier-ignore-end */
