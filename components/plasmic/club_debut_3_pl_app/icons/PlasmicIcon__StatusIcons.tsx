// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StatusIconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StatusIconsIcon(props: StatusIconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M9.707 13.453A6.764 6.764 0 016.998 14c-.958 0-1.86-.182-2.705-.547a7.113 7.113 0 01-2.234-1.513A7.12 7.12 0 01.547 9.708 6.757 6.757 0 010 7c0-.961.182-1.864.547-2.708A7.134 7.134 0 014.289.547 6.756 6.756 0 016.995 0c.961 0 1.864.182 2.71.547a7.156 7.156 0 013.746 3.745A6.72 6.72 0 0114 7a6.75 6.75 0 01-.548 2.708 7.157 7.157 0 01-3.745 3.745zM4.955 11.85a5.139 5.139 0 002.043.408 5.15 5.15 0 002.048-.408 5.275 5.275 0 002.804-2.802A5.15 5.15 0 0012.257 7c0-.73-.136-1.411-.41-2.047A5.31 5.31 0 009.042 2.15a5.164 5.164 0 00-2.046-.406c-.727 0-1.408.136-2.043.406a5.278 5.278 0 00-2.8 2.804A5.167 5.167 0 001.746 7c0 .73.136 1.411.406 2.047.27.635.647 1.193 1.128 1.673a5.3 5.3 0 001.675 1.129z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StatusIconsIcon;
/* prettier-ignore-end */
