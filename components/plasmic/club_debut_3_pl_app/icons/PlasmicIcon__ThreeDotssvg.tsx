// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThreeDotssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThreeDotssvgIcon(props: ThreeDotssvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 29 7"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.456 0A3.454 3.454 0 000 3.451a3.454 3.454 0 003.456 3.452A3.454 3.454 0 006.912 3.45 3.454 3.454 0 003.456 0zM14.45 0a3.454 3.454 0 00-3.455 3.451 3.454 3.454 0 003.455 3.452 3.454 3.454 0 003.456-3.452A3.454 3.454 0 0014.451 0zm10.996 0a3.454 3.454 0 00-3.455 3.451 3.454 3.454 0 003.455 3.452 3.454 3.454 0 003.456-3.452A3.454 3.454 0 0025.447 0z"
        }
        fill={"#000"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ThreeDotssvgIcon;
/* prettier-ignore-end */
