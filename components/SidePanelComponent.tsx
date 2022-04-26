import * as React from "react";
import {
  PlasmicSidePanelComponent,
  DefaultSidePanelComponentProps
} from "./plasmic/club_debut_3_pl_app/PlasmicSidePanelComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
export interface SidePanelComponentProps
  extends DefaultSidePanelComponentProps {}

function SidePanelComponent_(
  props: SidePanelComponentProps,
  ref: HTMLElementRefOf<"div">
) {
  
  return <PlasmicSidePanelComponent sidePanel={{ ref }} {...props} />;
}

const SidePanelComponent = React.forwardRef(SidePanelComponent_);
export default SidePanelComponent;
