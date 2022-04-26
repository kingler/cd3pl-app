// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: 627OkF35An
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
import ProductImage from "../../ProductImage"; // plasmic-import: vC1Cin3KZQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicStatInventory2.module.css"; // plasmic-import: 627OkF35An/css

export type PlasmicStatInventory2__VariantMembers = {
  accordion: "isExpanded1" | "isExpanded2" | "isExpanded3";
};

export type PlasmicStatInventory2__VariantsArgs = {
  accordion?: SingleChoiceArg<"isExpanded1" | "isExpanded2" | "isExpanded3">;
};

type VariantPropType = keyof PlasmicStatInventory2__VariantsArgs;
export const PlasmicStatInventory2__VariantProps = new Array<VariantPropType>(
  "accordion"
);

export type PlasmicStatInventory2__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicStatInventory2__ArgsType;
export const PlasmicStatInventory2__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicStatInventory2__OverridesType = {
  statWidgetCardStockLevels?: p.Flex<"div">;
  statWidgetCardTop?: p.Flex<typeof StatWidgetCardTop>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultStatInventory2Props {
  children?: React.ReactNode;
  accordion?: SingleChoiceArg<"isExpanded1" | "isExpanded2" | "isExpanded3">;
  className?: string;
}

function PlasmicStatInventory2__RenderFunc(props: {
  variants: PlasmicStatInventory2__VariantsArgs;
  args: PlasmicStatInventory2__ArgsType;
  overrides: PlasmicStatInventory2__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"statWidgetCardStockLevels"}
      data-plasmic-override={overrides.statWidgetCardStockLevels}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.statWidgetCardStockLevels,
        {
          [sty.statWidgetCardStockLevelsaccordion_isExpanded2]: hasVariant(
            variants,
            "accordion",
            "isExpanded2"
          ),
          [sty.statWidgetCardStockLevelsaccordion_isExpanded3]: hasVariant(
            variants,
            "accordion",
            "isExpanded3"
          )
        }
      )}
    >
      <StatWidgetCardTop
        data-plasmic-name={"statWidgetCardTop"}
        data-plasmic-override={overrides.statWidgetCardTop}
        className={classNames("__wab_instance", sty.statWidgetCardTop, {
          [sty.statWidgetCardTopaccordion_isExpanded2]: hasVariant(
            variants,
            "accordion",
            "isExpanded2"
          )
        })}
      >
        {"Stock Levels"}
      </StatWidgetCardTop>

      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxaccordion_isExpanded1]: hasVariant(
              variants,
              "accordion",
              "isExpanded1"
            ),
            [sty.freeBoxaccordion_isExpanded2]: hasVariant(
              variants,
              "accordion",
              "isExpanded2"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sYnCy)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zba5)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p1MKu
                    )}
                  >
                    {"Low Stock"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l4NHs
                    )}
                  >
                    {"3 Items"}
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__do1Kk)}
                  >
                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__hcm2S
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__sYgVz)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__s4AnD
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___7J4VX)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage___0Am6G
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__v6Itq)}
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
                      }
                    />
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mQg3Y)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__owrVf)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dq0Ib
                      )}
                    >
                      {"Out of Stock"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hcPyF
                      )}
                    >
                      {"10 Items"}
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox___6Hjr4)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___1Jy5Z
                      )}
                    >
                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage___7RTac
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__hazgc)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__gEFwi
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__e2BbI)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__aQyfW
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__cpy2G)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__rJcCc
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__uwVmd)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__kgkep
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img___9XRfz)}
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
                        }
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___93TEf
                      )}
                    >
                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__mPvyQ
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__vNcg)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__qdd9X
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__wKfIh)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__bzuwg
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img___3Db1I)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage___2IHpS
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__w9Pp3)}
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
                        }
                      />

                      <ProductImage
                        className={classNames(
                          "__wab_instance",
                          sty.productImage__lDe6K
                        )}
                        image={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__hVgZq)}
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
                        }
                      />
                    </div>
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jc5O)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3Vj48
                    )}
                  >
                    {"Back Order"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2JzwA
                    )}
                  >
                    {"5 Items"}
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__zjXxf)}
                  >
                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__zlUgB
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__fomPg)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage___3Nkkb
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__fmJw4)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__zcp3G
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__iQCqT)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__idlUl
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__cpOVs)}
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
                      }
                    />

                    <ProductImage
                      className={classNames(
                        "__wab_instance",
                        sty.productImage__w6LMh
                      )}
                      image={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__lVhZa)}
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
                      }
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            ),

            value: args.children
          })}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  statWidgetCardStockLevels: [
    "statWidgetCardStockLevels",
    "statWidgetCardTop",
    "freeBox"
  ],
  statWidgetCardTop: ["statWidgetCardTop"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  statWidgetCardStockLevels: "div";
  statWidgetCardTop: typeof StatWidgetCardTop;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStatInventory2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStatInventory2__VariantsArgs;
    args?: PlasmicStatInventory2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStatInventory2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStatInventory2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicStatInventory2__ArgProps,
      internalVariantPropNames: PlasmicStatInventory2__VariantProps
    });

    return PlasmicStatInventory2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "statWidgetCardStockLevels") {
    func.displayName = "PlasmicStatInventory2";
  } else {
    func.displayName = `PlasmicStatInventory2.${nodeName}`;
  }
  return func;
}

export const PlasmicStatInventory2 = Object.assign(
  // Top-level PlasmicStatInventory2 renders the root element
  makeNodeComponent("statWidgetCardStockLevels"),
  {
    // Helper components rendering sub-elements
    statWidgetCardTop: makeNodeComponent("statWidgetCardTop"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicStatInventory2
    internalVariantProps: PlasmicStatInventory2__VariantProps,
    internalArgProps: PlasmicStatInventory2__ArgProps
  }
);

export default PlasmicStatInventory2;
/* prettier-ignore-end */
