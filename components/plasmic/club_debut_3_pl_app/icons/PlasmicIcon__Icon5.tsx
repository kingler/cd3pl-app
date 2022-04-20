// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 110 109"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.5 54.5C.5 24.416 24.916 0 55 0s54.5 24.416 54.5 54.5S85.084 109 55 109 .5 84.584.5 54.5zm20.165 3.815l19.566 19.566c2.125 2.125 5.613 2.125 7.684 0l41.366-41.366a5.427 5.427 0 000-7.684 5.427 5.427 0 00-7.685 0L44.1 66.326 28.35 50.631a5.427 5.427 0 00-7.685 0 5.427 5.427 0 000 7.684z"
        }
        fill={"#009093"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
