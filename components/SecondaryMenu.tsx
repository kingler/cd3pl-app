import * as React from "react";
import {
  PlasmicSecondaryMenu,
  DefaultSecondaryMenuProps
} from "./plasmic/club_debut_3_pl_app/PlasmicSecondaryMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SecondaryMenuProps extends DefaultSecondaryMenuProps {}

function SecondaryMenu_(
  props: SecondaryMenuProps,
  ref: HTMLElementRefOf<"div">
) {
  
  return <PlasmicSecondaryMenu root={{ ref }} {...props} />;
}

const SecondaryMenu = React.forwardRef(SecondaryMenu_);
export default SecondaryMenu;
