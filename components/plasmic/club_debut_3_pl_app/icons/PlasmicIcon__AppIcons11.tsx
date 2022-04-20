// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons11Icon(props: AppIcons11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.273 15.598h2.909m-.728-10.143v1.074c0 .21-.17.38-.38.38H9.017a.38.38 0 01-.38-.38V5.455H5.86a.861.861 0 00-.861.86V19.14a.86.86 0 00.861.861h11.37a.861.861 0 00.86-.861V6.316a.861.861 0 00-.86-.861h-2.776zm-7.272 6.162h2.526V9.091H7.182v2.527zm0 5.091h2.526v-2.526H7.182v2.526zm6.892-9.799H9.017a.38.38 0 01-.38-.38V4.38c0-.21.17-.38.38-.38h5.057c.21 0 .38.17.38.38v2.15c0 .21-.17.38-.38.38zm-1.801 3.636h2.909-2.91z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default AppIcons11Icon;
/* prettier-ignore-end */
