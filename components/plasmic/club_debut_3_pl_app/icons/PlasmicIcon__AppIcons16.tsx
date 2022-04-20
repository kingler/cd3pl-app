// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons16Icon(props: AppIcons16IconProps) {
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
          "M18.909 5.714a2.666 2.666 0 00-.978-1.237A2.715 2.715 0 0016.417 4H6.583a2.715 2.715 0 00-1.514.477 2.665 2.665 0 00-.978 1.237L2.067 11.01a.87.87 0 00-.067.308v5.692c0 .7.281 1.37.782 1.865.5.494 1.18.772 1.888.772h13.66a2.69 2.69 0 001.888-.772c.5-.495.782-1.166.782-1.865v-5.692a.87.87 0 00-.067-.308L18.91 5.714zM5.738 6.33a.896.896 0 01.823-.571h9.856a.897.897 0 01.514.154.88.88 0 01.33.417l1.58 4.132h-3.114a.896.896 0 00-.823.527l-.868 2.022a.898.898 0 01-.823.527H9.787a.897.897 0 01-.824-.527l-.867-2.022a.896.896 0 00-.823-.527H4.158l1.58-4.132zm13.221 11.302a.873.873 0 00.261-.621v-4.79h-2.915l-.645 1.472a2.642 2.642 0 01-.98 1.164 2.694 2.694 0 01-1.467.44H9.787a2.694 2.694 0 01-1.467-.44 2.645 2.645 0 01-.98-1.164l-.646-1.473H3.78v4.79c0 .234.094.458.26.622a.896.896 0 00.63.258h13.66a.895.895 0 00.63-.258z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons16Icon;
/* prettier-ignore-end */
