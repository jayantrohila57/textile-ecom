interface ICategory {
  title: string;
  link: string;
  description: string;
  image: string;
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
            image:
              "https://img.freepik.com/free-photo/handsome-working-man-checking-phone_23-2148336851.jpg?w=740",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurta",
            link: "/textile/kurta",
            image:
              "https://img.freepik.com/free-photo/young-man-posing-casually-white-wall_1157-48198.jpg?w=360",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwani",
            link: "/textile/sherwani",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25634722/2023/10/26/9dce5b5f-dcba-43d4-9bd2-e5c04f28be221698307406833HOUSEOFDEYANNMenEmbroideredSherwani1.jpg",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },
          {
            title: "Blazer",
            link: "/textile/blazer",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22689492/2023/11/21/31415fb9-b265-4f9a-b750-f290f82929011700548283395-Mr-Bowerbird-Men-Blazers-5551700548282936-1.jpg",
            description:
              "Formal and sophisticated jackets suitable for various events.",
          },
          {
            title: "Jacket",
            link: "/textile/jacket",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11817202/2020/4/29/a07c4e3f-7ff5-4550-8b78-702ae8fbe50e1588139784447DEYANNMenBlueWovenDesignNehruJacket1.jpg",
            description: "Stylish outerwear for protection and fashion.",
          },
          {
            title: "Sweater",
            link: "/textile/sweater",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11973378/2020/10/16/8d2fd6f0-f887-411f-ab50-f4b593c1caad1602837354624-Mast--Harbour-Men-Sweaters-1001602837352940-1.jpg",
            description: "Warm and cozy knitted garments for cooler weather.",
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
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23877256/2023/9/15/e22b7e9f-7034-42ee-8a94-e6206a6f63f61694757637481-Van-Heusen-Men-Trousers-6711694757636981-1.jpg",
            description:
              "Versatile trousers suitable for everyday wear and formal occasions.",
          },

          {
            title: "Trousers",
            link: "/textile/trousers",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25074740/2023/9/21/d4cc9b21-a686-4236-bfac-22829a812ed71695271791954FUBARMenGreyRelaxedEasyWashTrousers1.jpg",
            description: "Formal pants designed for professional settings.",
          },
          {
            title: "Shorts",
            link: "/textile/shorts",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20935296/2022/12/5/81664b3b-92c5-46ae-b390-88962d3bd7f71670225555438-The-Indian-Garage-Co-Men-Shorts-4701670225554770-1.jpg",
            description: "Comfortable and casual attire for warm weather.",
          },
          {
            title: "Dhoti",
            link: "/textile/dhoti",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/12/17/4d034240-7903-4180-9bf3-3adb6f6f94f91608207291057-2.jpg",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Lungi",
            link: "/textile/lungi",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28491702/2024/3/23/a754c77a-8718-4f00-bc60-1b324e1627011711196467905Dhotis2.jpg",
            description:
              "Traditional garment worn in South and Southeast Asia.",
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
            image:
              "https://img.freepik.com/free-photo/handsome-working-man-checking-phone_23-2148336851.jpg?w=740",
            description:
              "Versatile and stylish shirts for different occasions.",
          },
          {
            title: "Kurta",
            link: "/readymade/kurta",
            image:
              "https://img.freepik.com/free-photo/young-man-posing-casually-white-wall_1157-48198.jpg?w=360",
            description: "Traditional and comfortable ethnic wear.",
          },
          {
            title: "Sherwani",
            link: "/readymade/sherwani",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25634722/2023/10/26/9dce5b5f-dcba-43d4-9bd2-e5c04f28be221698307406833HOUSEOFDEYANNMenEmbroideredSherwani1.jpg",
            description:
              "Elegant attire for special occasions, especially weddings.",
          },

          {
            title: "Blazer",
            link: "/readymade/blazer",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22689492/2023/11/21/31415fb9-b265-4f9a-b750-f290f82929011700548283395-Mr-Bowerbird-Men-Blazers-5551700548282936-1.jpg",
            description:
              "Formal and sophisticated jackets suitable for various events.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/readymade",

        categories: [
          {
            title: "Pants",
            link: "/readymade/pants",
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23877256/2023/9/15/e22b7e9f-7034-42ee-8a94-e6206a6f63f61694757637481-Van-Heusen-Men-Trousers-6711694757636981-1.jpg",
            description: "Formal pants designed for professional settings.",
          },

          {
            title: "Dhotis",
            link: "/readymade/dhotis",
            image: "",
            description: "Traditional garment worn mainly in South Asia.",
          },
          {
            title: "Lungi",
            link: "/readymade/lungi",
            image: "",
            description:
              "Traditional garment worn in South and Southeast Asia.",
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
            image: "",
            description: "Category for wedding events.",
          },
          {
            title: "Party",
            link: "/collection/party",
            image: "",
            description: "Category for party events.",
          },
          {
            title: "Festival",
            link: "/collection/festival",
            image: "",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "/collection/traditional",
            image: "",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "/collection/fancy",
            image: "",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "/collection/office",
            image: "",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "/collection/daily-wear",
            image: "",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "/collection/uniforms",
            image: "",
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
            image: "",
            description: "Tight-fitting trousers worn with a long tunic.",
          },
          {
            title: "Pant",
            link: "/collection/pant",
            image: "",
            description:
              "Traditional attire originating from the Indian subcontinent.",
          },
          {
            title: "Festival",
            link: "/collection/festival",
            image: "",
            description: "Category for festival events.",
          },
          {
            title: "Traditional",
            link: "/collection/traditional",
            image: "",
            description: "Category for traditional events.",
          },
          {
            title: "Fancy",
            link: "/collection/fancy",
            image: "",
            description: "Category for fancy events.",
          },
          {
            title: "Office",
            link: "/collection/office",
            image: "",
            description: "Category for office wear.",
          },
          {
            title: "Daily Wear",
            link: "/collection/daily-wear",
            image: "",
            description: "Category for daily wear.",
          },
          {
            title: "Uniforms",
            link: "/collection/uniforms",
            image: "",
            description: "Category for uniforms.",
          },
        ],
      },
    ],
  },
];
