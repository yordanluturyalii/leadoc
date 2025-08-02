'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menus = [
  {
    title: "Profile",
    url: "/dashboard/profile",
  },
  {
    title: "Connection Status",
    url: "/dashboard/profile/connection-status",
  },
  {
    title: "Password",
    url: "/dashboard/profile/password",
  }
];

const NavigationMenu = () => {
  const path = usePathname();
  return (
    <div className="lg:w-[400px] md:h-auto w-[279px] h-10 flex lg:flex-col gap-4 lg:gap-0">
      <div className="flex items-center lg:items-start lg:flex-col gap-4 lg:gap-0">
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.url} className={`text-neutral-900 text-body-md px-0.5 py-2.5 lg:p-3 lg:rounded-lg ${path === menu.url ? 'border-b-2 border-b-neutral-900 lg:bg-neutral-200 lg:border-none font-semibold lg:w-full' : 'font-medium'}`}>
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationMenu