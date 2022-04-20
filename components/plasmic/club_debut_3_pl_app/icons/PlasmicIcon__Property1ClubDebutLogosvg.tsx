// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Property1ClubDebutLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Property1ClubDebutLogosvgIcon(
  props: Property1ClubDebutLogosvgIconProps
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
          "M24 12.195c0 5.521-4.005 10.367-9.564 11.572-2.088.459-3.205.434-5.39-.12-2.403-.627-4.126-1.64-5.898-3.496C1.4 18.295.502 16.44.162 14.004c-.583-3.858.412-7.233 2.913-9.909 4.782-5.16 12.38-5.352 17.308-.482C22.859 6.072 24 8.773 24 12.195zm-13.813 4.849v1.902h3.078c2.23-.024 3.344-.122 3.95-.39 2.786-1.22 4.143-4.853 2.883-7.657-.63-1.414-1.284-2.121-2.69-2.828-1.041-.537-1.453-.586-4.192-.586h-3.053l.073 1.049.072 1.024 1.14.073 1.163.073v4.365h-2.254c-1.793 0-2.375-.097-3.029-.488-1.26-.78-1.793-1.853-1.672-3.365.073-1.097.218-1.438.945-2.145 1.018-1.025 2.011-1.293 4.846-1.317h2.133V4.803H10.6c-3.442 0-4.362.317-5.768 1.878-1.139 1.268-1.502 2.414-1.381 4.365.121 1.828.896 3.17 2.593 4.364 1.042.732 1.042.732 4.895.805l3.852.073v-3.292c0-3.267 0-3.316.534-3.316.8 0 2.06.853 2.617 1.756.969 1.609.436 3.633-1.285 4.925-.557.415-1.114.512-3.562.585l-2.908.098z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Property1ClubDebutLogosvgIcon;
/* prettier-ignore-end */
