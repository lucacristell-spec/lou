import { defineField, defineType } from "sanity";

export default defineType({
  name: "glossary",
  title: "Weekly Glossary",
  type: "document",
  fields: [
    defineField({
      name: "weekStart",
      title: "Week Start",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekEnd",
      title: "Week End",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "terms",
      title: "Terms",
      type: "array",
      of: [
        {
          type: "object",
          name: "glossaryTerm",
          fields: [
            defineField({
              name: "term",
              title: "Term",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "definition",
              title: "Definition",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "reference",
              to: [{ type: "category" }],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "term",
              subtitle: "category.name",
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Week, Recent",
      name: "weekDesc",
      by: [{ field: "weekStart", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      weekStart: "weekStart",
      weekEnd: "weekEnd",
    },
    prepare({ weekStart, weekEnd }) {
      return {
        title: `Glossary: ${weekStart} → ${weekEnd}`,
        subtitle: `Weekly glossary edition`,
      };
    },
  },
});
