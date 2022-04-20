// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsDarksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsDarksvgIcon(props: SettingsDarksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 25 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.84 4a1.662 1.662 0 011.66 1.66h0v12.18a1.662 1.662 0 01-1.66 1.66h0H6.66A1.662 1.662 0 015 17.84h0V5.66A1.662 1.662 0 016.66 4h0zm0 1.107H6.66a.554.554 0 00-.553.554h0v12.178a.554.554 0 00.554.554h12.178a.554.554 0 00.554-.554h0V5.661a.554.554 0 00-.554-.554h0zm-3.466 1.55a.58.58 0 01.565 0c.175.098.282.28.282.475h0v5.019c.651.16 1.194.596 1.48 1.186.287.59.287 1.274 0 1.864a2.236 2.236 0 01-1.48 1.186h0v.627a.546.546 0 01-.282.475.58.58 0 01-.565 0 .546.546 0 01-.283-.475h0v-.627a2.236 2.236 0 01-1.48-1.186 2.129 2.129 0 010-1.864c.286-.59.83-1.025 1.48-1.186h0V7.132c0-.196.108-.377.283-.475zm-5.813 0a.58.58 0 01.565 0c.175.098.283.28.283.475h0v1.176c.65.16 1.194.596 1.48 1.186.287.59.287 1.274 0 1.864a2.236 2.236 0 01-1.48 1.186h0v4.47a.546.546 0 01-.283.475.58.58 0 01-.565 0 .546.546 0 01-.282-.475h0v-4.47a2.236 2.236 0 01-1.48-1.186 2.129 2.129 0 010-1.864 2.235 2.235 0 011.48-1.186h0V7.132c0-.196.107-.377.282-.475zm6.095 6.514c-.3 0-.587.116-.799.321a1.08 1.08 0 000 1.553 1.149 1.149 0 001.598 0c.212-.206.331-.485.331-.776 0-.291-.119-.57-.33-.777a1.148 1.148 0 00-.8-.321zM9.844 9.328c-.3 0-.587.116-.8.322a1.083 1.083 0 00-.33.776c0 .291.119.57.33.777a1.154 1.154 0 001.598-.001c.212-.206.332-.485.332-.776 0-.29-.12-.57-.331-.776a1.148 1.148 0 00-.8-.322z"
        }
        stroke={"#000"}
        strokeWidth={".4"}
        fill={"#000"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default SettingsDarksvgIcon;
/* prettier-ignore-end */
