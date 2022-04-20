// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: jGkDgrZ3Zc
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
import NavButton from "../../NavButton"; // plasmic-import: eAySFtM0VM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicUserCategoryQuestion.module.css"; // plasmic-import: jGkDgrZ3Zc/css

export type PlasmicUserCategoryQuestion__VariantMembers = {};

export type PlasmicUserCategoryQuestion__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserCategoryQuestion__VariantsArgs;
export const PlasmicUserCategoryQuestion__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUserCategoryQuestion__ArgsType = {
  textDefault3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUserCategoryQuestion__ArgsType;
export const PlasmicUserCategoryQuestion__ArgProps = new Array<ArgPropType>(
  "textDefault3"
);

export type PlasmicUserCategoryQuestion__OverridesType = {
  questionOption2?: p.Flex<"div">;
  questionOption?: p.Flex<"div">;
  navButton?: p.Flex<typeof NavButton>;
};

export interface DefaultUserCategoryQuestionProps {
  textDefault3?: React.ReactNode;
  className?: string;
}

function PlasmicUserCategoryQuestion__RenderFunc(props: {
  variants: PlasmicUserCategoryQuestion__VariantsArgs;
  args: PlasmicUserCategoryQuestion__ArgsType;
  overrides: PlasmicUserCategoryQuestion__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const [isQuestionOption2Hover, triggerQuestionOption2HoverProps] = useTrigger(
    "useHover",
    {}
  );
  const [isQuestionOption2Active, triggerQuestionOption2ActiveProps] =
    useTrigger("usePressed", {});
  const triggers = {
    hover_questionOption2: isQuestionOption2Hover,
    active_questionOption2: isQuestionOption2Active
  };

  return (
    <div
      data-plasmic-name={"questionOption2"}
      data-plasmic-override={overrides.questionOption2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.questionOption2
      )}
      data-plasmic-trigger-props={[
        triggerQuestionOption2HoverProps,
        triggerQuestionOption2ActiveProps
      ]}
    >
      <div
        data-plasmic-name={"questionOption"}
        data-plasmic-override={overrides.questionOption}
        className={classNames(projectcss.all, sty.questionOption)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___4ZsWh)}>
          <div className={classNames(projectcss.all, sty.freeBox___4V8Zc)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "I need third party logistics service for my fashion brand",
              value: args.textDefault3,
              className: classNames(sty.slotTargetTextDefault3)
            })}
          </div>
        </div>

        {(
          triggers.active_questionOption2
            ? true
            : triggers.hover_questionOption2
            ? true
            : true
        ) ? (
          <NavButton
            data-plasmic-name={"navButton"}
            data-plasmic-override={overrides.navButton}
            className={classNames("__wab_instance", sty.navButton)}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  questionOption2: ["questionOption2", "questionOption", "navButton"],
  questionOption: ["questionOption", "navButton"],
  navButton: ["navButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  questionOption2: "div";
  questionOption: "div";
  navButton: typeof NavButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserCategoryQuestion__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserCategoryQuestion__VariantsArgs;
    args?: PlasmicUserCategoryQuestion__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserCategoryQuestion__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUserCategoryQuestion__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicUserCategoryQuestion__ArgProps,
      internalVariantPropNames: PlasmicUserCategoryQuestion__VariantProps
    });

    return PlasmicUserCategoryQuestion__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "questionOption2") {
    func.displayName = "PlasmicUserCategoryQuestion";
  } else {
    func.displayName = `PlasmicUserCategoryQuestion.${nodeName}`;
  }
  return func;
}

export const PlasmicUserCategoryQuestion = Object.assign(
  // Top-level PlasmicUserCategoryQuestion renders the root element
  makeNodeComponent("questionOption2"),
  {
    // Helper components rendering sub-elements
    questionOption: makeNodeComponent("questionOption"),
    navButton: makeNodeComponent("navButton"),

    // Metadata about props expected for PlasmicUserCategoryQuestion
    internalVariantProps: PlasmicUserCategoryQuestion__VariantProps,
    internalArgProps: PlasmicUserCategoryQuestion__ArgProps
  }
);

export default PlasmicUserCategoryQuestion;
/* prettier-ignore-end */
