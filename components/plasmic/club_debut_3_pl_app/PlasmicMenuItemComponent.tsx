// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: npcGRLM8U0
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
import MenuIcon from "../../MenuIcon"; // plasmic-import: 6rUEUjk3c5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicMenuItemComponent.module.css"; // plasmic-import: npcGRLM8U0/css

import AppIcons7Icon from "./icons/PlasmicIcon__AppIcons7"; // plasmic-import: CWTyA7AvHz/icon

export type PlasmicMenuItemComponent__VariantMembers = {
  selected: "selected";
};

export type PlasmicMenuItemComponent__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};

type VariantPropType = keyof PlasmicMenuItemComponent__VariantsArgs;
export const PlasmicMenuItemComponent__VariantProps =
  new Array<VariantPropType>("selected");

export type PlasmicMenuItemComponent__ArgsType = {
  slot?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMenuItemComponent__ArgsType;
export const PlasmicMenuItemComponent__ArgProps = new Array<ArgPropType>(
  "slot",
  "children"
);

export type PlasmicMenuItemComponent__OverridesType = {
  menuLink?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultMenuItemComponentProps {
  slot?: React.ReactNode;
  children?: React.ReactNode;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

function PlasmicMenuItemComponent__RenderFunc(props: {
  variants: PlasmicMenuItemComponent__VariantsArgs;
  args: PlasmicMenuItemComponent__ArgsType;
  overrides: PlasmicMenuItemComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"menuLink"}
      data-plasmic-override={overrides.menuLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.menuLink,
        { [sty.menuLinkselected]: hasVariant(variants, "selected", "selected") }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__aw2So)}
          >
            <AppIcons7Icon
              className={classNames(projectcss.all, sty.svg___0WTc2)}
              role={"img"}
            />
          </MenuIcon>
        ),

        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrenselected]: hasVariant(
            variants,
            "selected",
            "selected"
          )
        })
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Dashboard",
          value: args.slot,
          className: classNames(sty.slotTargetSlot, {
            [sty.slotTargetSlotselected]: hasVariant(
              variants,
              "selected",
              "selected"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menuLink: ["menuLink", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  menuLink: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItemComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItemComponent__VariantsArgs;
    args?: PlasmicMenuItemComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItemComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuItemComponent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMenuItemComponent__ArgProps,
      internalVariantPropNames: PlasmicMenuItemComponent__VariantProps
    });

    return PlasmicMenuItemComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menuLink") {
    func.displayName = "PlasmicMenuItemComponent";
  } else {
    func.displayName = `PlasmicMenuItemComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItemComponent = Object.assign(
  // Top-level PlasmicMenuItemComponent renders the root element
  makeNodeComponent("menuLink"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMenuItemComponent
    internalVariantProps: PlasmicMenuItemComponent__VariantProps,
    internalArgProps: PlasmicMenuItemComponent__ArgProps
  }
);

export default PlasmicMenuItemComponent;
/* prettier-ignore-end */
