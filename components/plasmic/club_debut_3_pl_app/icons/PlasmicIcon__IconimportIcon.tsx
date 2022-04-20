// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconimportIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconimportIconIcon(props: IconimportIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 14"}
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
          "M14.888 3.733V1.555c0-.172-.169-.31-.372-.31H1.861c-.206 0-.372.14-.372.31v2.178c0 .344-.333.622-.745.622-.41 0-.744-.278-.744-.622V.932C0 .418.504 0 1.12 0h14.137c.617 0 1.12.415 1.12.932v2.801c0 .344-.333.622-.744.622s-.745-.278-.745-.622zM3.208 8.09L7.55 4.415c.36-.305.945-.304 1.307.004l4.312 3.67c.701.587-.35 1.467-1.05.88L9.192 6.517c-.144-.121-.26-.079-.26.093v6.766c0 .345-.33.624-.744.624-.41 0-.742-.279-.742-.624V6.61c0-.173-.118-.214-.261-.093L4.259 8.969c-.7.587-1.751-.293-1.05-.88z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconimportIconIcon;
/* prettier-ignore-end */
