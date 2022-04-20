// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShopiconMonoAdd2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShopiconMonoAdd2Icon(props: ShopiconMonoAdd2IconProps) {
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
          "M17.707 10.326l-5-5.556a.93.93 0 00-1.414 0 1.199 1.199 0 000 1.571L14.586 10H3c-.553 0-1 .498-1 1.111s.447 1.111 1 1.111h11.586l-3.293 3.66a1.199 1.199 0 000 1.57.949.949 0 00.707.326.949.949 0 00.707-.326l5-5.555a1.199 1.199 0 000-1.571"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShopiconMonoAdd2Icon;
/* prettier-ignore-end */
