import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/utils/theme-switch";
import { GithubIcon } from "@/components/icons/icons";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="static">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/favicon.ico" alt="Icono del nombre" width={20} height={20}/>
            <p className="font-bold text-inherit ml-1 ">AirDev</p>
          </NextLink>
        </NavbarBrand>
        
      </NavbarContent>

      <NavbarContent
        className="basis-1"
        justify="end"
      >
        <NavbarItem >
          <Link isExternal aria-label="Github" href={siteConfig.links.github} className="pr-2">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
