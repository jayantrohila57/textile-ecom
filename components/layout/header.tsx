import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LeafIcon, ShoppingCart, SquareUserRound } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import { currentUser } from "@/server/api-auth";
import Image from "next/image";
import logo from "@/assets/csssk.png";
import { ComboboxDemo } from "../common/popover-command";
import { DesktopNavigationMenu } from "./headerDesktopNav";

const Header = async () => (
  <div className="z-[500] LayoutBackground">
    <div className="flex h-16 items-center w-full md:px-6 px-2">
      <Link href="/">
        <div className="w-16">
          <Image
            src={logo}
            alt="logo"
            width={500}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <div className="w-full hidden md:block pl-20 ">
        <DesktopNavigationMenu />
      </div>
      <div className="ml-auto flex items-center space-x-4">
        {/* <ComboboxDemo /> */}
        <ModeToggle />
        {(await currentUser()) ? (
          <>
            <Button variant={"outline"} size={"icon"} asChild>
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="rounded-full"
            >
              <Link href="/dashboard">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth/sign-in">
              <Button size={"sm"} variant={"outline"} className="group">
                Sign Up
              </Button>
            </Link>
            <Link href="/contact">
              <Button size={"sm"} variant={"outline"} className="group">
                Contact Us
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  </div>
);

export default Header;
function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] md:block hidden lg:w-[300px]"
      />
    </div>
  );
}

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
