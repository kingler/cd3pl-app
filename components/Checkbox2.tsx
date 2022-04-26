// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicCheckbox2,
  DefaultCheckbox2Props
} from "./plasmic/club_debut_3_pl_app/PlasmicCheckbox2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Checkbox2Props extends Omit<DefaultCheckbox2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultCheckbox2Props altogether and have
// total control over the props for your component.
export interface Checkbox2Props extends DefaultCheckbox2Props {}

function Checkbox2_(props: Checkbox2Props, ref: HTMLElementRefOf<"a">) {
  // Use PlasmicCheckbox2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCheckbox2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Checkbox2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicCheckbox2 root={{ ref }} {...props} />;
}

const Checkbox2 = React.forwardRef(Checkbox2_);
export default Checkbox2;