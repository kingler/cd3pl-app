// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: QtFNmW8QSW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariants_6JfnloVhzca } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6JfnloVhzca/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicTopBarOnBoarding.module.css"; // plasmic-import: QtFNmW8QSW/css

import ThreeDotssvgIcon from "./icons/PlasmicIcon__ThreeDotssvg"; // plasmic-import: n5IM0xzJdW/icon
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: mWQ8Pw_ze5N/icon

export type PlasmicTopBarOnBoarding__VariantMembers = {};

export type PlasmicTopBarOnBoarding__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopBarOnBoarding__VariantsArgs;
export const PlasmicTopBarOnBoarding__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTopBarOnBoarding__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTopBarOnBoarding__ArgsType;
export const PlasmicTopBarOnBoarding__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicTopBarOnBoarding__OverridesType = {
  topBarWithLogo?: p.Flex<"div">;
  button?: p.Flex<"button">;
  mobileMenu?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultTopBarOnBoardingProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicTopBarOnBoarding__RenderFunc(props: {
  variants: PlasmicTopBarOnBoarding__VariantsArgs;
  args: PlasmicTopBarOnBoarding__ArgsType;
  overrides: PlasmicTopBarOnBoarding__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6JfnloVhzca()
  });

  return (
    <div
      data-plasmic-name={"topBarWithLogo"}
      data-plasmic-override={overrides.topBarWithLogo}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.topBarWithLogo
      )}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          projectcss.all,
          projectcss.button,
          sty.button,
          hasVariant(globalVariants, "screen", "mobile")
            ? ("mobile_menu" as const)
            : undefined
        )}
        onClick={
          hasVariant(globalVariants, "screen", "mobile")
            ? ("#" as const)
            : undefined
        }
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <ThreeDotssvgIcon
            data-plasmic-name={"mobileMenu"}
            data-plasmic-override={overrides.mobileMenu}
            className={classNames(projectcss.all, sty.mobileMenu)}
            role={"img"}
          />
        ) : null}
      </button>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <LogoIcon
                className={classNames(projectcss.all, sty.svg___0Bdim)}
                role={"img"}
              />
            ),

            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  topBarWithLogo: ["topBarWithLogo", "button", "mobileMenu", "freeBox"],
  button: ["button", "mobileMenu"],
  mobileMenu: ["mobileMenu"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  topBarWithLogo: "div";
  button: "button";
  mobileMenu: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopBarOnBoarding__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopBarOnBoarding__VariantsArgs;
    args?: PlasmicTopBarOnBoarding__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTopBarOnBoarding__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopBarOnBoarding__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTopBarOnBoarding__ArgProps,
      internalVariantPropNames: PlasmicTopBarOnBoarding__VariantProps
    });

    return PlasmicTopBarOnBoarding__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "topBarWithLogo") {
    func.displayName = "PlasmicTopBarOnBoarding";
  } else {
    func.displayName = `PlasmicTopBarOnBoarding.${nodeName}`;
  }
  return func;
}

export const PlasmicTopBarOnBoarding = Object.assign(
  // Top-level PlasmicTopBarOnBoarding renders the root element
  makeNodeComponent("topBarWithLogo"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    mobileMenu: makeNodeComponent("mobileMenu"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTopBarOnBoarding
    internalVariantProps: PlasmicTopBarOnBoarding__VariantProps,
    internalArgProps: PlasmicTopBarOnBoarding__ArgProps
  }
);

export default PlasmicTopBarOnBoarding;
/* prettier-ignore-end */