// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandandcollapseIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandandcollapseIconsvgIcon(
  props: ExpandandcollapseIconsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 115 115"}
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
          "M110.825 0a3.575 3.575 0 013.575 3.575v107.25a3.573 3.573 0 01-5.362 3.096 3.574 3.574 0 01-1.788-3.096l.015-53.268a.71.71 0 01-.115.143l-45.43 45.44a3.572 3.572 0 01-3.248.98 3.572 3.572 0 01-2.223-5.542l.415-.5 36.68-36.694a.359.359 0 00-.25-.608H3.574a3.575 3.575 0 110-7.15h89.524a.357.357 0 00.258-.608l-36.694-36.7a3.575 3.575 0 01-.415-4.555l.415-.5a3.572 3.572 0 014.555-.408l.5.408 45.431 45.43.1.165V3.576a3.577 3.577 0 013.575-3.575l.001-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandandcollapseIconsvgIcon;
/* prettier-ignore-end */
