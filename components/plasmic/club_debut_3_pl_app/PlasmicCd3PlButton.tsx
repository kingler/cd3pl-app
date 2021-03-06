// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: fl4IwtHf9j
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
import sty from "./PlasmicCd3PlButton.module.css"; // plasmic-import: fl4IwtHf9j/css

import IcondownIconIcon from "./icons/PlasmicIcon__IcondownIcon"; // plasmic-import: 0-rTnaDj68/icon

export type PlasmicCd3PlButton__VariantMembers = {
  type: "primary" | "secondary" | "third";
  shadow: "farShadow" | "closeShadow";
};

export type PlasmicCd3PlButton__VariantsArgs = {
  type?: SingleChoiceArg<"primary" | "secondary" | "third">;
  shadow?: SingleChoiceArg<"farShadow" | "closeShadow">;
};

type VariantPropType = keyof PlasmicCd3PlButton__VariantsArgs;
export const PlasmicCd3PlButton__VariantProps = new Array<VariantPropType>(
  "type",
  "shadow"
);

export type PlasmicCd3PlButton__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCd3PlButton__ArgsType;
export const PlasmicCd3PlButton__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicCd3PlButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultCd3PlButtonProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  type?: SingleChoiceArg<"primary" | "secondary" | "third">;
  shadow?: SingleChoiceArg<"farShadow" | "closeShadow">;
  className?: string;
}

function PlasmicCd3PlButton__RenderFunc(props: {
  variants: PlasmicCd3PlButton__VariantsArgs;
  args: PlasmicCd3PlButton__ArgsType;
  overrides: PlasmicCd3PlButton__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___8KOz)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <IcondownIconIcon
                className={classNames(projectcss.all, sty.svg__fgGta)}
                role={"img"}
              />
            ),

            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
      ) : null}
      {p.renderPlasmicSlot({
        defaultContents: "Click Me",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrentype_primary]: hasVariant(
            variants,
            "type",
            "primary"
          ),
          [sty.slotTargetChildrentype_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          ),
          [sty.slotTargetChildrentype_third]: hasVariant(
            variants,
            "type",
            "third"
          )
        })
      })}

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__w6Xl)}>
          {true
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <IcondownIconIcon
                    className={classNames(projectcss.all, sty.svg___8HN6N)}
                    role={"img"}
                  />
                ),

                value: args.slot2,
                className: classNames(sty.slotTargetSlot2)
              })
            : null}
        </div>
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCd3PlButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCd3PlButton__VariantsArgs;
    args?: PlasmicCd3PlButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCd3PlButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCd3PlButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCd3PlButton__ArgProps,
      internalVariantPropNames: PlasmicCd3PlButton__VariantProps
    });

    return PlasmicCd3PlButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCd3PlButton";
  } else {
    func.displayName = `PlasmicCd3PlButton.${nodeName}`;
  }
  return func;
}

export const PlasmicCd3PlButton = Object.assign(
  // Top-level PlasmicCd3PlButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCd3PlButton
    internalVariantProps: PlasmicCd3PlButton__VariantProps,
    internalArgProps: PlasmicCd3PlButton__ArgProps
  }
);

export default PlasmicCd3PlButton;
/* prettier-ignore-end */
