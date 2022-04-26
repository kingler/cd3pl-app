import * as React from "react";
import {
  PlasmicLogoComponent,
  DefaultLogoComponentProps
} from "./plasmic/club_debut_3_pl_app/PlasmicLogoComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";


export interface LogoComponentProps extends DefaultLogoComponentProps {}

function LogoComponent_(
  props: LogoComponentProps,
  ref: HTMLElementRefOf<"svg">
) {
  

  return <PlasmicLogoComponent root={{ ref }} {...props} />;
}

const LogoComponent = React.forwardRef(LogoComponent_);
export default LogoComponent;
