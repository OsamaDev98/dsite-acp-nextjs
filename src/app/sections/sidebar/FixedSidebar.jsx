"use client";

import { useRef, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { sidebarMenu } from "./data/sidebarMenu";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGlobalState, setGlobalState } from "@/context/GlobalStateContext";
import { CircleX } from "lucide-react";
import Logo from "@/app/img/dsite-logo.svg";

export default function FixedSidebar() {
  const isOpen = useGlobalState("openSidebar")[0];
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  // Translation
  const t = useTranslations("Sidebar");

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setGlobalState("openSidebar", false);
      }
    };
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "";
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside className="flex">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute xl:sticky top-0 max-h-screen overflow-auto h-full px-4 bg-white dark:bg-mainDark-800 text-white w-[300px] z-20 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "ltr:-translate-x-full ltr:xl:translate-x-0 rtl:translate-x-full rtl:xl:-translate-x-0 w-0 p-0"
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="text-center flex flex-col items-center justify-center mt-4 xl:mt-0">
            <Link href="/" title="home page">
              <Image src={Logo} alt="dsite logo" width={120} height={60} />
            </Link>
            <p className="text-center my-4 text-slate-400">
              Website Control Management
            </p>
          </div>
          <CircleX
            onClick={() => setGlobalState("openSidebar", false)}
            className="text-mainColor-500 w-7 h-7 flex xl:hidden absolute top-4 ltr:right-4 rtl:left-4 z-10"
          />
        </div>
        <nav className="mt-4">
          <ul className="mb-8 !mx-0">
            {sidebarMenu.length > 0 &&
              sidebarMenu?.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      onClick={() => setGlobalState("openSidebar", false)}
                      className={
                        pathname
                          .split("/")
                          .splice(1)
                          .includes(item.link.replace("/", "").toLowerCase()) ||
                        (pathname == "/en" &&
                          item.name.toLowerCase() == "home") ||
                        (pathname == "/ar" && item.name.toLowerCase() == "home")
                          ? "active_link p-3 text-[18px] text-white bg-[#42a5f5] w-full h-12 rounded-md flex items-center gap-2"
                          : "p-3 text-[18px] text-[#656565] w-full h-12 rounded-md duration-300 hover:text-[#42a5f5] hover:translate-x-1 hover:bg-slate-50 flex items-center gap-2 dark:text-mainDark-200"
                      }
                    >
                      <span>{item.icon}</span>
                      <span className="line-clamp-1">
                        {t(item.name.toLowerCase())}
                      </span>
                    </Link>
                    {item.name == "Settings" && <Separator className="my-2" />}
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 xl:hidden"
          onClick={() => setGlobalState("openSidebar", false)}
        ></div>
      )}
    </aside>
  );
}
