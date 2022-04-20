// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: 2BUkOjXfTp
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
import sty from "./PlasmicPurchaseOrders.module.css"; // plasmic-import: 2BUkOjXfTp/css

export type PlasmicPurchaseOrders__VariantMembers = {};

export type PlasmicPurchaseOrders__VariantsArgs = {};
type VariantPropType = keyof PlasmicPurchaseOrders__VariantsArgs;
export const PlasmicPurchaseOrders__VariantProps = new Array<VariantPropType>();

export type PlasmicPurchaseOrders__ArgsType = {};
type ArgPropType = keyof PlasmicPurchaseOrders__ArgsType;
export const PlasmicPurchaseOrders__ArgProps = new Array<ArgPropType>();

export type PlasmicPurchaseOrders__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPurchaseOrdersProps {}

function PlasmicPurchaseOrders__RenderFunc(props: {
  variants: PlasmicPurchaseOrders__VariantsArgs;
  args: PlasmicPurchaseOrders__ArgsType;
  overrides: PlasmicPurchaseOrders__OverridesType;

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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPurchaseOrders__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPurchaseOrders__VariantsArgs;
    args?: PlasmicPurchaseOrders__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPurchaseOrders__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPurchaseOrders__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPurchaseOrders__ArgProps,
      internalVariantPropNames: PlasmicPurchaseOrders__VariantProps
    });

    return PlasmicPurchaseOrders__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPurchaseOrders";
  } else {
    func.displayName = `PlasmicPurchaseOrders.${nodeName}`;
  }
  return func;
}

export const PlasmicPurchaseOrders = Object.assign(
  // Top-level PlasmicPurchaseOrders renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPurchaseOrders
    internalVariantProps: PlasmicPurchaseOrders__VariantProps,
    internalArgProps: PlasmicPurchaseOrders__ArgProps
  }
);

export default PlasmicPurchaseOrders;
/* prettier-ignore-end */