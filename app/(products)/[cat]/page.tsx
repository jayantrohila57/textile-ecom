import React from "react";

interface Product {
  title: string;
  desc: string;
  img: string;
  price: number;
  link: string;
  slug: string;
}

interface Category {
  title: string;
  products: Product[];
}

const CategoryMap: React.FC = () => {
  const categories: Category[] = [
    {
      title: "Kurta",
      products: [
        {
          title: "Men's Cotton Kurta",
          desc: "Comfortable and stylish men's cotton kurta.",
          img: "men_kurta.jpg",
          price: 25.99,
          link: "https://example.com/mens-cotton-kurta",
          slug: "mens-cotton-kurta",
        },
        {
          title: "Women's Embroidered Kurta",
          desc: "Elegant embroidered kurta for women.",
          img: "women_kurta.jpg",
          price: 34.99,
          link: "https://example.com/womens-embroidered-kurta",
          slug: "womens-embroidered-kurta",
        },
        {
          title: "Kids' Printed Kurta",
          desc: "Adorable printed kurta for kids.",
          img: "kids_kurta.jpg",
          price: 19.99,
          link: "https://example.com/kids-printed-kurta",
          slug: "kids-printed-kurta",
        },
      ],
    },
    {
      title: "Pajama",
      products: [
        {
          title: "Men's Cotton Pajama",
          desc: "Soft and comfortable cotton pajama for men.",
          img: "men_pajama.jpg",
          price: 15.99,
          link: "https://example.com/mens-cotton-pajama",
          slug: "mens-cotton-pajama",
        },
        {
          title: "Silk Pajama Set",
          desc: "Luxurious silk pajama set for men.",
          img: "silk_pajama.jpg",
          price: 39.99,
          link: "https://example.com/silk-pajama-set",
          slug: "silk-pajama-set",
        },
        {
          title: "Kids' Printed Pajama",
          desc: "Fun printed pajama for kids.",
          img: "kids_pajama.jpg",
          price: 12.99,
          link: "https://example.com/kids-printed-pajama",
          slug: "kids-printed-pajama",
        },
      ],
    },
    // Add more categories as needed
  ];

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-sm mb-4">{product.desc}</p>
      <p className="text-base font-bold mb-2">${product.price.toFixed(2)}</p>
      <a href={product.link} className="text-blue-500 hover:underline">
        View Details
      </a>
    </div>
  );

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {categories.map((category, index) => (
        <div key={index} className="w-full  p-4">
          <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
          <div className="grid gap-4 grid-cols-3">
            {category.products.slice(0, 3).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryMap;
