// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons14Icon(props: AppIcons14IconProps) {
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
          "M19.583 7.836h-7.65l-.97-2.125a1.361 1.361 0 00-1.225-.709H5.417A1.339 1.339 0 004 6.277v11.475a1.417 1.417 0 001.417 1.417h14.166A1.417 1.417 0 0021 17.752v-8.5a1.417 1.417 0 00-1.417-1.416h0zM5.417 6.419H9.73l.645 1.417H5.417V6.419zm14.166 11.333H5.417v-8.5h14.166v8.5zm-9.208-1.416H7.542a.708.708 0 110-1.417h2.833a.708.708 0 110 1.417z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".2"}
      ></path>
    </svg>
  );
}

export default AppIcons14Icon;
/* prettier-ignore-end */
