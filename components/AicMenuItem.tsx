import * as React from "react";
import {
  PlasmicAicMenuItem,
  DefaultAicMenuItemProps
} from "./plasmic/club_debut_3_pl_app/PlasmicAicMenuItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface AicMenuItemProps extends DefaultAicMenuItemProps {}

function AicMenuItem_(props: AicMenuItemProps, ref: HTMLElementRefOf<"a">) {
  

  return <PlasmicAicMenuItem switchAccount={{ ref }} {...props} />;
}

const AicMenuItem = React.forwardRef(AicMenuItem_);
export default AicMenuItem;
