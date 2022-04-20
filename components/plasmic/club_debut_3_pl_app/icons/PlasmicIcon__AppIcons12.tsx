// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons12Icon(props: AppIcons12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M17.136 15.13H19.9a.698.698 0 01.691.696v.696a3.49 3.49 0 01-1.012 2.46A3.446 3.446 0 0117.136 20h-9.68a3.446 3.446 0 01-2.444-1.019A3.49 3.49 0 014 16.521V6.088c0-.553.219-1.084.608-1.476A2.068 2.068 0 016.074 4h8.988c.55 0 1.077.22 1.466.611.39.392.608.923.608 1.476v9.044zM5.383 6.088v10.435A2.09 2.09 0 006.42 18.33a2.063 2.063 0 002.074 0 2.09 2.09 0 001.037-1.807v-.696a.69.69 0 01.691-.696h5.53V6.088a.698.698 0 00-.69-.696H6.074a.698.698 0 00-.691.696zM17.136 18.61h-6.931a3.455 3.455 0 00.709-2.087h8.296c0 .553-.219 1.084-.608 1.475a2.067 2.067 0 01-1.466.612zm-3.762-9.886H7.07a.7.7 0 01-.607-.353.711.711 0 010-.706.7.7 0 01.607-.352h6.303a.7.7 0 01.606.352.711.711 0 010 .706.7.7 0 01-.606.353zM7.07 11.06h6.303a.7.7 0 00.606-.353.711.711 0 000-.706.7.7 0 00-.606-.353H7.07a.7.7 0 00-.607.353.71.71 0 000 .706.7.7 0 00.607.353zm6.91 2a.7.7 0 01-.607.353H7.07a.7.7 0 01-.607-.353.711.711 0 010-.706.7.7 0 01.607-.353h6.303a.7.7 0 01.606.353.711.711 0 010 .706z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons12Icon;
/* prettier-ignore-end */
