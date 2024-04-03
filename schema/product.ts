import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "productSlug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "productBrand",
      title: "Product Brand",
      type: "string",
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Product Images",
      name: "productImages",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: "productRate",
      title: "Product Rate",
      type: "number",
    }),
    defineField({
      name: "shippingTime",
      title: "Shipping Time",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Discription",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "productName",
      media: "productImage",
      subTitle: "productBrand",
    },
  },
});
