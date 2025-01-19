"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export function NavTitle() {
  const locale = useLocale();
  const pathname = usePathname();
  const pathNameArr = pathname.split("/").filter((item) => {
    return locale == "en" ? item != "en" : item != "ar";
  });
  const pathLinkArr = pathname.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex-wrap dark:text-mainDark-400">
        {pathname == "/" || pathname == "/en" || pathname == "/ar" ? (
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-lg font-bold">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          pathNameArr?.map((path, i) => {
            return (
              <span key={i} className="flex items-center gap-2 flex-wrap">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={
                      path == ""
                        ? "/"
                        : i == 1
                        ? `/${locale}/${path}`
                        : `${pathLinkArr
                            .slice(0, pathLinkArr.indexOf(path) + 1)
                            .join("/")}`
                    }
                    className="text-lg font-bold"
                  >
                    {path == ""
                      ? "Home"
                      : path.includes("_")
                      ? path.replace("_", " ")
                      : path.replace("-", " ")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathNameArr.length - 1 != i && pathNameArr.length > 1 && (
                  <>
                    {/* <BreadcrumbEllipsis className="h-4 w-4" /> */}
                    <BreadcrumbSeparator />
                  </>
                )}
              </span>
            );
          })
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
