// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: 1_U0ytxYfx
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
import AuthComponent from "../../AuthComponent"; // plasmic-import: nY2U_rP0qI/component

import { useScreenVariants as useScreenVariants_6JfnloVhzca } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6JfnloVhzca/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: 1_U0ytxYfx/css

export type PlasmicSignup__VariantMembers = {};

export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {};
type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>();

export type PlasmicSignup__OverridesType = {
  root?: p.Flex<"div">;
  signUpRegistration?: p.Flex<"div">;
  frame59?: p.Flex<"div">;
  frame61?: p.Flex<"div">;
  signUpAndStartMa?: p.Flex<"div">;
  authComponent?: p.Flex<typeof AuthComponent>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultSignupProps {}

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;

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
            sty.root
          )}
        >
          <div
            data-plasmic-name={"signUpRegistration"}
            data-plasmic-override={overrides.signUpRegistration}
            className={classNames(projectcss.all, sty.signUpRegistration)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame59"}
              data-plasmic-override={overrides.frame59}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame59)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame61"}
                data-plasmic-override={overrides.frame61}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame61)}
              >
                <div
                  data-plasmic-name={"signUpAndStartMa"}
                  data-plasmic-override={overrides.signUpAndStartMa}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.signUpAndStartMa
                  )}
                >
                  {"Sign up and start managing your fashion supply chain"}
                </div>
              </p.Stack>

              <AuthComponent
                data-plasmic-name={"authComponent"}
                data-plasmic-override={overrides.authComponent}
                className={classNames("__wab_instance", sty.authComponent)}
                isSignUpFlow={true}
              />
            </p.Stack>

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"1036.678px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"642.909px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/club_debut_3_pl_app/images/group2.svg",
                fullWidth: 642.909,
                fullHeight: 1036.678,
                aspectRatio: 0.679775
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "signUpRegistration",
    "frame59",
    "frame61",
    "signUpAndStartMa",
    "authComponent",
    "img"
  ],
  signUpRegistration: [
    "signUpRegistration",
    "frame59",
    "frame61",
    "signUpAndStartMa",
    "authComponent",
    "img"
  ],
  frame59: ["frame59", "frame61", "signUpAndStartMa", "authComponent"],
  frame61: ["frame61", "signUpAndStartMa"],
  signUpAndStartMa: ["signUpAndStartMa"],
  authComponent: ["authComponent"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  signUpRegistration: "div";
  frame59: "div";
  frame61: "div";
  signUpAndStartMa: "div";
  authComponent: typeof AuthComponent;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignup__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSignup__ArgProps,
      internalVariantPropNames: PlasmicSignup__VariantProps
    });

    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    signUpRegistration: makeNodeComponent("signUpRegistration"),
    frame59: makeNodeComponent("frame59"),
    frame61: makeNodeComponent("frame61"),
    signUpAndStartMa: makeNodeComponent("signUpAndStartMa"),
    authComponent: makeNodeComponent("authComponent"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */