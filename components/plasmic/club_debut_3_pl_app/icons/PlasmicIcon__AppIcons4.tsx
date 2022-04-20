// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons4Icon(props: AppIcons4IconProps) {
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
          "M17.689 5.14a.14.14 0 01.14-.14h2.032a.14.14 0 01.139.14v2.032a.14.14 0 01-.279 0V5.279h-1.893a.14.14 0 01-.14-.14zm-12.378 0a.14.14 0 01-.14.139H3.28v1.893a.14.14 0 11-.279 0V5.139A.14.14 0 013.14 5h2.032a.14.14 0 01.14.14zm12.517 13.004a.14.14 0 000 .279h2.033a.14.14 0 00.139-.14v-2.032a.14.14 0 00-.279 0v1.893h-1.893zm-12.517.14a.14.14 0 01-.14.14l-2.032-.001a.14.14 0 01-.139-.14v-2.032a.14.14 0 01.279 0v1.893h1.893a.14.14 0 01.14.14zm-.795-.835V6.092h-.57v11.357h.57zm.98 0V6.092h1.123v11.357H5.495zM7.728 6.092v11.357h2.175V6.092H7.73zm3.228 11.357V6.092h.422v11.357h-.422zm1.402-11.357v11.357h1.124V6.092h-1.124zm2.104 11.357V6.092h.422v11.357h-.422zm1.402-11.357v11.357h1.124V6.092h-1.124zm1.993 11.357V6.092h1.123v11.357h-1.123z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons4Icon;
/* prettier-ignore-end */
