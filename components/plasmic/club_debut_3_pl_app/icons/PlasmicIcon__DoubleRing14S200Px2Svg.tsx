// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoubleRing14S200Px2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoubleRing14S200Px2SvgIcon(
  props: DoubleRing14S200Px2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        margin: "auto",
        background: '0 0"',

        ...(style || {}),
      }}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"50"}
        cy={"50"}
        r={"32"}
        strokeWidth={"8"}
        stroke={"#009093"}
        strokeDasharray={"50.26548245743669 50.26548245743669"}
        fill={"none"}
        strokeLinecap={"round"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"1.4492753623188404s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 50;360 50 50"}
        ></animateTransform>
      </circle>

      <circle
        cx={"50"}
        cy={"50"}
        r={"23"}
        strokeWidth={"8"}
        stroke={"#152639"}
        strokeDasharray={"36.12831551628262 36.12831551628262"}
        strokeDashoffset={"36.128"}
        fill={"none"}
        strokeLinecap={"round"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"1.4492753623188404s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 50;-360 50 50"}
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default DoubleRing14S200Px2SvgIcon;
/* prettier-ignore-end */
