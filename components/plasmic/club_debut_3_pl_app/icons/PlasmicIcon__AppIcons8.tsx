// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons8Icon(props: AppIcons8IconProps) {
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
        d={
          "M3.9 11.298h2.047c.856 0 1.62.632 2.003 1.655l1.26 3.34c.112.3.382.42.607.27.113-.06.18-.18.226-.33l2.205-8.245c.427-1.564 1.71-2.376 2.88-1.805.54.27.99.782 1.237 1.474l1.26 3.34c.067.21.225.331.405.331h2.07c.495 0 .9.541.9 1.203s-.405 1.204-.9 1.204h-2.048c-.854 0-1.62-.632-2.002-1.655l-1.26-3.34c-.112-.3-.382-.421-.607-.27-.113.06-.18.18-.226.33l-2.205 8.214c-.292 1.144-1.08 1.926-1.98 1.986h-.157c-.855 0-1.62-.632-2.003-1.655l-1.26-3.31c-.067-.21-.225-.33-.405-.33H3.9c-.495 0-.9-.542-.9-1.204 0-.662.405-1.203.9-1.203z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons8Icon;
/* prettier-ignore-end */
