// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompnavBarlinkiconordersDarkIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CompnavBarlinkiconordersDarkIcon(
  props: CompnavBarlinkiconordersDarkIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 39"}
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
          "M32.464 9.204a4.36 4.36 0 00-1.6-2.024 4.442 4.442 0 00-2.477-.78H12.298a4.44 4.44 0 00-2.476.78 4.36 4.36 0 00-1.6 2.024L4.909 17.87c-.067.16-.103.33-.109.503v9.312c0 1.145.46 2.242 1.28 3.051A4.391 4.391 0 009.168 32h22.35a4.39 4.39 0 003.088-1.264 4.288 4.288 0 001.28-3.05v-9.313a1.424 1.424 0 00-.11-.503l-3.312-8.666zm-21.549 1.007a1.44 1.44 0 01.527-.673 1.47 1.47 0 01.82-.262h16.125a1.461 1.461 0 011.383.935l2.585 6.76h-5.097a1.468 1.468 0 00-.804.231c-.24.154-.428.373-.542.631l-1.42 3.308a1.443 1.443 0 01-.542.632 1.47 1.47 0 01-.805.231H17.54a1.468 1.468 0 01-.805-.231 1.444 1.444 0 01-.542-.632l-1.42-3.307a1.444 1.444 0 00-.542-.632 1.468 1.468 0 00-.804-.231H8.33l2.585-6.76zm21.632 18.491a1.43 1.43 0 00.427-1.017v-7.838h-4.769l-1.055 2.41a4.326 4.326 0 01-1.604 1.904 4.407 4.407 0 01-2.4.72H17.54a4.407 4.407 0 01-2.4-.72 4.326 4.326 0 01-1.604-1.905l-1.056-2.409H7.712v7.838c0 .382.153.748.427 1.017.272.27.643.421 1.029.421h22.35c.386 0 .756-.151 1.029-.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompnavBarlinkiconordersDarkIcon;
/* prettier-ignore-end */
