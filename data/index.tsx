interface ICategory {
  title: string;
  link: string;
  description: string;
}

interface ICategories {
  title: string;
  link: string;
  categories: ICategory[];
}

interface IHeaderData {
  title: string;
  category: ICategories[];
}
export const headerData: IHeaderData[] = [
  {
    title: "Textiles",
    category: [
      {
        title: "Topwear",
        link: "/textile",
        categories: [
          {
            title: "Shirt",
            link: "/topwear/shirt",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurta",
            link: "/topwear/kurta",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwani",
            link: "/topwear/sherwani",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },
          {
            title: "Blazer",
            link: "/topwear/blazer",
            description:
              "Formal and sophisticated jackets suitable for various events.",
          },
          {
            title: "Jacket",
            link: "/topwear/jacket",
            description: "Stylish outerwear for protection and fashion.",
          },
          {
            title: "Sweater",
            link: "/topwear/sweater",
            description: "Warm and cozy knitted garments for cooler weather.",
          },
          {
            title: "Hoodie",
            link: "/topwear/hoodie",
            description: "Casual and comfortable sweatshirts with a hood.",
          },
          {
            title: "T-shirt",
            link: "/topwear/t-shirt",
            description:
              "Everyday casual wear with various designs and styles.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/bottomwear",
        categories: [
          {
            title: "Pants",
            link: "/textile/bottomwear",
            description:
              "Versatile trousers suitable for everyday wear and formal occasions.",
          },
          {
            title: "Jeans",
            link: "/bottomwear/jeans",
            description: "Durable and stylish denim pants for casual wear.",
          },
          {
            title: "Trousers",
            link: "/bottomwear/trousers",
            description: "Formal pants designed for professional settings.",
          },
          {
            title: "Shorts",
            link: "/bottomwear/shorts",
            description: "Comfortable and casual attire for warm weather.",
          },
          {
            title: "Dhoti",
            link: "/bottomwear/dhoti",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Lungi",
            link: "/bottomwear/lungi",
            description:
              "Traditional garment worn in South and Southeast Asia.",
          },
          {
            title: "Salwar",
            link: "/bottomwear/salwar",
            description:
              "Traditional loose-fitting trousers worn in South Asia.",
          },
        ],
      },
    ],
  },
  {
    title: "Readymade",
    category: [
      {
        title: "Topwear",
        link: "/topwear",
        categories: [
          {
            title: "Shirts",
            link: "/topwear/shirts",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurtas",
            link: "/topwear/kurtas",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwanis",
            link: "/topwear/sherwanis",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },
          {
            title: "Jackets",
            link: "/topwear/jackets",
            description: "Stylish outerwear for protection and fashion.",
          },
          {
            title: "Sweaters",
            link: "/topwear/sweaters",
            description: "Warm and cozy knitted garments for cooler weather.",
          },
          {
            title: "T-shirts",
            link: "/topwear/t-shirts",
            description:
              "Everyday casual wear with various designs and styles.",
          },
          {
            title: "Polos",
            link: "/topwear/polos",
            description: "Classic and casual short-sleeved shirts.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/bottomwear",
        categories: [
          {
            title: "Trousers",
            link: "/bottomwear/trousers",
            description:
              "Versatile trousers suitable for everyday wear and formal occasions.",
          },
          {
            title: "Pants",
            link: "/bottomwear/pants",
            description: "Formal pants designed for professional settings.",
          },
          {
            title: "Dhotis",
            link: "/bottomwear/dhotis",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Veshti/Lungi",
            link: "/bottomwear/veshti-lungi",
            description:
              "Traditional garment worn in South and Southeast Asia.",
          },
          {
            title: "Shorts",
            link: "/bottomwear/shorts",
            description: "Comfortable and casual attire for warm weather.",
          },
          {
            title: "Salwar",
            link: "/bottomwear/salwar",
            description:
              "Traditional loose-fitting trousers worn in South Asia.",
          },
          {
            title: "Churidar",
            link: "/bottomwear/churidar",
            description: "Tight-fitting trousers worn with a long tunic.",
          },
          {
            title: "Pathani Pants",
            link: "/bottomwear/pathani-pants",
            description:
              "Traditional attire originating from the Indian subcontinent.",
          },
        ],
      },
    ],
  },
  {
    title: "Collection",
    category: [
      {
        title: "Collection",
        link: "collection",
        categories: [
          {
            title: "Wedding",
            link: "wedding-link",
            description: "Category for wedding events.",
          },
          {
            title: "Party",
            link: "party-link",
            description: "Category for party events.",
          },
          {
            title: "Festival",
            link: "festival-link",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "traditional-link",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "fancy-link",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "office-link",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "daily-wear-link",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "uniforms-link",
            description: "Category for uniforms.",
          },
        ],
      },

      {
        title: "Latest Collection",
        link: "collection-link",
        categories: [
          {
            title: "Churidar",
            link: "/bottomwear/churidar",
            description: "Tight-fitting trousers worn with a long tunic.",
          },
          {
            title: "Pathani Pants",
            link: "/bottomwear/pathani-pants",
            description:
              "Traditional attire originating from the Indian subcontinent.",
          },
          {
            title: "Festival",
            link: "festival-link",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "traditional-link",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "fancy-link",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "office-link",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "daily-wear-link",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "uniforms-link",
            description: "Category for uniforms.",
          },
        ],
      },
    ],
  },
];
