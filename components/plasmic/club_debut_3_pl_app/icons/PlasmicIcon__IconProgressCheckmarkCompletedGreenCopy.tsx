// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconProgressCheckmarkCompletedGreenCopyIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconProgressCheckmarkCompletedGreenCopyIcon(
  props: IconProgressCheckmarkCompletedGreenCopyIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.5 29C22.432 29 29 22.418 29 14.5 29 6.568 22.418 0 14.486 0 6.568 0 0 6.568 0 14.5 0 22.418 6.582 29 14.5 29z"
        }
        fill={"#ECEEF1"}
      ></path>
    </svg>
  );
}

export default IconProgressCheckmarkCompletedGreenCopyIcon;
/* prettier-ignore-end */
