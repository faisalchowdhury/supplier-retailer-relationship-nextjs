import Image from "next/image";
import Link from "next/link";
import React from "react";
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
import { FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
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
    <footer className="bg-[#0B1120] text-slate-200 pt-20 pb-10 ">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex justify-center">
          <div className="text-center space-y-5 mb-10">
            <h2 className="text-3xl text-white font-semibold">
              Not sure where to start ?
            </h2>
            <div className="flex gap-5 text-2xl">
              <p className="flex gap-3 items-center">
                <FaEnvelope></FaEnvelope> vendormatch@info.com
              </p>
              |{" "}
              <p className="flex gap-3 items-center">
                {" "}
                <FaPhone></FaPhone> +88 01XXXXXXXXX
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-20">
          <div className="space-y-5  col-span-2">
            <Image
              src={"/logoLite.png"}
              alt="Vendor Match Logo"
              width={200}
              height={50}
            />
            <p className="text-sm text-slate-200">
              Vendor Match connects verified sales representatives with
              retailers to simplify product sourcing. We help businesses save
              time, avoid stockouts, and build direct, reliable connections —
              all from one easy-to-use platform
            </p>
          </div>
          <div className=" ">
            <h3 className="text-xl text-white mb-5 font-medium">
              Official info
            </h3>
            <ul className="text-sm space-y-3">
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={""}>Trams and Conditions</Link>
              </li>
              <li>
                <Link href={""}>Trade license</Link>
              </li>
              <li>
                <Link href={""}></Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className="text-xl text-white mb-5 font-medium">Sitemap</h3>
            <ul className="text-sm space-y-3">{menu}</ul>
          </div>

          <div className=" ">
            <h3 className="text-xl text-white mb-5 font-medium">
              Lets connect
            </h3>
            <ul className="text-sm space-y-3">
              <li>
                <a href="">Linked In</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Gmail</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-xs text-center">
            {" "}
            &copy; {new Date().getFullYear()} All rights reserved by Vendor
            Match{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
