// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 700 700"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M612.5 0c4.64 0 9.094 1.844 12.375 5.125S630 12.859 630 17.5v525a17.498 17.498 0 01-26.25 15.156A17.499 17.499 0 01595 542.5l.07-260.75a3.46 3.46 0 01-.558.7l-222.39 222.43a17.496 17.496 0 01-15.895 4.8 17.502 17.502 0 01-10.883-27.129l2.031-2.45 179.55-179.62a1.76 1.76 0 00.367-1.894 1.756 1.756 0 00-1.593-1.082h-438.2a17.498 17.498 0 01-15.156-26.25 17.499 17.499 0 0115.156-8.75h438.23a1.75 1.75 0 001.62-1.066 1.755 1.755 0 00-.359-1.91L347.37 79.879a17.5 17.5 0 01-2.031-22.297l2.031-2.45a17.485 17.485 0 0110.785-5.027 17.498 17.498 0 0111.512 3.031l2.45 1.997 222.39 222.39.488.804V17.507a17.501 17.501 0 0117.5-17.5z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
