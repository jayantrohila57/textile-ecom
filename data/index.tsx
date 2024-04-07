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
            link: "/textile/shirt",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurta",
            link: "/textile/kurta",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwani",
            link: "/textile/sherwani",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },
          {
            title: "Blazer",
            link: "/textile/blazer",
            description:
              "Formal and sophisticated jackets suitable for various events.",
          },
          {
            title: "Jacket",
            link: "/textile/jacket",
            description: "Stylish outerwear for protection and fashion.",
          },
          {
            title: "Sweater",
            link: "/textile/sweater",
            description: "Warm and cozy knitted garments for cooler weather.",
          },
          {
            title: "Hoodie",
            link: "/textile/hoodie",
            description: "Casual and comfortable sweatshirts with a hood.",
          },
          {
            title: "T-shirt",
            link: "/textile/t-shirt",
            description:
              "Everyday casual wear with various designs and styles.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/textile",
        categories: [
          {
            title: "Pants",
            link: "/textile/pants",
            description:
              "Versatile trousers suitable for everyday wear and formal occasions.",
          },
          {
            title: "Jeans",
            link: "/textile/jeans",
            description: "Durable and stylish denim pants for casual wear.",
          },
          {
            title: "Trousers",
            link: "/textile/trousers",
            description: "Formal pants designed for professional settings.",
          },
          {
            title: "Shorts",
            link: "/textile/shorts",
            description: "Comfortable and casual attire for warm weather.",
          },
          {
            title: "Dhoti",
            link: "/textile/dhoti",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Lungi",
            link: "/textile/lungi",
            description:
              "Traditional garment worn in South and Southeast Asia.",
          },
          {
            title: "Salwar",
            link: "/textile/salwar",
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
        link: "/readymade",
        categories: [
          {
            title: "Shirts",
            link: "/readymade/shirts",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurtas",
            link: "/readymade/kurtas",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwanis",
            link: "/readymade/sherwanis",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },
          {
            title: "Jackets",
            link: "/readymade/jackets",
            description: "Stylish outerwear for protection and fashion.",
          },
          {
            title: "Sweaters",
            link: "/readymade/sweaters",
            description: "Warm and cozy knitted garments for cooler weather.",
          },
          {
            title: "T-shirts",
            link: "/readymade/t-shirts",
            description:
              "Everyday casual wear with various designs and styles.",
          },
          {
            title: "Polos",
            link: "/readymade/polos",
            description: "Classic and casual short-sleeved shirts.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/readymade",
        categories: [
          {
            title: "Trousers",
            link: "/readymade/trousers",
            description:
              "Versatile trousers suitable for everyday wear and formal occasions.",
          },
          {
            title: "Pants",
            link: "/readymade/pants",
            description: "Formal pants designed for professional settings.",
          },
          {
            title: "Dhotis",
            link: "/readymade/dhotis",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Veshti/Lungi",
            link: "/readymade/veshti-lungi",
            description:
              "Traditional garment worn in South and Southeast Asia.",
          },
          {
            title: "Shorts",
            link: "/readymade/shorts",
            description: "Comfortable and casual attire for warm weather.",
          },
          {
            title: "Salwar",
            link: "/readymade/salwar",
            description:
              "Traditional loose-fitting trousers worn in South Asia.",
          },
          {
            title: "Churidar",
            link: "/readymade/churidar",
            description: "Tight-fitting trousers worn with a long tunic.",
          },
          {
            title: "Pathani Pants",
            link: "/readymade/pathani-pants",
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
        link: "/collection",
        categories: [
          {
            title: "Wedding",
            link: "/collection/wedding",
            description: "Category for wedding events.",
          },
          {
            title: "Party",
            link: "/collection/party",
            description: "Category for party events.",
          },
          {
            title: "Festival",
            link: "/collection/festival",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "/collection/traditional",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "/collection/fancy",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "/collection/office",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "/collection/daily-wear",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "/collection/uniforms",
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
            link: "/collection/churidar",
            description: "Tight-fitting trousers worn with a long tunic.",
          },
          {
            title: "Pathani Pants",
            link: "/collection/pathani-pants",
            description:
              "Traditional attire originating from the Indian subcontinent.",
          },
          {
            title: "Festival",
            link: "/collection/festival",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "/collection/traditional",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "/collection/fancy",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "/collection/office",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "/collection/daily-wear",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "/collection/uniforms",
            description: "Category for uniforms.",
          },
        ],
      },
    ],
  },
];