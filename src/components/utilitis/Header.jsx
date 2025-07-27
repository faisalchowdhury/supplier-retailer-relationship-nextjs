"use client";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = (
    <>
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="">About</Link>
      </li>
      <li>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Guidelines</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  Sales Representative Guide
                </NavigationMenuLink>
                <NavigationMenuLink>Retailer Guide</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </li>
      <li>
        <Link href={""}>Contact</Link>
      </li>
    </>
  );
  return (
    <header>
      <div className="max-w-7xl mx-auto px-5 2xl:px-0">
        <div className="flex justify-between items-center py-3 relative">
          <div className="flex gap-5 items-center ">
            <Image
              src={"/logoDark.png"}
              width={200}
              height={50}
              alt="Vendor match logo"
            />
            {/* Dropdown mobile menu */}
            <div className="block sm:hidden">
              <LuMenu size={24} onClick={() => setMenuOpen(!menuOpen)} />
              <div className="absolute left-0 top-20 w-full ">
                {menuOpen ? (
                  <ul className="space-y-3 bg-slate-50 rounded-lg p-5">
                    {menu}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-5">{menu}</ul>
          </div>
          <div>
            <Button variant="default">Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
