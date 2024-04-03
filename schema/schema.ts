import { type SchemaTypeDefinition } from "sanity";

import product from "./product";
import blog from "./blog";
import author from "./author";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, blog, author, category],
};
