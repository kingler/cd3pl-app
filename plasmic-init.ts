import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {
  SupabaseMutation,
  SupabaseQuery,
  SupabaseUserLogIn,
  SupabaseUserLogOut,
  SupabaseUserSession,
  SupabaseUserSignUp,
} from "./components/CodeComponents/DatabaseComponents";
import {
  SupabaseField,
  SupabaseGrid,
  SupabaseGridCollection,
  SupabaseImgField,
  SupabaseTableCollection,
  SupabaseTextField,
} from "./components/CodeComponents/DisplayCollections";
import {
  FormContextComponent,
  FormTextInput,
} from "./components/CodeComponents/Form";
import { RedirectIf } from "./components/CodeComponents/LogicComponents";
import {
  SupabaseDeleteButton,
  SupabaseEditButton,
  SupabaseModal,
} from "./components/CodeComponents/UtilsComponents";


const plasmicProjectId = process.env.PLASMIC_PROJECT_ID ?? "";
const plasmicApiToken = process.env.PLASMIC_API_TOKEN ?? "";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: plasmicProjectId,
      token: plasmicApiToken,
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

/**
 * Register your code components here for use in the Plasmic Studio
 * See /plasmic-host where the app-host is defined.
 * Once you point your Plasmic project to the app host, you should see your code components
 */
 PLASMIC.registerComponent(SupabaseField, {
  name: "SupabaseField",
  props: {
    selector: "string",
    type: {
      type: "choice",
      defaultValue: "text",
      options: ["text", "image"],
    },
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseTextField, {
  name: "SupabaseTextField",
  props: {
    name: "string",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseImgField, {
  name: "SupabaseImgField",
  props: {
    url: "string",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseGrid, {
  name: "SupabaseGrid",
  props: {
    tableName:{
      type: "choice",
      defaultValue: "customers",
      options: [
        "Customers"
      ],
    },
    tableColumns: {
      type: "choice",
      multiSelect: true,
      options: 
       [
        "id",
        "first_name",
        "last_name",
        "phone_number",
        "imageUrl",
        "created_at",
        "billing_address",
        "shipping_address",
        "email",
        "type",
        "business_name"
      ],
    },
    queryFilters: "object",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    numColumns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
    count: "number",
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading...",
      },
    },
  },
  importPath: "./components/CodeComponents/DisplayCollections",
},);

PLASMIC.registerComponent(SupabaseGrid, {
  name: "SupabaseGridProducts",
  props: {
    tableName: {
      type: "choice",
      defaultValue: "Products",
      options: [
        "Products"
      ],
    },
    tableColumns: {
      type: "choice",
      multiSelect: true,
      options: 
       [
        "id",
        "catalog",
        "collection",
        "category",
        "supplier",
        "imageUrl",
        "product_name",
        "description",
        "size",
        "color",
        "sku",
        "unit_cost",
        "sale_price",
        "margin",
        "profit",
        "is_published",
      ],
    },
    
    queryFilters: "object",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    numColumns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
    count: "number",
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading...",
      },
    },
  },
  importPath: "./components/CodeComponents/DisplayCollections",
},);

PLASMIC.registerComponent(SupabaseGridCollection, {
  name: "SupabaseGridCollection",
  props: {
    count: "number",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    columns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading...",
      },
    },
    testLoading: "boolean",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(FormTextInput, {
  name: "FormTextInput",
  props: {
    name: "string",
    children: "slot",
    defaultValue: "string",
  },
  importPath: "./components/CodeComponents/Form",
});

PLASMIC.registerComponent(FormContextComponent, {
  name: "FormContext",
  props: {
    children: "slot",
  },
  importName: "FormContextComponent",
  importPath: "./components/CodeComponents/Form",
});

PLASMIC.registerComponent(SupabaseQuery, {
  name: "SupabaseQuery",
  props: {
    children: "slot",
    tableName: "string",
    columns: "string",
    filters: "object",
    single: "boolean",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseUserSession, {
  name: "SupabaseUserSession",
  props: {
    children: "slot",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseUserLogOut, {
  name: "SupabaseUserLogOut",
  props: {
    children: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseUserLogIn, {
  name: "SupabaseUserLogIn",
  props: {
    children: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseUserSignUp, {
  name: "SupabaseUserSignUp",
  props: {
    children: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseMutation, {
  name: "SupabaseMutation",
  props: {
    children: "slot",
    tableName: "string",
    filters: "object",
    method: {
      type: "choice",
      options: ["upsert", "insert", "update", "delete"],
    },
    data: "object",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents",
});

PLASMIC.registerComponent(SupabaseTableCollection, {
  name: "SupabaseTableCollection",
  props: {
    columns: {
      type: "string",
    },
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading...",
      },
    },
    testLoading: "boolean",
    canEdit: "boolean",
    canDelete: "boolean",
    editSlot: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    deleteSlot: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    customizeEditAndDelete: "boolean",
    editPage: "string",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseEditButton, {
  name: "SupabaseEditButton",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    editPage: "string",
    id: "string",
  },
  importPath: "./components/CodeComponents/UtilsComponents",
});

PLASMIC.registerComponent(SupabaseDeleteButton, {
  name: "SupabaseDeleteButton",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    id: "string",
    modal: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "SupabaseMutation",
        props: {
          children: {
            type: "component",
            name: "SupabaseModal",
          },
        },
      },
    },
  },
  importPath: "./components/CodeComponents/UtilsComponents",
});

PLASMIC.registerComponent(SupabaseModal, {
  name: "SupabaseModal",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder",
      },
    },
    showModal: "boolean",
  },
  importPath: "./components/CodeComponents/UtilsComponents",
});

PLASMIC.registerComponent(RedirectIf, {
  name: "RedirectIf",
  props: {
    children: "slot",
    operator: {
      type: "choice",
      options: ["FALSY", "TRUTHY", "EQUAL", "LESS_THAN", "GREATER_THAN"],
    },
    redirectUrl: "string",
    leftExpression: "string",
    rightExpression: "string",
  },
  importPath: "./components/CodeComponents/LogicComponents",
});
