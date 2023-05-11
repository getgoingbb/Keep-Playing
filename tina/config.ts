import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "<761ab2af-4a5c-4d10-93fd-1b0af7754096>", // Get this from tina.io
  token: null: "<9043f2ff45f876fe8d75f27eca12da0d5201a267>",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },


// tina/config.ts
//...
+ const branch =
+  process.env.NEXT_PUBLIC_TINA_BRANCH ||
+  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
+  process.env.HEAD ||
+  ''
export default defineConfig({
  //...
  token: '<79ee4c5e5f00b266e4d405fb65c70cd46c76e006>' // generated on app.tina.io,
  clientId: '761ab2af-4a5c-4d10-93fd-1b0af7754096>', // generated on app.tina.io
  branch,
  schema: {
    collections: [
    //...
    // See https://tina.io/docs/schema/ for more info about "collections"
  ]}
})




});
