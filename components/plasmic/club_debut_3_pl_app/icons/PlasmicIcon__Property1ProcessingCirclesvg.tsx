// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Property1ProcessingCirclesvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Property1ProcessingCirclesvgIcon(
  props: Property1ProcessingCirclesvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
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
          "M12.494 6.412a6.36 6.36 0 011.83.265l.81-1.956a8.21 8.21 0 00-2.64-.426 8.357 8.357 0 00-2.644.426l.821 1.956a6.389 6.389 0 011.823-.265zM8.651 5.22l.81 1.948a6.398 6.398 0 00-1.482 1.109 6.23 6.23 0 00-1.098 1.487l-1.956-.813a8.54 8.54 0 011.572-2.155A8.638 8.638 0 018.65 5.22zM6.19 11.861a6.322 6.322 0 000 1.865c.045.305.11.6.193.888l-1.955.82a8.829 8.829 0 01-.316-1.29 8.362 8.362 0 01.312-3.99l1.959.818a6.795 6.795 0 00-.193.889zm13.881-2.91l-1.95.81a6.342 6.342 0 00-2.591-2.592l.808-1.953c.796.414 1.515.94 2.154 1.578a8.622 8.622 0 011.58 2.157zm-1.186 3.844c0 .316-.024.627-.07.933a7.023 7.023 0 01-.196.89l1.952.82a8.348 8.348 0 000-5.288l-1.956.817a6.318 6.318 0 01.27 1.828zm-2.547 7.574l-.81-1.956a6.144 6.144 0 001.49-1.099 6.356 6.356 0 001.106-1.485l1.944.81a8.475 8.475 0 01-1.57 2.156 8.537 8.537 0 01-2.16 1.574zm-3.839-1.191a6.348 6.348 0 01-1.827-.266l-.817 1.956c.419.137.85.242 1.292.316a8.312 8.312 0 002.702.002 8.47 8.47 0 001.286-.314l-.813-1.956c-.29.083-.587.148-.891.193a6.281 6.281 0 01-.932.069zm-7.569-2.54l1.952-.809A6.245 6.245 0 007.98 17.31c.44.44.934.807 1.481 1.099l-.809 1.956a8.584 8.584 0 01-2.15-1.572 8.56 8.56 0 01-1.572-2.155z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Property1ProcessingCirclesvgIcon;
/* prettier-ignore-end */
