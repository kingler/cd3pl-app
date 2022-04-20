// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersvgIcon(props: UsersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 30 29"}
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
          "M23.123 21.098c-3.872-1.41-5.11-2.599-5.11-5.145 0-1.528 1.182-1.029 1.701-3.828.216-1.16 1.26-.018 1.46-2.669 0-1.056-.57-1.319-.57-1.319s.29-1.563.403-2.766C21.147 3.872 20.14 0 14.766 0 9.39 0 8.383 3.872 8.524 5.371c.113 1.203.403 2.766.403 2.766s-.57.263-.57 1.32c.2 2.65 1.244 1.508 1.46 2.668.52 2.799 1.701 2.3 1.701 3.828 0 2.546-1.237 3.735-5.11 5.145C2.524 22.51 0 23.953 0 24.936v3.303h29.532v-3.303c0-.983-2.524-2.425-6.409-3.838z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default UsersvgIcon;
/* prettier-ignore-end */
