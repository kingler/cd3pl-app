// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: MaomdnhqAMH
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
import MenuItemComponent from "../../MenuItemComponent"; // plasmic-import: npcGRLM8U0/component
import MenuIcon from "../../MenuIcon"; // plasmic-import: 6rUEUjk3c5/component

import {
  UnnamedGlobalGroupOfVariantsValue,
  useUnnamedGlobalGroupOfVariants
} from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: 6kh8yHmGU7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicMainNavMenuComponent.module.css"; // plasmic-import: MaomdnhqAMH/css

import AppIcons6Icon from "./icons/PlasmicIcon__AppIcons6"; // plasmic-import: E6OUhK5mJ0/icon
import AppIcons7Icon from "./icons/PlasmicIcon__AppIcons7"; // plasmic-import: CWTyA7AvHz/icon
import AppIcons8Icon from "./icons/PlasmicIcon__AppIcons8"; // plasmic-import: 0la5d7N-9dr/icon
import AppIcons16Icon from "./icons/PlasmicIcon__AppIcons16"; // plasmic-import: SGshoFEh9-/icon
import AppIcons10Icon from "./icons/PlasmicIcon__AppIcons10"; // plasmic-import: DmM9a4tknDU/icon
import AppIcons11Icon from "./icons/PlasmicIcon__AppIcons11"; // plasmic-import: vIWyRptZ5vF/icon
import AppIcons12Icon from "./icons/PlasmicIcon__AppIcons12"; // plasmic-import: C_sA2mEQFKR/icon
import AppIcons14Icon from "./icons/PlasmicIcon__AppIcons14"; // plasmic-import: YWYHkOFwK8e/icon
import AppIcons13Icon from "./icons/PlasmicIcon__AppIcons13"; // plasmic-import: PJ9tdiTN60x/icon
import AppIcons15Icon from "./icons/PlasmicIcon__AppIcons15"; // plasmic-import: dMJucnoKZfD/icon

export type PlasmicMainNavMenuComponent__VariantMembers = {
  isCollapsed: "isCollapsed";
};

export type PlasmicMainNavMenuComponent__VariantsArgs = {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
};

type VariantPropType = keyof PlasmicMainNavMenuComponent__VariantsArgs;
export const PlasmicMainNavMenuComponent__VariantProps =
  new Array<VariantPropType>("isCollapsed");

export type PlasmicMainNavMenuComponent__ArgsType = {};
type ArgPropType = keyof PlasmicMainNavMenuComponent__ArgsType;
export const PlasmicMainNavMenuComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicMainNavMenuComponent__OverridesType = {
  root?: p.Flex<"div">;
  dashboardLink?: p.Flex<typeof MenuItemComponent>;
  commerceLink?: p.Flex<typeof MenuItemComponent>;
  activityFeedLink?: p.Flex<typeof MenuItemComponent>;
  ordersLink?: p.Flex<typeof MenuItemComponent>;
  productsLink?: p.Flex<typeof MenuItemComponent>;
  inventoryLink?: p.Flex<typeof MenuItemComponent>;
  purchaseOrders?: p.Flex<typeof MenuItemComponent>;
  projects?: p.Flex<typeof MenuItemComponent>;
  suppliers?: p.Flex<typeof MenuItemComponent>;
  settings?: p.Flex<typeof MenuItemComponent>;
};

export interface DefaultMainNavMenuComponentProps {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
  className?: string;
}

function PlasmicMainNavMenuComponent__RenderFunc(props: {
  variants: PlasmicMainNavMenuComponent__VariantsArgs;
  args: PlasmicMainNavMenuComponent__ArgsType;
  overrides: PlasmicMainNavMenuComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    true ? (
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
          sty.root,
          {
            [sty.rootisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          }
        )}
      >
        <MenuItemComponent
          data-plasmic-name={"dashboardLink"}
          data-plasmic-override={overrides.dashboardLink}
          className={classNames("__wab_instance", sty.dashboardLink, {
            [sty.dashboardLinkglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
              hasVariant(
                globalVariants,
                "unnamedGlobalGroupOfVariants",
                "unnamedVariant"
              ),
            [sty.dashboardLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          selected={true}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7ZkBq,
                  {
                    [sty.textisCollapsed___7ZkBqCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Dashboard"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__hrhKo)}
          >
            <AppIcons6Icon
              className={classNames(projectcss.all, sty.svg__thRno)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"commerceLink"}
          data-plasmic-override={overrides.commerceLink}
          className={classNames("__wab_instance", sty.commerceLink, {
            [sty.commerceLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iDnu,
                  {
                    [sty.textisCollapsed__iDnuCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Commerce"}
              </div>
            ) : null
          }
        />

        <MenuItemComponent
          data-plasmic-name={"activityFeedLink"}
          data-plasmic-override={overrides.activityFeedLink}
          className={classNames("__wab_instance", sty.activityFeedLink, {
            [sty.activityFeedLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vYM9,
                  {
                    [sty.textisCollapsed__vYM9Cvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Activity"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__yAgxV)}
          >
            <AppIcons8Icon
              className={classNames(projectcss.all, sty.svg__qDm4G)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"ordersLink"}
          data-plasmic-override={overrides.ordersLink}
          className={classNames("__wab_instance", sty.ordersLink, {
            [sty.ordersLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zhbt,
                  {
                    [sty.textisCollapsed__zhbtCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Orders"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__xhSbD)}
          >
            <AppIcons16Icon
              className={classNames(projectcss.all, sty.svg__mPcgV)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"productsLink"}
          data-plasmic-override={overrides.productsLink}
          className={classNames("__wab_instance", sty.productsLink, {
            [sty.productsLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__knYo2,
                  {
                    [sty.textisCollapsed__knYo2Cvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Products"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__y1J9E)}
          >
            <AppIcons10Icon
              className={classNames(projectcss.all, sty.svg__f6IU6)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"inventoryLink"}
          data-plasmic-override={overrides.inventoryLink}
          className={classNames("__wab_instance", sty.inventoryLink, {
            [sty.inventoryLinkisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qU8So,
                  {
                    [sty.textisCollapsed__qU8SoCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Inventory"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__kOygx)}
          >
            <AppIcons11Icon
              className={classNames(projectcss.all, sty.svg__roNf)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"purchaseOrders"}
          data-plasmic-override={overrides.purchaseOrders}
          className={classNames("__wab_instance", sty.purchaseOrders, {
            [sty.purchaseOrdersisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lpPTs,
                  {
                    [sty.textisCollapsed__lpPTsCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Purchase Orders"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__fPb8P)}
          >
            <AppIcons12Icon
              className={classNames(projectcss.all, sty.svg__uj8Sd)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"projects"}
          data-plasmic-override={overrides.projects}
          className={classNames("__wab_instance", sty.projects, {
            [sty.projectsisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ueYUf,
                  {
                    [sty.textisCollapsed__ueYUfCvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Projects"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon___5HNc1)}
          >
            <AppIcons14Icon
              className={classNames(projectcss.all, sty.svg__v7Sxq)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"suppliers"}
          data-plasmic-override={overrides.suppliers}
          className={classNames("__wab_instance", sty.suppliers, {
            [sty.suppliersisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sqc2A,
                  {
                    [sty.textisCollapsed__sqc2ACvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Suppliers"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon__fdm32)}
          >
            <AppIcons13Icon
              className={classNames(projectcss.all, sty.svg__i0V6A)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>

        <MenuItemComponent
          data-plasmic-name={"settings"}
          data-plasmic-override={overrides.settings}
          className={classNames("__wab_instance", sty.settings, {
            [sty.settingsisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          slot={
            (
              hasVariant(variants, "isCollapsed", "isCollapsed") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7Qsv4,
                  {
                    [sty.textisCollapsed___7Qsv4Cvd2]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  }
                )}
              >
                {"Settings"}
              </div>
            ) : null
          }
        >
          <MenuIcon
            className={classNames("__wab_instance", sty.menuIcon___2BtC)}
          >
            <AppIcons15Icon
              className={classNames(projectcss.all, sty.svg__baScs)}
              role={"img"}
            />
          </MenuIcon>
        </MenuItemComponent>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "dashboardLink",
    "commerceLink",
    "activityFeedLink",
    "ordersLink",
    "productsLink",
    "inventoryLink",
    "purchaseOrders",
    "projects",
    "suppliers",
    "settings"
  ],
  dashboardLink: ["dashboardLink"],
  commerceLink: ["commerceLink"],
  activityFeedLink: ["activityFeedLink"],
  ordersLink: ["ordersLink"],
  productsLink: ["productsLink"],
  inventoryLink: ["inventoryLink"],
  purchaseOrders: ["purchaseOrders"],
  projects: ["projects"],
  suppliers: ["suppliers"],
  settings: ["settings"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  dashboardLink: typeof MenuItemComponent;
  commerceLink: typeof MenuItemComponent;
  activityFeedLink: typeof MenuItemComponent;
  ordersLink: typeof MenuItemComponent;
  productsLink: typeof MenuItemComponent;
  inventoryLink: typeof MenuItemComponent;
  purchaseOrders: typeof MenuItemComponent;
  projects: typeof MenuItemComponent;
  suppliers: typeof MenuItemComponent;
  settings: typeof MenuItemComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainNavMenuComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainNavMenuComponent__VariantsArgs;
    args?: PlasmicMainNavMenuComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMainNavMenuComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMainNavMenuComponent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainNavMenuComponent__ArgProps,
      internalVariantPropNames: PlasmicMainNavMenuComponent__VariantProps
    });

    return PlasmicMainNavMenuComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainNavMenuComponent";
  } else {
    func.displayName = `PlasmicMainNavMenuComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicMainNavMenuComponent = Object.assign(
  // Top-level PlasmicMainNavMenuComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dashboardLink: makeNodeComponent("dashboardLink"),
    commerceLink: makeNodeComponent("commerceLink"),
    activityFeedLink: makeNodeComponent("activityFeedLink"),
    ordersLink: makeNodeComponent("ordersLink"),
    productsLink: makeNodeComponent("productsLink"),
    inventoryLink: makeNodeComponent("inventoryLink"),
    purchaseOrders: makeNodeComponent("purchaseOrders"),
    projects: makeNodeComponent("projects"),
    suppliers: makeNodeComponent("suppliers"),
    settings: makeNodeComponent("settings"),

    // Metadata about props expected for PlasmicMainNavMenuComponent
    internalVariantProps: PlasmicMainNavMenuComponent__VariantProps,
    internalArgProps: PlasmicMainNavMenuComponent__ArgProps
  }
);

export default PlasmicMainNavMenuComponent;
/* prettier-ignore-end */
