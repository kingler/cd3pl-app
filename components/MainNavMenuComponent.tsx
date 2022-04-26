import * as React from "react";
import {
  PlasmicMainNavMenuComponent,
  DefaultMainNavMenuComponentProps
} from "./plasmic/club_debut_3_pl_app/PlasmicMainNavMenuComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MainNavMenuComponentProps
  extends DefaultMainNavMenuComponentProps {}

function MainNavMenuComponent_(
  props: MainNavMenuComponentProps,
  ref: HTMLElementRefOf<"div">
) {

  return <PlasmicMainNavMenuComponent root={{ ref }} {...props} />;
}

const MainNavMenuComponent = React.forwardRef(MainNavMenuComponent_);
export default MainNavMenuComponent;
