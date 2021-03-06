// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: LQpMEikr_v
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
import TopBar from "../../TopBar"; // plasmic-import: CBtIl4cHm9/component
import Button from "../../Button"; // plasmic-import: iZavS5akl9G/component
import StatsCardBasic from "../../StatsCardBasic"; // plasmic-import: V8KmQ7KGSy/component
import StatsCardDate from "../../StatsCardDate"; // plasmic-import: YFRpRP19Qn1/component
import OrderCell from "../../OrderCell"; // plasmic-import: gg3SzItfYc/component
import { SupabaseGridOrders } from "../../CodeComponents/DisplayCollections"; // plasmic-import: OJrt1N2HF8/codeComponent
import { SupabaseTextField } from "../../CodeComponents/DisplayCollections"; // plasmic-import: UPL8S5xm7b/codeComponent
import { SupabaseField } from "../../CodeComponents/DisplayCollections"; // plasmic-import: dLH3T0Cdyj/codeComponent

import { useScreenVariants as useScreenVariants_6JfnloVhzca } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6JfnloVhzca/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicOrders.module.css"; // plasmic-import: LQpMEikr_v/css

import CompnavBarlinkiconordersDarkIcon from "./icons/PlasmicIcon__CompnavBarlinkiconordersDark"; // plasmic-import: SgMwanWxm1/icon
import IcondownIconIcon from "./icons/PlasmicIcon__IcondownIcon"; // plasmic-import: 0-rTnaDj68/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: zGfmmTFBuGj/icon
import IconimportIconIcon from "./icons/PlasmicIcon__IconimportIcon"; // plasmic-import: kNFnVu4W7A/icon
import AppIcons5Icon from "./icons/PlasmicIcon__AppIcons5"; // plasmic-import: 7I9cVdZlI5O/icon

export type PlasmicOrders__VariantMembers = {};

export type PlasmicOrders__VariantsArgs = {};
type VariantPropType = keyof PlasmicOrders__VariantsArgs;
export const PlasmicOrders__VariantProps = new Array<VariantPropType>();

export type PlasmicOrders__ArgsType = {};
type ArgPropType = keyof PlasmicOrders__ArgsType;
export const PlasmicOrders__ArgProps = new Array<ArgPropType>();

export type PlasmicOrders__OverridesType = {
  ordersListPage?: p.Flex<"div">;
  layout?: p.Flex<"div">;
  sidePanel?: p.Flex<typeof SidePanel>;
  mainContent?: p.Flex<"div">;
  topBar?: p.Flex<typeof TopBar>;
  exportButton?: p.Flex<typeof Button>;
  importButton?: p.Flex<typeof Button>;
  statsCardDate?: p.Flex<typeof StatsCardDate>;
  supabaseGridOrders?: p.Flex<typeof SupabaseGridOrders>;
  supabaseTextField?: p.Flex<typeof SupabaseTextField>;
  supabaseField?: p.Flex<typeof SupabaseField>;
};

export interface DefaultOrdersProps {}

function PlasmicOrders__RenderFunc(props: {
  variants: PlasmicOrders__VariantsArgs;
  args: PlasmicOrders__ArgsType;
  overrides: PlasmicOrders__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6JfnloVhzca()
  });

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
          data-plasmic-name={"ordersListPage"}
          data-plasmic-override={overrides.ordersListPage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.ordersListPage
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"layout"}
              data-plasmic-override={overrides.layout}
              className={classNames(projectcss.all, sty.layout)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <SidePanel
                  data-plasmic-name={"sidePanel"}
                  data-plasmic-override={overrides.sidePanel}
                  className={classNames("__wab_instance", sty.sidePanel)}
                />
              ) : null}

              <div
                data-plasmic-name={"mainContent"}
                data-plasmic-override={overrides.mainContent}
                className={classNames(projectcss.all, sty.mainContent)}
              >
                {true ? (
                  <TopBar
                    data-plasmic-name={"topBar"}
                    data-plasmic-override={overrides.topBar}
                    className={classNames("__wab_instance", sty.topBar)}
                    exportButton={
                      <Button
                        data-plasmic-name={"exportButton"}
                        data-plasmic-override={overrides.exportButton}
                        className={classNames(
                          "__wab_instance",
                          sty.exportButton
                        )}
                        color={"link" as const}
                        showStartIcon={true}
                        startIcon={
                          <IcondownIconIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ua5Pe
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tNdjs
                          )}
                        >
                          {"Export"}
                        </div>
                      </Button>
                    }
                    importButton={
                      <Button
                        data-plasmic-name={"importButton"}
                        data-plasmic-override={overrides.importButton}
                        className={classNames(
                          "__wab_instance",
                          sty.importButton
                        )}
                        color={"link" as const}
                        showStartIcon={true}
                        startIcon={
                          <IconimportIconIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__sq4ED
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___4BsgS
                          )}
                        >
                          {"Import"}
                        </div>
                      </Button>
                    }
                  >
                    {"Orders"}
                  </TopBar>
                ) : null}

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2Y2CX)}
                >
                  <StatsCardBasic
                    className={classNames(
                      "__wab_instance",
                      sty.statsCardBasic___9DuUh
                    )}
                  />

                  <StatsCardDate
                    data-plasmic-name={"statsCardDate"}
                    data-plasmic-override={overrides.statsCardDate}
                    className={classNames("__wab_instance", sty.statsCardDate)}
                  />

                  <StatsCardBasic
                    className={classNames(
                      "__wab_instance",
                      sty.statsCardBasic__zcjEc
                    )}
                    totalRevenue={"$1.8 mil"}
                  />

                  <StatsCardBasic
                    className={classNames(
                      "__wab_instance",
                      sty.statsCardBasic__gNgSo
                    )}
                    totalRevenue={"$1.8 mil"}
                  />
                </p.Stack>

                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sbhY)}
                  >
                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___1NWP
                        )}
                      >
                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__cvRDo
                          )}
                        />

                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__epQ2I
                          )}
                        />

                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__kzzeC
                          )}
                        />

                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__fFnOo
                          )}
                        />

                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__y2Voj
                          )}
                        />

                        <OrderCell
                          className={classNames(
                            "__wab_instance",
                            sty.orderCell__a98Fz
                          )}
                        />
                      </p.Stack>
                    ) : null}

                    <SupabaseGridOrders
                      data-plasmic-name={"supabaseGridOrders"}
                      data-plasmic-override={overrides.supabaseGridOrders}
                      className={
                        ("" as const) +
                        classNames("__wab_instance", sty.supabaseGridOrders)
                      }
                      columnGap={16 as const}
                      loading={
                        true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wN8FF
                            )}
                          >
                            {"Loading..."}
                          </div>
                        ) : null
                      }
                      numColumns={4 as const}
                      rowGap={16 as const}
                      tableColumns={[
                        "customer_name",
                        "total_payment",
                        "customer_imageUrl"
                      ]}
                      tableName={"Orders" as const}
                    >
                      <SupabaseTextField
                        data-plasmic-name={"supabaseTextField"}
                        data-plasmic-override={overrides.supabaseTextField}
                        className={
                          ("" as const) +
                          classNames("__wab_instance", sty.supabaseTextField)
                        }
                        name={"{{row.customer_id.row.first_name}}" as const}
                      />

                      <SupabaseField
                        data-plasmic-name={"supabaseField"}
                        data-plasmic-override={overrides.supabaseField}
                        className={
                          ("" as const) +
                          classNames("__wab_instance", sty.supabaseField)
                        }
                        selector={"{{row.customer_id.first_name}}" as const}
                        type={"text" as const}
                      />
                    </SupabaseGridOrders>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ordersListPage: [
    "ordersListPage",
    "layout",
    "sidePanel",
    "mainContent",
    "topBar",
    "exportButton",
    "importButton",
    "statsCardDate",
    "supabaseGridOrders",
    "supabaseTextField",
    "supabaseField"
  ],
  layout: [
    "layout",
    "sidePanel",
    "mainContent",
    "topBar",
    "exportButton",
    "importButton",
    "statsCardDate",
    "supabaseGridOrders",
    "supabaseTextField",
    "supabaseField"
  ],
  sidePanel: ["sidePanel"],
  mainContent: [
    "mainContent",
    "topBar",
    "exportButton",
    "importButton",
    "statsCardDate",
    "supabaseGridOrders",
    "supabaseTextField",
    "supabaseField"
  ],
  topBar: ["topBar", "exportButton", "importButton"],
  exportButton: ["exportButton"],
  importButton: ["importButton"],
  statsCardDate: ["statsCardDate"],
  supabaseGridOrders: [
    "supabaseGridOrders",
    "supabaseTextField",
    "supabaseField"
  ],
  supabaseTextField: ["supabaseTextField"],
  supabaseField: ["supabaseField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  ordersListPage: "div";
  layout: "div";
  sidePanel: typeof SidePanel;
  mainContent: "div";
  topBar: typeof TopBar;
  exportButton: typeof Button;
  importButton: typeof Button;
  statsCardDate: typeof StatsCardDate;
  supabaseGridOrders: typeof SupabaseGridOrders;
  supabaseTextField: typeof SupabaseTextField;
  supabaseField: typeof SupabaseField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrders__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrders__VariantsArgs;
    args?: PlasmicOrders__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOrders__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOrders__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOrders__ArgProps,
      internalVariantPropNames: PlasmicOrders__VariantProps
    });

    return PlasmicOrders__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ordersListPage") {
    func.displayName = "PlasmicOrders";
  } else {
    func.displayName = `PlasmicOrders.${nodeName}`;
  }
  return func;
}

export const PlasmicOrders = Object.assign(
  // Top-level PlasmicOrders renders the root element
  makeNodeComponent("ordersListPage"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    sidePanel: makeNodeComponent("sidePanel"),
    mainContent: makeNodeComponent("mainContent"),
    topBar: makeNodeComponent("topBar"),
    exportButton: makeNodeComponent("exportButton"),
    importButton: makeNodeComponent("importButton"),
    statsCardDate: makeNodeComponent("statsCardDate"),
    supabaseGridOrders: makeNodeComponent("supabaseGridOrders"),
    supabaseTextField: makeNodeComponent("supabaseTextField"),
    supabaseField: makeNodeComponent("supabaseField"),

    // Metadata about props expected for PlasmicOrders
    internalVariantProps: PlasmicOrders__VariantProps,
    internalArgProps: PlasmicOrders__ArgProps
  }
);

export default PlasmicOrders;
/* prettier-ignore-end */
