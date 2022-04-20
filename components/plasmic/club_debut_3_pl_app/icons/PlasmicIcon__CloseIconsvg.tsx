// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseIconsvgIcon(props: CloseIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M12.893.302a.996.996 0 00-1.41 0l-4.89 4.88-4.89-4.89a.996.996 0 10-1.41 1.41l4.89 4.89-4.89 4.89a.996.996 0 101.41 1.41l4.89-4.89 4.89 4.89a.996.996 0 101.41-1.41l-4.89-4.89 4.89-4.89c.38-.38.38-1.02 0-1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CloseIconsvgIcon;
/* prettier-ignore-end */
