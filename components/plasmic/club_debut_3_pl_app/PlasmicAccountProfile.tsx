// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: gg4CkjppNk
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicAccountProfile.module.css"; // plasmic-import: gg4CkjppNk/css

export type PlasmicAccountProfile__VariantMembers = {};

export type PlasmicAccountProfile__VariantsArgs = {};
type VariantPropType = keyof PlasmicAccountProfile__VariantsArgs;
export const PlasmicAccountProfile__VariantProps = new Array<VariantPropType>();

export type PlasmicAccountProfile__ArgsType = {};
type ArgPropType = keyof PlasmicAccountProfile__ArgsType;
export const PlasmicAccountProfile__ArgProps = new Array<ArgPropType>();

export type PlasmicAccountProfile__OverridesType = {
  accountProfilePage?: p.Flex<"div">;
};

export interface DefaultAccountProfileProps {}

function PlasmicAccountProfile__RenderFunc(props: {
  variants: PlasmicAccountProfile__VariantsArgs;
  args: PlasmicAccountProfile__ArgsType;
  overrides: PlasmicAccountProfile__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"accountProfilePage"}
          data-plasmic-override={overrides.accountProfilePage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.accountProfilePage
          )}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  accountProfilePage: ["accountProfilePage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  accountProfilePage: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccountProfile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccountProfile__VariantsArgs;
    args?: PlasmicAccountProfile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccountProfile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccountProfile__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAccountProfile__ArgProps,
      internalVariantPropNames: PlasmicAccountProfile__VariantProps
    });

    return PlasmicAccountProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "accountProfilePage") {
    func.displayName = "PlasmicAccountProfile";
  } else {
    func.displayName = `PlasmicAccountProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicAccountProfile = Object.assign(
  // Top-level PlasmicAccountProfile renders the root element
  makeNodeComponent("accountProfilePage"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAccountProfile
    internalVariantProps: PlasmicAccountProfile__VariantProps,
    internalArgProps: PlasmicAccountProfile__ArgProps
  }
);

export default PlasmicAccountProfile;
/* prettier-ignore-end */