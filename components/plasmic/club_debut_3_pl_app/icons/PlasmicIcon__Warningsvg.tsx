// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WarningsvgIcon(props: WarningsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 31 27"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.021 25.071L16.03.547A1.09 1.09 0 0015.08 0c-.393 0-.756.209-.949.547L.141 25.07c-.19.332-.188.739.008 1.067.195.33.553.532.94.532h27.983c.386 0 .744-.203.94-.532a1.06 1.06 0 00.01-1.067zm-13.213-1.539h-3.456v-3.137h3.456v3.137zm0-5.491h-3.456V8.628h3.456v9.413z"
        }
        fill={"#000"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default WarningsvgIcon;
/* prettier-ignore-end */
