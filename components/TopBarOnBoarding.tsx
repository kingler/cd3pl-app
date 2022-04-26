import * as React from "react";
import {
  PlasmicTopBarOnBoarding,
  DefaultTopBarOnBoardingProps
} from "./plasmic/club_debut_3_pl_app/PlasmicTopBarOnBoarding";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface TopBarOnBoardingProps extends DefaultTopBarOnBoardingProps {}

function TopBarOnBoarding_(
  props: TopBarOnBoardingProps,
  ref: HTMLElementRefOf<"div">
) {

  return <PlasmicTopBarOnBoarding topBarWithLogo={{ ref }} {...props} />;
}

const TopBarOnBoarding = React.forwardRef(TopBarOnBoarding_);
export default TopBarOnBoarding;
