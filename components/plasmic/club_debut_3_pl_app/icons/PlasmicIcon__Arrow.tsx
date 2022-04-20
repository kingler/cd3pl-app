// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 10"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 5a.583.583 0 00-.21-.442L8.149.198A.645.645 0 007.68 0a.616.616 0 00-.434.162.529.529 0 00-.175.405c0 .08.014.155.042.228a.51.51 0 00.126.188l1.568 1.504 2.779 2.388.14-.33-2.254-.132H.616a.615.615 0 00-.444.165A.56.56 0 000 5a.56.56 0 00.172.422c.114.11.262.165.444.165h8.856l2.254-.132-.14-.323-2.78 2.381L7.24 9.017a.504.504 0 00-.126.188.626.626 0 00-.042.228c0 .162.058.298.175.405A.616.616 0 007.68 10a.66.66 0 00.455-.185l4.655-4.373A.583.583 0 0013 5z"
        }
        fill={"#435971"}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
