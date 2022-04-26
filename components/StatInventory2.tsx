import * as React from "react";
import {
  PlasmicStatInventory2,
  DefaultStatInventory2Props
} from "./plasmic/club_debut_3_pl_app/PlasmicStatInventory2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface StatInventory2Props extends DefaultStatInventory2Props {}

function StatInventory2_(
  props: StatInventory2Props,
  ref: HTMLElementRefOf<"div">
) {
  

  return <PlasmicStatInventory2 root={{ ref }} {...props} />;
}

const StatInventory2 = React.forwardRef(StatInventory2_);
export default StatInventory2;
