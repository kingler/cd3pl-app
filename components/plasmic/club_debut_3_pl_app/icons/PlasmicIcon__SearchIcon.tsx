// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIconIcon(props: SearchIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M.444 7.859A5.464 5.464 0 010 5.662c0-.78.148-1.512.444-2.196A5.777 5.777 0 013.5.44 5.61 5.61 0 015.718 0a5.61 5.61 0 012.217.44 5.777 5.777 0 013.056 3.026 5.47 5.47 0 01.444 2.196c0 .649-.104 1.263-.312 1.845a5.658 5.658 0 01-.863 1.583l3.504 3.49a.783.783 0 01.175.263c.04.1.061.206.061.32a.878.878 0 01-.104.425.769.769 0 01-.29.302.83.83 0 01-.43.11.886.886 0 01-.609-.241L9.042 10.26a5.932 5.932 0 01-1.548.78 5.546 5.546 0 01-1.776.284 5.61 5.61 0 01-2.218-.44A5.775 5.775 0 01.444 7.859zm1.129-3.924a4.314 4.314 0 00-.348 1.727c0 .615.116 1.191.348 1.728a4.43 4.43 0 00.967 1.416 4.6 4.6 0 001.433.958 4.39 4.39 0 001.745.348 4.39 4.39 0 001.744-.348 4.557 4.557 0 001.43-.958c.41-.407.733-.879.967-1.416a4.276 4.276 0 00.35-1.728c0-.615-.116-1.19-.35-1.727a4.551 4.551 0 00-.967-1.42 4.478 4.478 0 00-1.43-.957 4.43 4.43 0 00-1.744-.345 4.43 4.43 0 00-1.745.345 4.52 4.52 0 00-2.4 2.377z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIconIcon;
/* prettier-ignore-end */
