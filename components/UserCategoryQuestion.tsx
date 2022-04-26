import * as React from "react";
import {
  PlasmicUserCategoryQuestion,
  DefaultUserCategoryQuestionProps
} from "./plasmic/club_debut_3_pl_app/PlasmicUserCategoryQuestion";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
export interface UserCategoryQuestionProps
  extends DefaultUserCategoryQuestionProps {}

function UserCategoryQuestion_(
  props: UserCategoryQuestionProps,
  ref: HTMLElementRefOf<"div">
) {
  
  return <PlasmicUserCategoryQuestion questionOption2={{ ref }} {...props} />;
}

const UserCategoryQuestion = React.forwardRef(UserCategoryQuestion_);
export default UserCategoryQuestion;
