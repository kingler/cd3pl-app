import * as React from "react";
import {
  PlasmicHeading,
  DefaultHeadingProps
} from "./plasmic/club_debut_3_pl_app/PlasmicHeading";
import { HTMLElementRefOf } from "@plasmicapp/react-web";


export interface HeadingProps extends DefaultHeadingProps {}

function Heading_(props: HeadingProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicHeading root={{ ref }} {...props} />;
}

const Heading = React.forwardRef(Heading_);
export default Heading;
