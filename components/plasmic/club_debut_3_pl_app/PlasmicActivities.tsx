// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: ujMYyQ6ohT
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
import sty from "./PlasmicActivities.module.css"; // plasmic-import: ujMYyQ6ohT/css

export type PlasmicActivities__VariantMembers = {};

export type PlasmicActivities__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivities__VariantsArgs;
export const PlasmicActivities__VariantProps = new Array<VariantPropType>();

export type PlasmicActivities__ArgsType = {};
type ArgPropType = keyof PlasmicActivities__ArgsType;
export const PlasmicActivities__ArgProps = new Array<ArgPropType>();

export type PlasmicActivities__OverridesType = {
  activitiesPage?: p.Flex<"div">;
};

export interface DefaultActivitiesProps {}

function PlasmicActivities__RenderFunc(props: {
  variants: PlasmicActivities__VariantsArgs;
  args: PlasmicActivities__ArgsType;
  overrides: PlasmicActivities__OverridesType;

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
          data-plasmic-name={"activitiesPage"}
          data-plasmic-override={overrides.activitiesPage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.activitiesPage
          )}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  activitiesPage: ["activitiesPage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  activitiesPage: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivities__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivities__VariantsArgs;
    args?: PlasmicActivities__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivities__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActivities__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActivities__ArgProps,
      internalVariantPropNames: PlasmicActivities__VariantProps
    });

    return PlasmicActivities__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "activitiesPage") {
    func.displayName = "PlasmicActivities";
  } else {
    func.displayName = `PlasmicActivities.${nodeName}`;
  }
  return func;
}

export const PlasmicActivities = Object.assign(
  // Top-level PlasmicActivities renders the root element
  makeNodeComponent("activitiesPage"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicActivities
    internalVariantProps: PlasmicActivities__VariantProps,
    internalArgProps: PlasmicActivities__ArgProps
  }
);

export default PlasmicActivities;
/* prettier-ignore-end */
