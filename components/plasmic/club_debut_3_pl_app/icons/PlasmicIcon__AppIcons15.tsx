// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIcons15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIcons15Icon(props: AppIcons15IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.66 5h12.18a1.662 1.662 0 011.66 1.66v12.18a1.662 1.662 0 01-1.66 1.66H5.66A1.662 1.662 0 014 18.84V6.66A1.662 1.662 0 015.66 5zm12.57 14.23a.554.554 0 00.163-.39V6.66a.554.554 0 00-.554-.553H5.661a.554.554 0 00-.554.554v12.178a.554.554 0 00.554.554h12.178a.554.554 0 00.392-.162zM15.222 8.133v5.019c.651.16 1.194.596 1.48 1.186.287.59.287 1.274 0 1.864a2.236 2.236 0 01-1.48 1.186v.627a.546.546 0 01-.282.475.58.58 0 01-.565 0 .546.546 0 01-.283-.476v-.626a2.236 2.236 0 01-1.48-1.186 2.129 2.129 0 010-1.864c.286-.59.83-1.025 1.48-1.186v-5.02c0-.196.108-.377.283-.475a.58.58 0 01.565 0c.175.098.282.28.282.475zm-1.364 7.913a1.149 1.149 0 001.598 0c.212-.206.331-.485.331-.776 0-.291-.119-.57-.33-.777a1.148 1.148 0 00-.8-.321c-.3 0-.587.116-.799.321a1.08 1.08 0 000 1.553zM9.409 9.308V8.132a.546.546 0 00-.283-.475.58.58 0 00-.565 0 .546.546 0 00-.282.475v1.176a2.236 2.236 0 00-1.48 1.186 2.129 2.129 0 000 1.864c.286.59.829 1.025 1.48 1.186v4.47c0 .196.107.377.282.475a.58.58 0 00.565 0 .546.546 0 00.283-.476v-4.469a2.236 2.236 0 001.48-1.186 2.129 2.129 0 000-1.864 2.236 2.236 0 00-1.48-1.186zm-.565 3.216c-.3 0-.587-.115-.8-.321a1.083 1.083 0 01-.33-.777c0-.29.119-.57.33-.776a1.15 1.15 0 011.599 0 1.08 1.08 0 010 1.552c-.212.206-.5.322-.8.322z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.84 5v-.2.2zM5.66 5v-.2.2zm13.353.487l-.141.141.141-.141zm.487 1.174h.2-.2zm0 12.178h.2-.2zm-.487 1.174l-.141-.141.141.141zm-1.174.487v.2-.2zm-12.178 0v.2-.2zm-1.174-.487l.141-.141-.141.141zM4 18.839h-.2.2zM4 6.661h-.2.2zm.487-1.174l.141.141-.141-.141zm13.906 13.352h.2-.2zm0-12.178h.2-.2zm-.162-.392l-.142.142.142-.142zm-.392-.162v-.2.2zm-12.178 0v-.2.2zm-.392.162l.142.142-.142-.142zm-.162.392h-.2.2zm0 12.178h-.2.2zm.162.392l.142-.142-.142.142zm.392.162v.2-.2zm12.178 0v.2-.2zm-2.618-6.242h-.2v.156l.152.038.048-.194zm1.48 1.186l.18-.088-.18.088zm0 1.864l.18.087-.18-.087zm-1.48 1.186l-.048-.195-.152.038v.157h.2zm-.847 1.102l-.098.174.098-.174zm-.283-1.102h.2v-.157l-.152-.038-.048.195zm-1.48-1.186l-.18.087.18-.087zm0-1.864l-.18-.088.18.088zm1.48-1.186l.048.194.152-.038v-.156h-.2zm.283-5.494l-.098-.175.098.175zm.565 0l.098-.175-.098.175zm-.283 8.71v.2-.2zm-.799-.322l-.14.144.14-.144zm1.598 0l-.14-.144.14.144zm.331-.776h.2-.2zm-.33-.777l.139-.143-.14.143zm-1.599 0l-.14-.143.14.143zM9.409 9.308h-.2v.157l.152.037.048-.194zm-.283-1.651l.098-.175-.098.175zm-.565 0l-.098-.175.098.175zM8.28 9.308l.048.194.152-.037v-.157h-.2zM6.8 10.494l-.18-.087.18.087zm0 1.864l-.18.087.18-.087zm1.48 1.186h.2v-.157l-.152-.037-.048.194zm.282 4.945l-.098.174.098-.174zm.848-4.945l-.048-.194-.152.037v.157h.2zm1.48-1.186l.18.087-.18-.087zm0-1.864l.18-.087-.18.087zm-2.844 1.709l-.14.143.14-.143zm.799.321v.2-.2zm-.8-1.874l-.139-.144.14.144zm1.599 0l.14-.144-.14.144zm.33.776h.2-.2zm-.33.776l-.14-.143.14.143zM17.838 4.8H5.661v.4h12.178v-.4zm1.316.546a1.863 1.863 0 00-1.316-.546v.4c.387 0 .759.154 1.033.428l.282-.282zM19.7 6.66c0-.493-.197-.966-.546-1.314l-.282.282c.273.274.428.646.428 1.033h.4zm0 12.18V6.66h-.4v12.18h.4zm-.546 1.314c.35-.348.545-.821.546-1.314h-.4c0 .386-.155.758-.428 1.032l.282.282zm-1.314.546c.493 0 .966-.197 1.314-.546l-.282-.282a1.462 1.462 0 01-1.033.428v.4zm-12.18 0h12.18v-.4H5.66v.4zm-1.314-.546c.348.35.821.545 1.314.546v-.4c-.386 0-.758-.155-1.032-.428l-.282.282zM3.8 18.84c0 .493.197.966.546 1.314l.282-.282a1.462 1.462 0 01-.428-1.033h-.4zm0-12.18v12.18h.4V6.66h-.4zm.546-1.314A1.862 1.862 0 003.8 6.66h.4c0-.386.154-.758.428-1.032l-.282-.282zM5.66 4.8c-.493 0-.966.197-1.314.546l.282.282A1.462 1.462 0 015.661 5.2v-.4zm12.533 14.04a.354.354 0 01-.104.25l.283.282a.754.754 0 00.22-.532h-.4zm0-12.18v12.18h.4V6.66h-.4zm-.104-.25a.354.354 0 01.104.25h.4c0-.2-.08-.39-.221-.532l-.283.283zm-.25-.103c.094 0 .184.038.25.104l.283-.283a.754.754 0 00-.532-.22v.4zm-12.178 0h12.178v-.4H5.661v.4zm-.25.104a.354.354 0 01.25-.104v-.4c-.2 0-.392.08-.533.221l.283.283zm-.104.25c0-.094.038-.184.104-.25l-.283-.283a.754.754 0 00-.22.533h.4zm0 12.178V6.661h-.4v12.178h.4zm.104.25a.354.354 0 01-.104-.25h-.4c0 .2.08.392.221.533l.283-.283zm.25.104a.354.354 0 01-.25-.104l-.283.283c.141.141.333.22.533.22v-.4zm12.178 0H5.661v.4h12.178v-.4zm.25-.104a.354.354 0 01-.25.104v.4c.2 0 .392-.08.533-.221l-.283-.283zm-2.668-5.938V8.132h-.4v5.019h.4zm1.46 1.098a2.436 2.436 0 00-1.612-1.292l-.096.388a2.036 2.036 0 011.349 1.08l.36-.176zm0 2.04a2.329 2.329 0 000-2.04l-.36.175c.26.535.26 1.154 0 1.69l.36.174zM15.27 17.58a2.436 2.436 0 001.613-1.293l-.36-.175c-.26.536-.754.933-1.349 1.08l.096.388zm.152.433v-.627h-.4v.627h.4zm-.384.65a.746.746 0 00.384-.65h-.4a.346.346 0 01-.18.3l.196.35zm-.761 0a.78.78 0 00.76 0l-.195-.35a.38.38 0 01-.37 0l-.195.35zm-.385-.65c0 .27.149.517.385.65l.196-.35a.346.346 0 01-.18-.3h-.4zm0-.627v.627h.4v-.627h-.4zm-1.46-1.099a2.436 2.436 0 001.612 1.293l.096-.389a2.036 2.036 0 01-1.348-1.079l-.36.175zm0-2.039a2.329 2.329 0 000 2.04l.36-.176a1.929 1.929 0 010-1.689l-.36-.175zm1.612-1.292a2.43 2.43 0 00-1.612 1.292l.36.175a2.04 2.04 0 011.348-1.08l-.096-.387zm-.152-4.825v5.019h.4V8.132h-.4zm.385-.65a.746.746 0 00-.385.65h.4c0-.122.067-.237.18-.3l-.195-.35zm.76 0a.78.78 0 00-.76 0l.196.35a.38.38 0 01.369 0l.196-.35zm.385.65a.746.746 0 00-.384-.65l-.196.35c.113.063.18.178.18.3h.4zm-.765 8.035a.948.948 0 01-.66-.265l-.278.287c.25.242.587.378.938.378v-.4zm.66-.266a.948.948 0 01-.66.266v.4c.351 0 .689-.136.938-.379l-.278-.287zm.27-.632a.883.883 0 01-.27.632l.278.287a1.28 1.28 0 00.392-.919h-.4zm-.27-.633c.174.169.27.397.27.633h.4c0-.346-.141-.677-.391-.92l-.279.287zm-.66-.265c.249 0 .486.096.66.265l.279-.287a1.348 1.348 0 00-.939-.378v.4zm-.66.265a.948.948 0 01.66-.265v-.4c-.35 0-.688.135-.938.378l.278.287zm-.27.633c0-.236.097-.464.27-.633l-.278-.287c-.25.243-.392.574-.392.92h.4zm.27.633a.883.883 0 01-.27-.633h-.4c0 .346.142.677.392.92l.278-.287zM9.21 8.132v1.176h.4V8.132h-.4zm-.18-.3c.113.063.18.178.18.3h.4a.746.746 0 00-.385-.65l-.196.35zm-.37 0a.38.38 0 01.37 0l.195-.35a.78.78 0 00-.76 0l.195.35zm-.18.3c0-.122.067-.237.18-.3l-.196-.35a.746.746 0 00-.384.65h.4zm0 1.176V8.132h-.4v1.176h.4zm-1.5 1.273c.26-.535.753-.932 1.348-1.079l-.096-.388c-.707.175-1.3.648-1.613 1.293l.36.174zm0 1.69a1.93 1.93 0 010-1.69l-.36-.174a2.33 2.33 0 000 2.038l.36-.174zm1.348 1.079a2.036 2.036 0 01-1.349-1.08l-.36.175a2.436 2.436 0 001.613 1.293l.096-.388zm.152 4.664v-4.47h-.4v4.47h.4zm.18.3a.346.346 0 01-.18-.3h-.4c0 .27.148.517.384.65l.196-.35zm.37 0a.38.38 0 01-.37 0l-.196.35a.78.78 0 00.761 0l-.196-.35zm.18-.3a.346.346 0 01-.18.3l.195.35a.746.746 0 00.385-.65h-.4zm0-4.47v4.47h.4v-4.47h-.4zm1.5-1.273c-.26.535-.753.932-1.348 1.079l.096.388a2.436 2.436 0 001.612-1.293l-.36-.174zm0-1.69c.26.535.26 1.155 0 1.69l.36.174a2.329 2.329 0 000-2.038l-.36.174zM9.361 9.502a2.036 2.036 0 011.348 1.08l.36-.175a2.436 2.436 0 00-1.612-1.293l-.096.388zm-1.456 2.844c.25.243.588.378.939.378v-.4a.948.948 0 01-.66-.265l-.279.287zm-.391-.92c0 .346.141.677.391.92l.279-.287a.883.883 0 01-.27-.633h-.4zm.391-.92c-.25.243-.391.574-.391.92h.4c0-.236.096-.464.27-.633l-.279-.287zm.939-.378c-.351 0-.689.136-.939.378l.279.287a.948.948 0 01.66-.265v-.4zm.938.378a1.348 1.348 0 00-.938-.378v.4c.248 0 .486.096.66.265l.278-.287zm.392.92c0-.346-.142-.677-.392-.92l-.278.287c.173.17.27.397.27.633h.4zm-.392.92c.25-.243.392-.574.392-.92h-.4a.883.883 0 01-.27.633l.278.287zm-.938.378c.35 0 .688-.136.938-.379l-.279-.286a.948.948 0 01-.66.265l.001.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIcons15Icon;
/* prettier-ignore-end */