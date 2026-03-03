import { defineField, defineType } from "sanity";

export default defineType({
  name: "mustRead",
  title: "Must Read",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source / Author",
      type: "string",
      description: 'e.g. "Vaswani et al., 2017 — Google Brain"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Paper", value: "Paper" },
          { title: "Report", value: "Report" },
          { title: "Book", value: "Book" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "complex",
      title: "Complex (needs summary)",
      type: "boolean",
      initialValue: false,
      description: "Toggle on to show a Summary button for this item",
    }),
    defineField({
      name: "summary",
      title: "Plain-Language Summary",
      type: "text",
      rows: 5,
      description: "An accessible summary for complex papers/reports",
      hidden: ({ parent }) => !parent?.complex,
    }),
    defineField({
      name: "url",
      title: "Link (optional)",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "source",
      category: "category.name",
    },
    prepare({ title, subtitle, category }) {
      return {
        title,
        subtitle: `${category} · ${subtitle}`,
      };
    },
  },
});
