// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo2Icon(props: Logo2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 36"}
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
          "M34.843 17.655c0 8.052-5.815 15.118-13.886 16.876-3.03.668-4.652.633-7.823-.175-3.49-.915-5.992-2.391-8.564-5.098C2.032 26.55.728 23.843.235 20.292c-.846-5.625.599-10.547 4.229-14.45 6.943-7.523 17.974-7.805 25.128-.703 3.595 3.586 5.251 7.524 5.251 12.517zM14.79 24.727V27.5h4.468c3.236-.035 4.855-.178 5.734-.569 4.046-1.778 6.016-7.076 4.187-11.166-.915-2.062-1.865-3.094-3.905-4.125-1.513-.782-2.111-.853-6.086-.853h-4.433l.105 1.529.106 1.493 1.653.107 1.69.107v6.365h-3.273c-2.603 0-3.447-.142-4.397-.711-1.83-1.138-2.604-2.703-2.428-4.908.106-1.6.317-2.098 1.372-3.129 1.478-1.493 2.92-1.885 7.036-1.92h3.096V6.875h-4.327c-4.995 0-6.332.462-8.373 2.738-1.653 1.85-2.181 3.52-2.005 6.366.176 2.666 1.302 4.622 3.764 6.365.4.282.694.49 1.014.644.89.43 1.978.45 6.093.53l5.593.106v-4.8c0-4.766 0-4.837.774-4.837 1.161 0 2.99 1.245 3.8 2.56 1.407 2.347.633 5.299-1.865 7.184-.809.604-1.618.746-5.171.853l-4.222.142zm32.823-8.76c.114.013.21.02.289.02h.203c.528 0 .956-.144 1.284-.431.328-.287.493-.66.493-1.117 0-.444-.154-.803-.46-1.077-.307-.275-.703-.412-1.189-.412-.513 0-.927.157-1.241.47-.314.314-.471.719-.471 1.215h-3.874c.1-.77.31-1.456.631-2.057.321-.6.731-1.107 1.23-1.518a5.256 5.256 0 011.756-.94c.67-.216 1.413-.324 2.226-.324.8 0 1.524.101 2.173.304a5.02 5.02 0 011.67.862c.463.372.82.822 1.07 1.351a4.1 4.1 0 01.374 1.773c0 .706-.146 1.284-.438 1.734-.293.451-.71.84-1.253 1.166.828.235 1.474.656 1.938 1.264.463.607.695 1.355.695 2.243a4.25 4.25 0 01-.47 1.998 4.64 4.64 0 01-1.317 1.548c-.564.431-1.235.764-2.012 1a8.847 8.847 0 01-2.558.352c-1.242 0-2.362-.222-3.36-.666-1-.444-1.799-1.15-2.398-2.116a4.022 4.022 0 01-.546-1.293 6.219 6.219 0 01-.14-1.313h4.154c.028.692.25 1.218.663 1.577.414.36.97.54 1.67.54.742 0 1.284-.184 1.627-.55.342-.365.513-.816.513-1.351 0-.64-.207-1.123-.62-1.45-.414-.327-.907-.49-1.477-.49-.143 0-.279.01-.407.03-.129.02-.271.042-.428.068v-2.41zm9.068 9.013h4.195v-4.898h2.483c1.813 0 3.2-.431 4.164-1.294.963-.861 1.445-2.076 1.445-3.644 0-1.567-.482-2.782-1.445-3.644-.963-.862-2.351-1.293-4.164-1.293h-6.678V24.98zm5.587-7.994h-1.392v-3.683h1.392c1.541 0 2.312.614 2.312 1.841 0 1.228-.771 1.842-2.312 1.842zm12.343 4.741v-11.52h-4.196V24.98h9.226v-3.253h-5.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo2Icon;
/* prettier-ignore-end */
