import * as React from "react";
import {
  PlasmicSidePanel,
  DefaultSidePanelProps
} from "./plasmic/club_debut_3_pl_app/PlasmicSidePanel";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SidePanelProps extends DefaultSidePanelProps {}

function SidePanel_(props: SidePanelProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicSidePanel root={{ ref }} {...props} />;
}

const SidePanel = React.forwardRef(SidePanel_);
export default SidePanel;
