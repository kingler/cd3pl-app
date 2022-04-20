// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShopiconMonoAdd3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShopiconMonoAdd3Icon(props: ShopiconMonoAdd3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 23"}
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
          "M16 10H4.414l3.293-3.659a1.199 1.199 0 000-1.571.93.93 0 00-1.414 0l-5 5.556a1.199 1.199 0 000 1.57l5 5.556a.949.949 0 00.707.326.949.949 0 00.707-.326 1.199 1.199 0 000-1.57l-3.293-3.66H16c.553 0 1-.498 1-1.11 0-.614-.447-1.112-1-1.112"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default ShopiconMonoAdd3Icon;
/* prettier-ignore-end */
