import * as React from "react";
import {
  PlasmicCheckbox,
  DefaultCheckboxProps
} from "./plasmic/club_debut_3_pl_app/PlasmicCheckbox";
import { CheckboxRef } from "@plasmicapp/react-web";

interface CheckboxProps extends DefaultCheckboxProps {}

function Checkbox_(props: CheckboxProps, ref: CheckboxRef) {
  const { plasmicProps, state } = PlasmicCheckbox.useBehavior<CheckboxProps>(
    props,
    ref
  );
  return <PlasmicCheckbox {...plasmicProps} />;
}

const Checkbox = React.forwardRef(Checkbox_);

export default Object.assign(Checkbox, {
  __plumeType: "checkbox"
});
