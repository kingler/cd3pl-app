// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FulfillmentIconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FulfillmentIconsIcon(props: FulfillmentIconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 36"}
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
          "M14.75 1a.75.75 0 00-1.5 0v8.689l-2.72-2.72A.75.75 0 109.47 8.03l4 4 .5.5.528-.47 4.5-4a.75.75 0 00-.996-1.12L14.75 9.83V1zM7.02 9.96a1.75 1.75 0 00-1.961-.356l-3.954 1.797a1.75 1.75 0 00-.864 2.326l2.509 5.438V33.5c0 .967.784 1.75 1.75 1.75h18a1.75 1.75 0 001.75-1.75V19.165l2.496-5.408a1.75 1.75 0 00-.916-2.349l-4.383-1.826a1.75 1.75 0 00-1.981.453l-3.303 3.715h-5.352L7.02 9.96zM4.25 33.5V19.75h8.5V24a.75.75 0 001.5 0v-4.25h8.5V33.5a.25.25 0 01-.25.25h-18a.25.25 0 01-.25-.25zm21.134-20.371l-2.204 4.774-5.537-3.56 2.944-3.312a.25.25 0 01.283-.064l4.383 1.826a.25.25 0 01.13.336zM10.72 15.25h5.56l4.666 3H6.054l4.666-3zm-9.118-2.151l2.218 4.804 5.492-3.53L5.96 11.02a.25.25 0 00-.28-.05l-3.954 1.797a.25.25 0 00-.124.332z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FulfillmentIconsIcon;
/* prettier-ignore-end */
