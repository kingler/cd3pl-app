// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: h3eELHaDYa
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
import SidePanel from "../../SidePanel"; // plasmic-import: 6cCQxsGyn8Z/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicCustomers.module.css"; // plasmic-import: h3eELHaDYa/css

export type PlasmicCustomers__VariantMembers = {};

export type PlasmicCustomers__VariantsArgs = {};
type VariantPropType = keyof PlasmicCustomers__VariantsArgs;
export const PlasmicCustomers__VariantProps = new Array<VariantPropType>();

export type PlasmicCustomers__ArgsType = {};
type ArgPropType = keyof PlasmicCustomers__ArgsType;
export const PlasmicCustomers__ArgProps = new Array<ArgPropType>();

export type PlasmicCustomers__OverridesType = {
  customersPage?: p.Flex<"div">;
  sidePanel?: p.Flex<typeof SidePanel>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCustomersProps {}

function PlasmicCustomers__RenderFunc(props: {
  variants: PlasmicCustomers__VariantsArgs;
  args: PlasmicCustomers__ArgsType;
  overrides: PlasmicCustomers__OverridesType;

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
          data-plasmic-name={"customersPage"}
          data-plasmic-override={overrides.customersPage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.customersPage
          )}
        >
          <SidePanel
            data-plasmic-name={"sidePanel"}
            data-plasmic-override={overrides.sidePanel}
            className={classNames("__wab_instance", sty.sidePanel)}
          />

          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  customersPage: ["customersPage", "sidePanel", "freeBox"],
  sidePanel: ["sidePanel"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  customersPage: "div";
  sidePanel: typeof SidePanel;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCustomers__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCustomers__VariantsArgs;
    args?: PlasmicCustomers__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCustomers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCustomers__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCustomers__ArgProps,
      internalVariantPropNames: PlasmicCustomers__VariantProps
    });

    return PlasmicCustomers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "customersPage") {
    func.displayName = "PlasmicCustomers";
  } else {
    func.displayName = `PlasmicCustomers.${nodeName}`;
  }
  return func;
}

export const PlasmicCustomers = Object.assign(
  // Top-level PlasmicCustomers renders the root element
  makeNodeComponent("customersPage"),
  {
    // Helper components rendering sub-elements
    sidePanel: makeNodeComponent("sidePanel"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCustomers
    internalVariantProps: PlasmicCustomers__VariantProps,
    internalArgProps: PlasmicCustomers__ArgProps
  }
);

export default PlasmicCustomers;
/* prettier-ignore-end */
