// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
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
          "M12.528 17.294A8.706 8.706 0 019.041 18a8.706 8.706 0 01-3.488-.706 9.244 9.244 0 01-2.885-1.95 9.198 9.198 0 01-1.959-2.872A8.6 8.6 0 010 9a8.6 8.6 0 01.71-3.472A9.235 9.235 0 015.543.706 8.706 8.706 0 019.032 0c1.235 0 2.399.235 3.492.706a9.229 9.229 0 012.89 1.95 9.197 9.197 0 011.958 2.872A8.6 8.6 0 0118.082 9a8.6 8.6 0 01-.71 3.472 9.197 9.197 0 01-1.958 2.872 9.243 9.243 0 01-2.886 1.95zM5.221 8.45a.748.748 0 00-.222.56c0 .223.074.404.222.542a.797.797 0 00.567.208H8.27v2.488c0 .224.069.407.208.552.139.144.32.216.545.216a.775.775 0 00.572-.216.745.745 0 00.217-.552V9.76h2.49a.77.77 0 00.554-.208.716.716 0 00.218-.542.756.756 0 00-.218-.56.752.752 0 00-.553-.217H9.812v-2.47a.768.768 0 00-.217-.57.775.775 0 00-.572-.216.715.715 0 00-.545.221.79.79 0 00-.208.565v2.47H5.788c-.23 0-.42.072-.567.217z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
