// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarksvgIcon(props: BookmarksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 15"}
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
          "M10 .625v13.75a.625.625 0 01-.388.575.625.625 0 01-.681-.131L5 10.88l-3.931 3.94a.625.625 0 01-.962-.098.625.625 0 01-.107-.346V.625A.625.625 0 01.625 0h8.75A.625.625 0 0110 .625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarksvgIcon;
/* prettier-ignore-end */
