// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FulfillmentIcons2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FulfillmentIcons2Icon(props: FulfillmentIcons2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 27"}
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
          "M3.938 21.73s.34-3.253 3.562-3.366c3.223.113 3.566 3.367 3.566 3.367m-7.129 0s0 3.769 3.563 3.769 3.566-3.77 3.566-3.77m-7.129 0H2.25a1 1 0 01-1-1V3.129a1.5 1.5 0 011.5-1.5H21a1.5 1.5 0 011.5 1.5v3.526M11.066 21.73H22.5m1.45 0s.21-3.393 3.55-3.393 3.613 3.393 3.613 3.393m-7.163 0s0 3.769 3.55 3.769c3.398 0 3.613-3.77 3.613-3.77m-7.163 0H22.5m8.613 0h2.262a1 1 0 001-1v-2.14M22.5 21.73V6.655m0 0h5.775a1 1 0 01.775.369l2.2 2.702m3.125 3.84l-3.125-3.84m3.125 3.84h-8.251a.5.5 0 01-.499-.5v-2.84a.5.5 0 01.5-.5h5.125m3.125 3.84v5.025m0 0H32.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default FulfillmentIcons2Icon;
/* prettier-ignore-end */
