// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: vC1Cin3KZQ
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
import Button from "../../Button"; // plasmic-import: iZavS5akl9G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicProductImage.module.css"; // plasmic-import: vC1Cin3KZQ/css

import LineCopyIcon from "./icons/PlasmicIcon__LineCopy"; // plasmic-import: JA5oJt2p-Ar/icon
import Warningsvg2Icon from "./icons/PlasmicIcon__Warningsvg2"; // plasmic-import: y008BQsg8/icon
import ForwardSlashsvg2Icon from "./icons/PlasmicIcon__ForwardSlashsvg2"; // plasmic-import: csqF-211U/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: dtW5sCNu7WP/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: zGfmmTFBuGj/icon

export type PlasmicProductImage__VariantMembers = {
  isSelected: "isSelected";
};

export type PlasmicProductImage__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
};

type VariantPropType = keyof PlasmicProductImage__VariantsArgs;
export const PlasmicProductImage__VariantProps = new Array<VariantPropType>(
  "isSelected"
);

export type PlasmicProductImage__ArgsType = {
  image?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProductImage__ArgsType;
export const PlasmicProductImage__ArgProps = new Array<ArgPropType>("image");

export type PlasmicProductImage__OverridesType = {
  productImage?: p.Flex<"div">;
  startCount2?: p.Flex<"div">;
  line?: p.Flex<"svg">;
  lowStockLabel?: p.Flex<"div">;
  currentCount2?: p.Flex<"div">;
  startCount?: p.Flex<"div">;
  line2?: p.Flex<"svg">;
  createPo?: p.Flex<typeof Button>;
  addToPo?: p.Flex<typeof Button>;
};

export interface DefaultProductImageProps {
  image?: React.ReactNode;
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  className?: string;
}

function PlasmicProductImage__RenderFunc(props: {
  variants: PlasmicProductImage__VariantsArgs;
  args: PlasmicProductImage__ArgsType;
  overrides: PlasmicProductImage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"productImage"}
        data-plasmic-override={overrides.productImage}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.productImage,
          {
            [sty.productImageisSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__c25NJ)}
              displayHeight={"80px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"80px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/club_debut_3_pl_app/images/floridaTshirtWhitepng.png",
                fullWidth: 1588,
                fullHeight: 1608,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.image
        })}

        {(hasVariant(variants, "isSelected", "isSelected") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__quQrl, {
              [sty.freeBoxisSelected__quQrLm5Aw7]: hasVariant(
                variants,
                "isSelected",
                "isSelected"
              )
            })}
          >
            <div
              data-plasmic-name={"startCount2"}
              data-plasmic-override={overrides.startCount2}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.startCount2,
                {
                  [sty.startCount2isSelected]: hasVariant(
                    variants,
                    "isSelected",
                    "isSelected"
                  )
                }
              )}
            >
              {"Florida collage white 2XL"}
            </div>

            <LineCopyIcon
              data-plasmic-name={"line"}
              data-plasmic-override={overrides.line}
              className={classNames(projectcss.all, sty.line)}
              role={"img"}
            />

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ehc6G)}
              >
                {(
                  hasVariant(variants, "isSelected", "isSelected") ? true : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xskTy, {
                      [sty.freeBoxisSelected__xskTYm5Aw7]: hasVariant(
                        variants,
                        "isSelected",
                        "isSelected"
                      )
                    })}
                  >
                    <Warningsvg2Icon
                      className={classNames(projectcss.all, sty.svg___0KPRl)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"lowStockLabel"}
                      data-plasmic-override={overrides.lowStockLabel}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.lowStockLabel,
                        {
                          [sty.lowStockLabelisSelected]: hasVariant(
                            variants,
                            "isSelected",
                            "isSelected"
                          )
                        }
                      )}
                    >
                      {"Low"}
                    </div>
                  </p.Stack>
                ) : null}
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__wPfH)}
                  >
                    <div
                      data-plasmic-name={"currentCount2"}
                      data-plasmic-override={overrides.currentCount2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.currentCount2,
                        {
                          [sty.currentCount2isSelected]: hasVariant(
                            variants,
                            "isSelected",
                            "isSelected"
                          )
                        }
                      )}
                    >
                      {"20 "}
                    </div>

                    <ForwardSlashsvg2Icon
                      className={classNames(projectcss.all, sty.svg__eltbP)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"startCount"}
                      data-plasmic-override={overrides.startCount}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.startCount,
                        {
                          [sty.startCountisSelected]: hasVariant(
                            variants,
                            "isSelected",
                            "isSelected"
                          )
                        }
                      )}
                    >
                      {"200"}
                    </div>
                  </div>
                ) : null}
              </p.Stack>
            ) : null}

            <LineCopyIcon
              data-plasmic-name={"line2"}
              data-plasmic-override={overrides.line2}
              className={classNames(projectcss.all, sty.line2, {
                [sty.line2isSelected]: hasVariant(
                  variants,
                  "isSelected",
                  "isSelected"
                )
              })}
              role={"img"}
            />

            <Button
              data-plasmic-name={"createPo"}
              data-plasmic-override={overrides.createPo}
              className={classNames("__wab_instance", sty.createPo, {
                [sty.createPoisSelected]: hasVariant(
                  variants,
                  "isSelected",
                  "isSelected"
                )
              })}
              color={"link" as const}
              endIcon={
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__w0Qs6)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zvbCb
                )}
              >
                {"Create PO"}
              </div>
            </Button>

            <Button
              data-plasmic-name={"addToPo"}
              data-plasmic-override={overrides.addToPo}
              className={classNames("__wab_instance", sty.addToPo, {
                [sty.addToPoisSelected]: hasVariant(
                  variants,
                  "isSelected",
                  "isSelected"
                )
              })}
              color={"link" as const}
              endIcon={
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__yTm84)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nSyam
                )}
              >
                {"Add to PO"}
              </div>
            </Button>
          </div>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  productImage: [
    "productImage",
    "startCount2",
    "line",
    "lowStockLabel",
    "currentCount2",
    "startCount",
    "line2",
    "createPo",
    "addToPo"
  ],
  startCount2: ["startCount2"],
  line: ["line"],
  lowStockLabel: ["lowStockLabel"],
  currentCount2: ["currentCount2"],
  startCount: ["startCount"],
  line2: ["line2"],
  createPo: ["createPo"],
  addToPo: ["addToPo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  productImage: "div";
  startCount2: "div";
  line: "svg";
  lowStockLabel: "div";
  currentCount2: "div";
  startCount: "div";
  line2: "svg";
  createPo: typeof Button;
  addToPo: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductImage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductImage__VariantsArgs;
    args?: PlasmicProductImage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductImage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductImage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProductImage__ArgProps,
      internalVariantPropNames: PlasmicProductImage__VariantProps
    });

    return PlasmicProductImage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "productImage") {
    func.displayName = "PlasmicProductImage";
  } else {
    func.displayName = `PlasmicProductImage.${nodeName}`;
  }
  return func;
}

export const PlasmicProductImage = Object.assign(
  // Top-level PlasmicProductImage renders the root element
  makeNodeComponent("productImage"),
  {
    // Helper components rendering sub-elements
    startCount2: makeNodeComponent("startCount2"),
    line: makeNodeComponent("line"),
    lowStockLabel: makeNodeComponent("lowStockLabel"),
    currentCount2: makeNodeComponent("currentCount2"),
    startCount: makeNodeComponent("startCount"),
    line2: makeNodeComponent("line2"),
    createPo: makeNodeComponent("createPo"),
    addToPo: makeNodeComponent("addToPo"),

    // Metadata about props expected for PlasmicProductImage
    internalVariantProps: PlasmicProductImage__VariantProps,
    internalArgProps: PlasmicProductImage__ArgProps
  }
);

export default PlasmicProductImage;
/* prettier-ignore-end */
