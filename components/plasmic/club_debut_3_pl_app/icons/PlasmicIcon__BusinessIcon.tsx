// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusinessIconIcon(props: BusinessIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M16 8c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2zm0 6H4v-4a3.99 3.99 0 003-1.357A3.99 3.99 0 0010 10a3.99 3.99 0 003-1.357A3.99 3.99 0 0016 10v4zm-3.281 4H7.281c.357-.702.536-1.434.627-2h4.184c.091.566.27 1.298.627 2zM12 6c0 1.103-.897 2-2 2s-2-.897-2-2h4zM2 6h4c0 1.103-.897 2-2 2s-2-.897-2-2zm1.618-4h12.764l1 2H2.618l1-2zm16.277 2.553l-2-4A1.001 1.001 0 0017 0H3c-.379 0-.725.214-.895.553l-2 4A1.002 1.002 0 000 5v1c0 1.474.811 2.75 2 3.444V15a1 1 0 001 1h2.871c-.157.747-.508 1.7-1.318 2.105a1.002 1.002 0 00-.527 1.125c.108.451.51.77.974.77h10c.464 0 .866-.319.974-.77a1.002 1.002 0 00-.527-1.125c-.801-.4-1.153-1.356-1.313-2.105H17a1 1 0 001-1V9.444c1.189-.694 2-1.97 2-3.444V5c0-.155-.036-.309-.105-.447z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BusinessIconIcon;
/* prettier-ignore-end */
