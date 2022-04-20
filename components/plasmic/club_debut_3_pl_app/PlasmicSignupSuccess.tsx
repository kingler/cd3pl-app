// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: B3n69D-dXe
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

import { useScreenVariants as useScreenVariants_6JfnloVhzca } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6JfnloVhzca/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicSignupSuccess.module.css"; // plasmic-import: B3n69D-dXe/css

import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: LwKmGdfm0K/icon
import MailRound24PxsvgIcon from "./icons/PlasmicIcon__MailRound24Pxsvg"; // plasmic-import: rr6rX77IeQ/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: zGfmmTFBuGj/icon

export type PlasmicSignupSuccess__VariantMembers = {};

export type PlasmicSignupSuccess__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignupSuccess__VariantsArgs;
export const PlasmicSignupSuccess__VariantProps = new Array<VariantPropType>();

export type PlasmicSignupSuccess__ArgsType = {};
type ArgPropType = keyof PlasmicSignupSuccess__ArgsType;
export const PlasmicSignupSuccess__ArgProps = new Array<ArgPropType>();

export type PlasmicSignupSuccess__OverridesType = {
  signupSuccessPage?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h1?: p.Flex<"h1">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultSignupSuccessProps {}

function PlasmicSignupSuccess__RenderFunc(props: {
  variants: PlasmicSignupSuccess__VariantsArgs;
  args: PlasmicSignupSuccess__ArgsType;
  overrides: PlasmicSignupSuccess__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6JfnloVhzca()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Sign up success"}</title>
        <meta key="og:title" property="og:title" content={"Sign up success"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"signupSuccessPage"}
          data-plasmic-override={overrides.signupSuccessPage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.signupSuccessPage
          )}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("1036.678px" as const)
                : ("1036.678px" as const)
            }
            displayMaxHeight={"none" as const}
            displayMaxWidth={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("100%" as const)
                : ("100%" as const)
            }
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("642.909px" as const)
                : ("642.909px" as const)
            }
            loading={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("lazy" as const)
                : ("lazy" as const)
            }
            src={
              hasVariant(globalVariants, "screen", "mobile")
                ? {
                    src: "/plasmic/club_debut_3_pl_app/images/group2.svg",
                    fullWidth: 642.909,
                    fullHeight: 1036.678,
                    aspectRatio: 0.679775
                  }
                : {
                    src: "/plasmic/club_debut_3_pl_app/images/group2.svg",
                    fullWidth: 642.909,
                    fullHeight: 1036.678,
                    aspectRatio: 0.679775
                  }
            }
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bW2O)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__ddVvc)}>
                <Icon5Icon
                  className={classNames(projectcss.all, sty.svg__aOyF)}
                  role={"img"}
                />
              </div>
            ) : null}

            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Congratulation Larry!\nYou have signed up successfully"}
            </h1>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cxiOz
              )}
            >
              {
                "Please check your email to verify your account to finish registration"
              }
            </div>

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"link" as const}
              showStartIcon={true}
              startIcon={
                <MailRound24PxsvgIcon
                  className={classNames(projectcss.all, sty.svg__qsHgp)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gPr6U
                )}
              >
                {"Resend Email Verification"}
              </div>
            </Button>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  signupSuccessPage: ["signupSuccessPage", "img", "h1", "button"],
  img: ["img"],
  h1: ["h1"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  signupSuccessPage: "div";
  img: typeof p.PlasmicImg;
  h1: "h1";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignupSuccess__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignupSuccess__VariantsArgs;
    args?: PlasmicSignupSuccess__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignupSuccess__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignupSuccess__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSignupSuccess__ArgProps,
      internalVariantPropNames: PlasmicSignupSuccess__VariantProps
    });

    return PlasmicSignupSuccess__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "signupSuccessPage") {
    func.displayName = "PlasmicSignupSuccess";
  } else {
    func.displayName = `PlasmicSignupSuccess.${nodeName}`;
  }
  return func;
}

export const PlasmicSignupSuccess = Object.assign(
  // Top-level PlasmicSignupSuccess renders the root element
  makeNodeComponent("signupSuccessPage"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSignupSuccess
    internalVariantProps: PlasmicSignupSuccess__VariantProps,
    internalArgProps: PlasmicSignupSuccess__ArgProps
  }
);

export default PlasmicSignupSuccess;
/* prettier-ignore-end */
