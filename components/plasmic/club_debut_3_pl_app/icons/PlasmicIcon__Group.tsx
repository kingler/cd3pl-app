// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 38"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.5 37.24a.498.498 0 01-.497-.497V17.009c0-.194.113-.372.29-.452L35.298 8.8a.498.498 0 01.704.452v19.733a.497.497 0 01-.292.453l-17.003 7.757a.48.48 0 01-.206.045v0zm.497-19.911v18.64l16.008-7.304V10.026L18.997 17.33zM7.613 29.698a.48.48 0 01-.206-.045l-3.925-1.79a.497.497 0 01-.291-.453v-3.577a.493.493 0 01.704-.452l3.925 1.79a.5.5 0 01.291.453v3.577a.5.5 0 01-.227.419.514.514 0 01-.27.078h0zM4.186 27.09l2.93 1.336v-2.482l-2.93-1.336v2.482z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>

      <path
        d={
          "M18.5 37.24a.48.48 0 01-.206-.045L1.29 29.438a.497.497 0 01-.29-.453V9.255a.493.493 0 01.704-.452l17.002 7.757c.178.08.292.258.292.452v19.73a.501.501 0 01-.228.42.508.508 0 01-.27.078h0zM1.995 28.665l16.007 7.303v-18.64L1.995 10.026v18.64z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>

      <path
        d={
          "M11.462 18.84a.488.488 0 01-.206-.045L7.49 17.078a.497.497 0 11.412-.905l3.766 1.717a.497.497 0 01-.206.95h0zm24.04-9.089a.488.488 0 01-.206-.045L18.5 2.044 1.704 9.706a.496.496 0 01-.658-.246.496.496 0 01.246-.658l17.002-7.758a.5.5 0 01.412 0l17.003 7.758a.497.497 0 01-.206.95h0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>

      <path
        d={
          "M7.696 12.58a.497.497 0 01-.206-.95l17.002-7.757a.496.496 0 11.412.904L7.902 12.535a.49.49 0 01-.206.044h0zm3.766 1.717a.497.497 0 01-.194-.957l16.99-7.75a.496.496 0 11.412.905l-17.002 7.757a.475.475 0 01-.206.045h0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>

      <path
        d={
          "M11.462 18.84a.497.497 0 01-.497-.497V13.8a.497.497 0 11.995 0v4.543a.497.497 0 01-.498.497zm-3.766-1.72a.497.497 0 01-.497-.497v-4.54a.497.497 0 11.994 0v4.542a.497.497 0 01-.497.496v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
