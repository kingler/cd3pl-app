// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: 6cCQxsGyn8Z
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
import Select from "../../Select"; // plasmic-import: DitIOB-YbI8/component
import Select__Option from "../../Select__Option"; // plasmic-import: S75avsPWPCJ/component
import MainNavMenuComponent from "../../MainNavMenuComponent"; // plasmic-import: MaomdnhqAMH/component
import SecondaryMenu from "../../SecondaryMenu"; // plasmic-import: 4iDpH75bAc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicSidePanel.module.css"; // plasmic-import: 6cCQxsGyn8Z/css

import Property1ClubDebutLogosvgIcon from "./icons/PlasmicIcon__Property1ClubDebutLogosvg"; // plasmic-import: fwPjlV3kW/icon
import Logo2Icon from "./icons/PlasmicIcon__Logo2"; // plasmic-import: _T9L2CLNkap/icon
import ExpandandcollapseIconsvgIcon from "./icons/PlasmicIcon__ExpandandcollapseIconsvg"; // plasmic-import: IBkYg-I0Y/icon
import MaskIcon from "./icons/PlasmicIcon__Mask"; // plasmic-import: 6QvyLoSIFTo/icon
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: WLLaN5a79/icon

export type PlasmicSidePanel__VariantMembers = {
  isCollapsed: "isCollapsed";
};

export type PlasmicSidePanel__VariantsArgs = {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
};

type VariantPropType = keyof PlasmicSidePanel__VariantsArgs;
export const PlasmicSidePanel__VariantProps = new Array<VariantPropType>(
  "isCollapsed"
);

export type PlasmicSidePanel__ArgsType = {};
type ArgPropType = keyof PlasmicSidePanel__ArgsType;
export const PlasmicSidePanel__ArgProps = new Array<ArgPropType>();

export type PlasmicSidePanel__OverridesType = {
  root?: p.Flex<"div">;
  topSection?: p.Flex<"div">;
  cd3PlLogo2?: p.Flex<"svg">;
  cd3PlLogo?: p.Flex<"svg">;
  collapsPanelButton?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  switchContextComponent?: p.Flex<typeof Select>;
  dropdownIcon?: p.Flex<"svg">;
  mainNavMenuComponent?: p.Flex<typeof MainNavMenuComponent>;
  secondaryMenu?: p.Flex<typeof SecondaryMenu>;
};

export interface DefaultSidePanelProps {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
  className?: string;
}

function PlasmicSidePanel__RenderFunc(props: {
  variants: PlasmicSidePanel__VariantsArgs;
  args: PlasmicSidePanel__ArgsType;
  overrides: PlasmicSidePanel__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
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
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"topSection"}
          data-plasmic-override={overrides.topSection}
          hasGap={true}
          className={classNames(projectcss.all, sty.topSection, {
            [sty.topSectionisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
        >
          {true ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__bzEnm, {
                [sty.freeBoxisCollapsed__bzEnmuNv3L]: hasVariant(
                  variants,
                  "isCollapsed",
                  "isCollapsed"
                )
              })}
            >
              {true ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__qDZn, {
                    [sty.freeBoxisCollapsed__qDZnuNv3L]: hasVariant(
                      variants,
                      "isCollapsed",
                      "isCollapsed"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "isCollapsed", "isCollapsed")
                      ? true
                      : true
                  ) ? (
                    <Property1ClubDebutLogosvgIcon
                      data-plasmic-name={"cd3PlLogo2"}
                      data-plasmic-override={overrides.cd3PlLogo2}
                      className={classNames(projectcss.all, sty.cd3PlLogo2, {
                        [sty.cd3PlLogo2isCollapsed]: hasVariant(
                          variants,
                          "isCollapsed",
                          "isCollapsed"
                        )
                      })}
                      role={"img"}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "isCollapsed", "isCollapsed")
                      ? true
                      : true
                  ) ? (
                    <Logo2Icon
                      data-plasmic-name={"cd3PlLogo"}
                      data-plasmic-override={overrides.cd3PlLogo}
                      className={classNames(projectcss.all, sty.cd3PlLogo, {
                        [sty.cd3PlLogoisCollapsed]: hasVariant(
                          variants,
                          "isCollapsed",
                          "isCollapsed"
                        )
                      })}
                      role={"img"}
                    />
                  ) : null}
                </div>
              ) : null}
              {true ? (
                <button
                  data-plasmic-name={"collapsPanelButton"}
                  data-plasmic-override={overrides.collapsPanelButton}
                  {...{ "On Click": "isCollapsed" as const }}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    sty.collapsPanelButton,
                    "expandButton" as const,
                    {
                      [sty.collapsPanelButtonisCollapsed]: hasVariant(
                        variants,
                        "isCollapsed",
                        "isCollapsed"
                      )
                    }
                  )}
                >
                  <ExpandandcollapseIconsvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg, {
                      [sty.svgisCollapsed]: hasVariant(
                        variants,
                        "isCollapsed",
                        "isCollapsed"
                      )
                    })}
                    role={"img"}
                  />
                </button>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <Select
              data-plasmic-name={"switchContextComponent"}
              data-plasmic-override={overrides.switchContextComponent}
              className={classNames(
                "__wab_instance",
                sty.switchContextComponent,
                {
                  [sty.switchContextComponentisCollapsed]: hasVariant(
                    variants,
                    "isCollapsed",
                    "isCollapsed"
                  )
                }
              )}
              dropdownIcon={
                (
                  hasVariant(variants, "isCollapsed", "isCollapsed")
                    ? true
                    : true
                ) ? (
                  <MaskIcon
                    data-plasmic-name={"dropdownIcon"}
                    data-plasmic-override={overrides.dropdownIcon}
                    className={classNames(projectcss.all, sty.dropdownIcon, {
                      [sty.dropdownIconisCollapsed]: hasVariant(
                        variants,
                        "isCollapsed",
                        "isCollapsed"
                      )
                    })}
                    role={"img"}
                  />
                ) : null
              }
              placeholder={
                (
                  hasVariant(variants, "isCollapsed", "isCollapsed")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fjiIt,
                      {
                        [sty.textisCollapsed__fjiItuNv3L]: hasVariant(
                          variants,
                          "isCollapsed",
                          "isCollapsed"
                        )
                      }
                    )}
                  >
                    {"Basics Fashion Inc..."}
                  </div>
                ) : null
              }
              selectedContent={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zoeLe,
                    {
                      [sty.textisCollapsed__zoeLeuNv3L]: hasVariant(
                        variants,
                        "isCollapsed",
                        "isCollapsed"
                      )
                    }
                  )}
                >
                  {"Selected"}
                </div>
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__yh6Z, {
            [sty.freeBoxisCollapsed__yh6ZuNv3L]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox___4Z9DV, {
              [sty.freeBoxisCollapsed___4Z9DVuNv3L]: hasVariant(
                variants,
                "isCollapsed",
                "isCollapsed"
              )
            })}
          >
            <MainNavMenuComponent
              data-plasmic-name={"mainNavMenuComponent"}
              data-plasmic-override={overrides.mainNavMenuComponent}
              className={classNames(
                "__wab_instance",
                sty.mainNavMenuComponent,
                {
                  [sty.mainNavMenuComponentisCollapsed]: hasVariant(
                    variants,
                    "isCollapsed",
                    "isCollapsed"
                  )
                }
              )}
              isCollapsed={
                hasVariant(variants, "isCollapsed", "isCollapsed")
                  ? true
                  : undefined
              }
            />
          </div>
        </div>
      ) : null}
      {true ? (
        <SecondaryMenu
          data-plasmic-name={"secondaryMenu"}
          data-plasmic-override={overrides.secondaryMenu}
          className={classNames("__wab_instance", sty.secondaryMenu, {
            [sty.secondaryMenuisCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            )
          })}
          isCollapsed={
            hasVariant(variants, "isCollapsed", "isCollapsed")
              ? true
              : undefined
          }
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topSection",
    "cd3PlLogo2",
    "cd3PlLogo",
    "collapsPanelButton",
    "svg",
    "switchContextComponent",
    "dropdownIcon",
    "mainNavMenuComponent",
    "secondaryMenu"
  ],
  topSection: [
    "topSection",
    "cd3PlLogo2",
    "cd3PlLogo",
    "collapsPanelButton",
    "svg",
    "switchContextComponent",
    "dropdownIcon"
  ],
  cd3PlLogo2: ["cd3PlLogo2"],
  cd3PlLogo: ["cd3PlLogo"],
  collapsPanelButton: ["collapsPanelButton", "svg"],
  svg: ["svg"],
  switchContextComponent: ["switchContextComponent", "dropdownIcon"],
  dropdownIcon: ["dropdownIcon"],
  mainNavMenuComponent: ["mainNavMenuComponent"],
  secondaryMenu: ["secondaryMenu"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topSection: "div";
  cd3PlLogo2: "svg";
  cd3PlLogo: "svg";
  collapsPanelButton: "button";
  svg: "svg";
  switchContextComponent: typeof Select;
  dropdownIcon: "svg";
  mainNavMenuComponent: typeof MainNavMenuComponent;
  secondaryMenu: typeof SecondaryMenu;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidePanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidePanel__VariantsArgs;
    args?: PlasmicSidePanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidePanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidePanel__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidePanel__ArgProps,
      internalVariantPropNames: PlasmicSidePanel__VariantProps
    });

    return PlasmicSidePanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidePanel";
  } else {
    func.displayName = `PlasmicSidePanel.${nodeName}`;
  }
  return func;
}

export const PlasmicSidePanel = Object.assign(
  // Top-level PlasmicSidePanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topSection: makeNodeComponent("topSection"),
    cd3PlLogo2: makeNodeComponent("cd3PlLogo2"),
    cd3PlLogo: makeNodeComponent("cd3PlLogo"),
    collapsPanelButton: makeNodeComponent("collapsPanelButton"),
    svg: makeNodeComponent("svg"),
    switchContextComponent: makeNodeComponent("switchContextComponent"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    mainNavMenuComponent: makeNodeComponent("mainNavMenuComponent"),
    secondaryMenu: makeNodeComponent("secondaryMenu"),

    // Metadata about props expected for PlasmicSidePanel
    internalVariantProps: PlasmicSidePanel__VariantProps,
    internalArgProps: PlasmicSidePanel__ArgProps
  }
);

export default PlasmicSidePanel;
/* prettier-ignore-end */
