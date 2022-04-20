// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import GlobalContextsProvider from "../components/plasmic/club_debut_3_pl_app/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/club_debut_3_pl_app/PlasmicGlobalVariant__Screen";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/club_debut_3_pl_app/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { UnnamedGlobalGroupOfVariants2Context } from "../components/plasmic/club_debut_3_pl_app/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants2";
import { PlasmicSignupSuccess } from "../components/plasmic/club_debut_3_pl_app/PlasmicSignupSuccess";

function SignupSuccess() {
  // Use PlasmicSignupSuccess to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSignupSuccess are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicSignupSuccess is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <UnnamedGlobalGroupOfVariants2Context.Provider value={undefined}>
      <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
        <GlobalContextsProvider>
          <PlasmicSignupSuccess />
        </GlobalContextsProvider>
      </UnnamedGlobalGroupOfVariantsContext.Provider>
    </UnnamedGlobalGroupOfVariants2Context.Provider>
  );
}

export default SignupSuccess;
