import { groq } from "next-sanity";

/**
 * GROQ query to fetch multiple products.
 * @param {number} start - Starting index for pagination.
 * @param {number} end - Ending index for pagination.
 * @returns {string} - GROQ query string.
 */
export const products = groq`
*[_type == "product"] | order(_id) [$start...$end]{
    productName,
    productBrand,
    productRate,
    "image":productImage.asset->url,
    productSize,
    shippingTime,
    "slug":productSlug.current,
    discription,
    _id
}
`;

/**
 * GROQ query to fetch a single product by slug.
 * @param {string} slug - Slug of the product.
 * @returns {string} - GROQ query string.
 */
export const product = groq`
*[_type == "product" && productSlug.current==$slug][0]{
    _id,
    productName,
    productBrand,
    productRate,
    "image":productImage.asset->url,
    "images":productImages[]{
        "image":asset->url
    },
    productSize,
    shippingTime,
    "slug":productSlug.current,
    discription
}`;

/**
 * GROQ query to fetch multiple blogs.
 * @returns {string} - GROQ query string.
 */
export const blogs = groq`
*[_type == "blog" ]{
    blogName,
    createdAt,
    "category":category->{title,slug},
    "author":author-> {
        authorName, 
        "image":authorImage.asset->url
    },
    "image":blogImage.asset->url,
    "slug":blogSlug.current,
    description,
}
`;

/**
 * GROQ query to fetch a single blog by slug.
 * @param {string} slug - Slug of the blog.
 * @returns {string} - GROQ query string.
 */
export const blog = groq`
*[_type == "blog" && blogSlug.current == $slug][0]{
    blogName,
    createdAt,
    "category":category->{title,slug},
    "author":author->{authorName, 
    "image":authorImage.asset->url
    },
    "image":blogImage.asset->url,
    "slug":blogSlug.current,
    description,
}
`;
