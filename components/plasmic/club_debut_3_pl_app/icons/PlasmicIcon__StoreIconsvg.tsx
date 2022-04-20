// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StoreIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StoreIconsvgIcon(props: StoreIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16.5 8.002c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2zm0 6h-12v-4a3.99 3.99 0 003-1.357 3.99 3.99 0 003 1.357 3.99 3.99 0 003-1.357 3.99 3.99 0 003 1.357v4zm-3.281 4H7.781c.357-.702.536-1.434.627-2h4.184c.091.566.27 1.298.627 2zm-.719-12c0 1.103-.897 2-2 2s-2-.897-2-2h4zm-10 0h4c0 1.103-.897 2-2 2s-2-.897-2-2zm1.618-4h12.764l1 2H3.118l1-2zm16.277 2.553l-2-4A1.001 1.001 0 0017.5.002h-14c-.379 0-.725.214-.895.553l-2 4a1.002 1.002 0 00-.105.447v1c0 1.474.811 2.75 2 3.444v5.556a1 1 0 001 1h2.871c-.157.747-.508 1.7-1.318 2.105a1.002 1.002 0 00-.527 1.125c.108.45.51.77.974.77h10c.464 0 .866-.32.974-.77a1.002 1.002 0 00-.527-1.125c-.801-.4-1.153-1.356-1.313-2.105H17.5a1 1 0 001-1V9.446c1.189-.694 2-1.97 2-3.444v-1a1 1 0 00-.105-.447z"
        }
        fill={"#009093"}
      ></path>
    </svg>
  );
}

export default StoreIconsvgIcon;
/* prettier-ignore-end */
