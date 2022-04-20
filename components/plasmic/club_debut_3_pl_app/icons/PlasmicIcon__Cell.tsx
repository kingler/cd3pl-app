// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CellIcon(props: CellIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 40"}
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
          "M5.5 23.5a.615.615 0 00.495-.248l4.811-5.5a.747.747 0 00.194-.514.8.8 0 00-.088-.376.708.708 0 00-.235-.264.592.592 0 00-.335-.098.632.632 0 00-.473.219l-4.69 5.372h.644l-4.697-5.372a.617.617 0 00-.803-.12.707.707 0 00-.235.263.793.793 0 00-.088.376.755.755 0 00.194.514L5 23.26c.147.16.314.241.5.241z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CellIcon;
/* prettier-ignore-end */
