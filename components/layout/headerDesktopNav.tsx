"use client";

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
import { ChevronRight } from "lucide-react";
import { headerData } from "@/data";

 

export function DesktopNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headerData.map(({ title, category }) => (
          <NavigationMenuItem className="bg-transparent" key={title}>
            {/* <Link href={header.category[0].link} passHref> */}
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavigationMenuTrigger className="font-semibold bg-transparent">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-2 md:w-[800px] grid-cols-2  lg:w-[1000px]">
                  {category.map(({ categories, link: l, title: t }) => (
                    <div
                      key={l + t}
                      className="hover:bg-secondary p-2  flex flex-col justify-between rounded-lg"
                    >
                      <div className="col-span-2 justify-between gap-5 flex flex-col">
                        <div
                          id="heading"
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="h-40 aspect-video w-full rounded-xl bg-red-500"></div>
                          <Link
                            className="text-2xl capitalize w-full flex flex-row justify-between items-center font-semibold p-2"
                            href={l}
                          >
                            {t}
                            <ChevronRight className="w-6 h-6  inline" />
                          </Link>
                        </div>
                        <ul className="grid grid-cols-2">
                          {categories.map(
                            ({ description, link: sl, title: st }) => (
                              <ListItem
                                key={st}
                                title={st}
                                className="w-60"
                                href={sl}
                              >
                                <p className="text-xs truncate">
                                  {description}...
                                </p>
                              </ListItem>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
        ))}
        {/* <NavigationMenuItem>
          <Link href="/about" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
