// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7PMUCBoe1fA7rXcBRi5FH
// Component: kMAT7d_nPjC
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
import CompanyInContextComponent from "../../CompanyInContextComponent"; // plasmic-import: FBG1EzcxxU/component
import MenuItemComponent from "../../MenuItemComponent"; // plasmic-import: npcGRLM8U0/component
import MenuIcon from "../../MenuIcon"; // plasmic-import: 6rUEUjk3c5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_club_debut_3_pl_app.module.css"; // plasmic-import: n7PMUCBoe1fA7rXcBRi5FH/projectcss
import sty from "./PlasmicSidePanelComponent.module.css"; // plasmic-import: kMAT7d_nPjC/css

import Logo2Icon from "./icons/PlasmicIcon__Logo2"; // plasmic-import: _T9L2CLNkap/icon
import Property1ClubDebutLogosvgIcon from "./icons/PlasmicIcon__Property1ClubDebutLogosvg"; // plasmic-import: fwPjlV3kW/icon
import AppIcons7Icon from "./icons/PlasmicIcon__AppIcons7"; // plasmic-import: CWTyA7AvHz/icon
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: WLLaN5a79/icon

export type PlasmicSidePanelComponent__VariantMembers = {
  collapes: "collapes";
};

export type PlasmicSidePanelComponent__VariantsArgs = {
  collapes?: SingleBooleanChoiceArg<"collapes">;
};

type VariantPropType = keyof PlasmicSidePanelComponent__VariantsArgs;
export const PlasmicSidePanelComponent__VariantProps =
  new Array<VariantPropType>("collapes");

export type PlasmicSidePanelComponent__ArgsType = {
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidePanelComponent__ArgsType;
export const PlasmicSidePanelComponent__ArgProps = new Array<ArgPropType>(
  "slot"
);

export type PlasmicSidePanelComponent__OverridesType = {
  sidePanel?: p.Flex<"div">;
  topSection?: p.Flex<"div">;
  logo?: p.Flex<"svg">;
  companyInContextComponent?: p.Flex<typeof CompanyInContextComponent>;
  menuLinks?: p.Flex<"div">;
  dashboardLink?: p.Flex<"a"> & Partial<LinkProps>;
  commerceLink?: p.Flex<"a"> & Partial<LinkProps>;
  activityLink?: p.Flex<"a"> & Partial<LinkProps>;
  ordersLink?: p.Flex<"a"> & Partial<LinkProps>;
  productLink?: p.Flex<"a"> & Partial<LinkProps>;
  inventoryLink?: p.Flex<"a"> & Partial<LinkProps>;
  customersLink?: p.Flex<"a"> & Partial<LinkProps>;
  purchaseOrdersLink?: p.Flex<"a"> & Partial<LinkProps>;
  suppliersLink?: p.Flex<"a"> & Partial<LinkProps>;
  projectLink?: p.Flex<"a"> & Partial<LinkProps>;
  settingsLink?: p.Flex<"a"> & Partial<LinkProps>;
  accountProfileLink?: p.Flex<"a"> & Partial<LinkProps>;
  accountProfile?: p.Flex<"div">;
  circle?: p.Flex<"div">;
  placeholderImage?: p.Flex<"svg">;
  accountLink?: p.Flex<"a"> & Partial<LinkProps>;
  accountLinkText?: p.Flex<"div">;
};

export interface DefaultSidePanelComponentProps {
  slot?: React.ReactNode;
  collapes?: SingleBooleanChoiceArg<"collapes">;
  className?: string;
}

function PlasmicSidePanelComponent__RenderFunc(props: {
  variants: PlasmicSidePanelComponent__VariantsArgs;
  args: PlasmicSidePanelComponent__ArgsType;
  overrides: PlasmicSidePanelComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"sidePanel"}
      data-plasmic-override={overrides.sidePanel}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.sidePanel,
        {
          [sty.sidePanelcollapes]: hasVariant(variants, "collapes", "collapes")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"topSection"}
        data-plasmic-override={overrides.topSection}
        hasGap={true}
        className={classNames(projectcss.all, sty.topSection, {
          [sty.topSectioncollapes]: hasVariant(variants, "collapes", "collapes")
        })}
      >
        <p.PlasmicIcon
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          PlasmicIconType={
            hasVariant(variants, "collapes", "collapes")
              ? Property1ClubDebutLogosvgIcon
              : Logo2Icon
          }
          className={classNames(projectcss.all, sty.logo, {
            [sty.logocollapes]: hasVariant(variants, "collapes", "collapes")
          })}
          role={"img"}
        />

        {true ? (
          <CompanyInContextComponent
            data-plasmic-name={"companyInContextComponent"}
            data-plasmic-override={overrides.companyInContextComponent}
            className={classNames(
              "__wab_instance",
              sty.companyInContextComponent
            )}
          />
        ) : null}
      </p.Stack>

      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"menuLinks"}
          data-plasmic-override={overrides.menuLinks}
          hasGap={true}
          className={classNames(projectcss.all, sty.menuLinks, {
            [sty.menuLinkscollapes]: hasVariant(
              variants,
              "collapes",
              "collapes"
            )
          })}
        >
          <p.PlasmicLink
            data-plasmic-name={"dashboardLink"}
            data-plasmic-override={overrides.dashboardLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.dashboardLink
            )}
            component={Link}
            href={"/dashboard" as const}
            platform={"nextjs"}
            target={undefined}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__zmkzp,
                {
                  [sty.menuItemComponentcollapes__zmkzpF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"commerceLink"}
            data-plasmic-override={overrides.commerceLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.commerceLink
            )}
            component={Link}
            href={"/commerce" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent___2N7Sx,
                {
                  [sty.menuItemComponentcollapes___2N7SxF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"activityLink"}
            data-plasmic-override={overrides.activityLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.activityLink
            )}
            component={Link}
            href={"/activities" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__u0JAu,
                {
                  [sty.menuItemComponentcollapes__u0JAuF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"ordersLink"}
            data-plasmic-override={overrides.ordersLink}
            className={classNames(projectcss.all, projectcss.a, sty.ordersLink)}
            component={Link}
            href={"/orders" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__qdUhe,
                {
                  [sty.menuItemComponentcollapes__qdUheF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"productLink"}
            data-plasmic-override={overrides.productLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.productLink
            )}
            component={Link}
            href={"/products" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__f5ZNp,
                {
                  [sty.menuItemComponentcollapes__f5ZNpF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"inventoryLink"}
            data-plasmic-override={overrides.inventoryLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.inventoryLink
            )}
            component={Link}
            href={"/inventory" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__jJwrC,
                {
                  [sty.menuItemComponentcollapes__jJwrCF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"customersLink"}
            data-plasmic-override={overrides.customersLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.customersLink
            )}
            component={Link}
            href={"/customers" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__s7KbN,
                {
                  [sty.menuItemComponentcollapes__s7KbNF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"purchaseOrdersLink"}
            data-plasmic-override={overrides.purchaseOrdersLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.purchaseOrdersLink
            )}
            component={Link}
            href={"/purchase-orders" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__xgLuC,
                {
                  [sty.menuItemComponentcollapes__xgLuCF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"suppliersLink"}
            data-plasmic-override={overrides.suppliersLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.suppliersLink
            )}
            component={Link}
            href={"/suppliers" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__gwBtc,
                {
                  [sty.menuItemComponentcollapes__gwBtcF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"projectLink"}
            data-plasmic-override={overrides.projectLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.projectLink
            )}
            component={Link}
            href={"/project" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__k2FXa,
                {
                  [sty.menuItemComponentcollapes__k2FXaF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"settingsLink"}
            data-plasmic-override={overrides.settingsLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.settingsLink
            )}
            component={Link}
            href={"/settings" as const}
            platform={"nextjs"}
          >
            <MenuItemComponent
              className={classNames(
                "__wab_instance",
                sty.menuItemComponent__dAmG,
                {
                  [sty.menuItemComponentcollapes__dAmGF6O]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
            />
          </p.PlasmicLink>
        </p.Stack>
      ) : null}

      <p.PlasmicLink
        data-plasmic-name={"accountProfileLink"}
        data-plasmic-override={overrides.accountProfileLink}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.accountProfileLink,
          {
            [sty.accountProfileLinkcollapes]: hasVariant(
              variants,
              "collapes",
              "collapes"
            )
          }
        )}
        component={Link}
        href={
          hasVariant(variants, "collapes", "collapes")
            ? ("/account-profile" as const)
            : undefined
        }
        platform={"nextjs"}
      >
        <div
          data-plasmic-name={"accountProfile"}
          data-plasmic-override={overrides.accountProfile}
          className={classNames(projectcss.all, sty.accountProfile, {
            [sty.accountProfilecollapes]: hasVariant(
              variants,
              "collapes",
              "collapes"
            )
          })}
        >
          <div
            data-plasmic-name={"circle"}
            data-plasmic-override={overrides.circle}
            className={classNames(projectcss.all, sty.circle)}
          >
            <UsersvgIcon
              data-plasmic-name={"placeholderImage"}
              data-plasmic-override={overrides.placeholderImage}
              className={classNames(projectcss.all, sty.placeholderImage)}
              role={"img"}
            />
          </div>

          {(hasVariant(variants, "collapes", "collapes") ? true : true) ? (
            <p.PlasmicLink
              data-plasmic-name={"accountLink"}
              data-plasmic-override={overrides.accountLink}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.accountLink,
                {
                  [sty.accountLinkcollapes]: hasVariant(
                    variants,
                    "collapes",
                    "collapes"
                  )
                }
              )}
              component={Link}
              href={"/account-profile" as const}
              platform={"nextjs"}
            >
              {(hasVariant(variants, "collapes", "collapes") ? true : true) ? (
                <div
                  data-plasmic-name={"accountLinkText"}
                  data-plasmic-override={overrides.accountLinkText}
                  className={classNames(projectcss.all, sty.accountLinkText, {
                    [sty.accountLinkTextcollapes]: hasVariant(
                      variants,
                      "collapes",
                      "collapes"
                    )
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Account",
                    value: args.slot,
                    className: classNames(sty.slotTargetSlot, {
                      [sty.slotTargetSlotcollapes]: hasVariant(
                        variants,
                        "collapes",
                        "collapes"
                      )
                    })
                  })}
                </div>
              ) : null}
            </p.PlasmicLink>
          ) : null}
        </div>
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  sidePanel: [
    "sidePanel",
    "topSection",
    "logo",
    "companyInContextComponent",
    "menuLinks",
    "dashboardLink",
    "commerceLink",
    "activityLink",
    "ordersLink",
    "productLink",
    "inventoryLink",
    "customersLink",
    "purchaseOrdersLink",
    "suppliersLink",
    "projectLink",
    "settingsLink",
    "accountProfileLink",
    "accountProfile",
    "circle",
    "placeholderImage",
    "accountLink",
    "accountLinkText"
  ],
  topSection: ["topSection", "logo", "companyInContextComponent"],
  logo: ["logo"],
  companyInContextComponent: ["companyInContextComponent"],
  menuLinks: [
    "menuLinks",
    "dashboardLink",
    "commerceLink",
    "activityLink",
    "ordersLink",
    "productLink",
    "inventoryLink",
    "customersLink",
    "purchaseOrdersLink",
    "suppliersLink",
    "projectLink",
    "settingsLink"
  ],
  dashboardLink: ["dashboardLink"],
  commerceLink: ["commerceLink"],
  activityLink: ["activityLink"],
  ordersLink: ["ordersLink"],
  productLink: ["productLink"],
  inventoryLink: ["inventoryLink"],
  customersLink: ["customersLink"],
  purchaseOrdersLink: ["purchaseOrdersLink"],
  suppliersLink: ["suppliersLink"],
  projectLink: ["projectLink"],
  settingsLink: ["settingsLink"],
  accountProfileLink: [
    "accountProfileLink",
    "accountProfile",
    "circle",
    "placeholderImage",
    "accountLink",
    "accountLinkText"
  ],
  accountProfile: [
    "accountProfile",
    "circle",
    "placeholderImage",
    "accountLink",
    "accountLinkText"
  ],
  circle: ["circle", "placeholderImage"],
  placeholderImage: ["placeholderImage"],
  accountLink: ["accountLink", "accountLinkText"],
  accountLinkText: ["accountLinkText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  sidePanel: "div";
  topSection: "div";
  logo: "svg";
  companyInContextComponent: typeof CompanyInContextComponent;
  menuLinks: "div";
  dashboardLink: "a";
  commerceLink: "a";
  activityLink: "a";
  ordersLink: "a";
  productLink: "a";
  inventoryLink: "a";
  customersLink: "a";
  purchaseOrdersLink: "a";
  suppliersLink: "a";
  projectLink: "a";
  settingsLink: "a";
  accountProfileLink: "a";
  accountProfile: "div";
  circle: "div";
  placeholderImage: "svg";
  accountLink: "a";
  accountLinkText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidePanelComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidePanelComponent__VariantsArgs;
    args?: PlasmicSidePanelComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidePanelComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidePanelComponent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidePanelComponent__ArgProps,
      internalVariantPropNames: PlasmicSidePanelComponent__VariantProps
    });

    return PlasmicSidePanelComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "sidePanel") {
    func.displayName = "PlasmicSidePanelComponent";
  } else {
    func.displayName = `PlasmicSidePanelComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicSidePanelComponent = Object.assign(
  // Top-level PlasmicSidePanelComponent renders the root element
  makeNodeComponent("sidePanel"),
  {
    // Helper components rendering sub-elements
    topSection: makeNodeComponent("topSection"),
    logo: makeNodeComponent("logo"),
    companyInContextComponent: makeNodeComponent("companyInContextComponent"),
    menuLinks: makeNodeComponent("menuLinks"),
    dashboardLink: makeNodeComponent("dashboardLink"),
    commerceLink: makeNodeComponent("commerceLink"),
    activityLink: makeNodeComponent("activityLink"),
    ordersLink: makeNodeComponent("ordersLink"),
    productLink: makeNodeComponent("productLink"),
    inventoryLink: makeNodeComponent("inventoryLink"),
    customersLink: makeNodeComponent("customersLink"),
    purchaseOrdersLink: makeNodeComponent("purchaseOrdersLink"),
    suppliersLink: makeNodeComponent("suppliersLink"),
    projectLink: makeNodeComponent("projectLink"),
    settingsLink: makeNodeComponent("settingsLink"),
    accountProfileLink: makeNodeComponent("accountProfileLink"),
    accountProfile: makeNodeComponent("accountProfile"),
    circle: makeNodeComponent("circle"),
    placeholderImage: makeNodeComponent("placeholderImage"),
    accountLink: makeNodeComponent("accountLink"),
    accountLinkText: makeNodeComponent("accountLinkText"),

    // Metadata about props expected for PlasmicSidePanelComponent
    internalVariantProps: PlasmicSidePanelComponent__VariantProps,
    internalArgProps: PlasmicSidePanelComponent__ArgProps
  }
);

export default PlasmicSidePanelComponent;
/* prettier-ignore-end */