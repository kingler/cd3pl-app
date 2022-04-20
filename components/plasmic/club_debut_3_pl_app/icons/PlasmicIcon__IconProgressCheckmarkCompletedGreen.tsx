// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconProgressCheckmarkCompletedGreenIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconProgressCheckmarkCompletedGreenIcon(
  props: IconProgressCheckmarkCompletedGreenIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 28"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M29 14c0 7.645-6.568 14-14.5 14C6.582 28 0 21.645 0 14 0 6.341 6.568 0 14.486 0 22.418 0 29 6.341 29 14zm-17.343 6.04c.37.48.768.672 1.25.672.484 0 .896-.22 1.195-.673l6.681-10.157c.17-.288.356-.604.356-.906 0-.645-.583-1.056-1.209-1.056-.37 0-.739.22-1.009.631l-6.07 9.416-2.886-3.596c-.355-.453-.668-.577-1.08-.577-.64 0-1.137.508-1.137 1.126 0 .315.127.617.34.892l3.569 4.227z"
        }
        fill={"#14B705"}
      ></path>
    </svg>
  );
}

export default IconProgressCheckmarkCompletedGreenIcon;
/* prettier-ignore-end */
