import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "08plez70";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "lou",
  title: "Lou — CMS",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Articles")
              .child(
                S.documentTypeList("article").title("Articles")
              ),
            S.divider(),
            S.listItem()
              .title("Categories")
              .child(
                S.documentTypeList("category").title("Categories")
              ),
            S.listItem()
              .title("Authors")
              .child(
                S.documentTypeList("author").title("Authors")
              ),
            S.divider(),
            S.listItem()
              .title("Must Reads")
              .child(
                S.documentTypeList("mustRead").title("Must Read Library")
              ),
            S.listItem()
              .title("Weekly Glossary")
              .child(
                S.documentTypeList("glossary").title("Weekly Glossary")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-03-01" }),
  ],

  schema: {
    types: schemaTypes,
  },
});
