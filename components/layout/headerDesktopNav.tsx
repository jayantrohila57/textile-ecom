import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { currentUser } from "@/server/api-auth";

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

const headerData: IHeaderData[] = [
  {
    title: "Readymade",
    category: [
      {
        title: "Topwear",
        link: "/topwear",
        categories: [
          {
            title: "T-Shirts",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Casual Shirts",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Formal Shirts",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Sweatshirts",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Sweaters",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Jackets",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Blazers & Coats",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/bottomwear",
        categories: [
          {
            title: "Jeans",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Casual Trousers",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Formal Trousers",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Shorts",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Track Pants & Joggers",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
        ],
      },
    ],
  },
  {
    title: "Textiles",
    category: [
      {
        title: "Topwear",
        link: "/topwear",
        categories: [
          {
            title: "Tabs1",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs2",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs3",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs4",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
        ],
      },
      {
        title: "Bottomwear",
        link: "/bottomwear",
        categories: [
          {
            title: "Tabs1",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs2",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs3",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
          {
            title: "Tabs4",
            link: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab.",
          },
        ],
      },
    ],
  },
];

const DesktopNavigationMenu = async () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headerData.map((header) => (
          <NavigationMenuItem key={header.title}>
            <Link href={header.category[0].link} passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <NavigationMenuTrigger>{header.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {header.category.map((category) => (
                      <h2 key={category.title}>{category.title}</h2>
                    ))}
                    {header.category.map((category) =>
                      category.categories.map((subcategory) => (
                        <ListItem
                          key={subcategory.title}
                          title={subcategory.title}
                          href={subcategory.link}
                        >
                          {subcategory.description}
                        </ListItem>
                      ))
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="cursor-pointer">
          <Link href="/about" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {(await currentUser()) && (
          <NavigationMenuItem className="cursor-pointer">
            <Link href="/contact" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigationMenu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
