// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ForwardSlashsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ForwardSlashsvgIcon(props: ForwardSlashsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 165"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.94 0h21.561c3.65 0 6.278 5.506 5.289 11.047L32.348 158.678c-.671 3.735-2.826 6.322-5.288 6.322H5.498c-3.65 0-6.278-5.506-5.289-11.047L26.652 6.323C27.323 2.586 29.478 0 31.94 0z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default ForwardSlashsvgIcon;
/* prettier-ignore-end */
