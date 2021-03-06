// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: kwyrWxlOQ3
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
import StatWidgetCardTop from "../../StatWidgetCardTop"; // plasmic-import: tLe-NrqXMX/component
import StatCardTitle from "../../StatCardTitle"; // plasmic-import: 7WRBgNlgYi/component
import Button from "../../Button"; // plasmic-import: iZavS5akl9G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicStatInventory.module.css"; // plasmic-import: kwyrWxlOQ3/css

import AppIcons10Icon from "./icons/PlasmicIcon__AppIcons10"; // plasmic-import: DmM9a4tknDU/icon
import LineIcon from "./icons/PlasmicIcon__Line"; // plasmic-import: aQ7cQkdB4R/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: dtW5sCNu7WP/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: zGfmmTFBuGj/icon

export type PlasmicStatInventory__VariantMembers = {};

export type PlasmicStatInventory__VariantsArgs = {};
type VariantPropType = keyof PlasmicStatInventory__VariantsArgs;
export const PlasmicStatInventory__VariantProps = new Array<VariantPropType>();

export type PlasmicStatInventory__ArgsType = {
  title?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicStatInventory__ArgsType;
export const PlasmicStatInventory__ArgProps = new Array<ArgPropType>(
  "title",
  "slot"
);

export type PlasmicStatInventory__OverridesType = {
  statCard?: p.Flex<"div">;
  statWidgetCardTop?: p.Flex<typeof StatWidgetCardTop>;
  statCardTitle?: p.Flex<typeof StatCardTitle>;
  totalOrders?: p.Flex<"h2">;
  productIcon?: p.Flex<"svg">;
  svg?: p.Flex<"svg">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultStatInventoryProps {
  title?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicStatInventory__RenderFunc(props: {
  variants: PlasmicStatInventory__VariantsArgs;
  args: PlasmicStatInventory__ArgsType;
  overrides: PlasmicStatInventory__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"statCard"}
      data-plasmic-override={overrides.statCard}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.statCard
      )}
    >
      {true ? (
        <StatWidgetCardTop
          data-plasmic-name={"statWidgetCardTop"}
          data-plasmic-override={overrides.statWidgetCardTop}
          className={classNames("__wab_instance", sty.statWidgetCardTop)}
        >
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x38PZ
              )}
            >
              {"Orders by Channel"}
            </div>
          ) : null}
        </StatWidgetCardTop>
      ) : null}

      <StatCardTitle
        data-plasmic-name={"statCardTitle"}
        data-plasmic-override={overrides.statCardTitle}
        className={classNames("__wab_instance", sty.statCardTitle)}
        title={p.renderPlasmicSlot({
          defaultContents: "In Stock",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      />

      <h2
        data-plasmic-name={"totalOrders"}
        data-plasmic-override={overrides.totalOrders}
        className={classNames(projectcss.all, projectcss.h2, sty.totalOrders)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "63,258",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </h2>

      <div className={classNames(projectcss.all, sty.freeBox__xkYmH)}>
        <AppIcons10Icon
          data-plasmic-name={"productIcon"}
          data-plasmic-override={overrides.productIcon}
          className={classNames(projectcss.all, sty.productIcon)}
          role={"img"}
        />
      </div>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__v7C1A)}>
          <LineIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__vkZdz)}>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"link" as const}
              showEndIcon={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ezMf
                )}
              >
                {"View All"}
              </div>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  statCard: [
    "statCard",
    "statWidgetCardTop",
    "statCardTitle",
    "totalOrders",
    "productIcon",
    "svg",
    "button"
  ],
  statWidgetCardTop: ["statWidgetCardTop"],
  statCardTitle: ["statCardTitle"],
  totalOrders: ["totalOrders"],
  productIcon: ["productIcon"],
  svg: ["svg"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  statCard: "div";
  statWidgetCardTop: typeof StatWidgetCardTop;
  statCardTitle: typeof StatCardTitle;
  totalOrders: "h2";
  productIcon: "svg";
  svg: "svg";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStatInventory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStatInventory__VariantsArgs;
    args?: PlasmicStatInventory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStatInventory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStatInventory__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicStatInventory__ArgProps,
      internalVariantPropNames: PlasmicStatInventory__VariantProps
    });

    return PlasmicStatInventory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "statCard") {
    func.displayName = "PlasmicStatInventory";
  } else {
    func.displayName = `PlasmicStatInventory.${nodeName}`;
  }
  return func;
}

export const PlasmicStatInventory = Object.assign(
  // Top-level PlasmicStatInventory renders the root element
  makeNodeComponent("statCard"),
  {
    // Helper components rendering sub-elements
    statWidgetCardTop: makeNodeComponent("statWidgetCardTop"),
    statCardTitle: makeNodeComponent("statCardTitle"),
    totalOrders: makeNodeComponent("totalOrders"),
    productIcon: makeNodeComponent("productIcon"),
    svg: makeNodeComponent("svg"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicStatInventory
    internalVariantProps: PlasmicStatInventory__VariantProps,
    internalArgProps: PlasmicStatInventory__ArgProps
  }
);

export default PlasmicStatInventory;
/* prettier-ignore-end */
