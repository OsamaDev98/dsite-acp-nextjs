"use client";

import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import defaultImg from "@/app/img/default-img.jpg";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useLocale, useTranslations } from "next-intl";

const EditImage = ({ h, w, profile, name, form, imageLink }) => {
  const locale = useLocale();
  const tb = useTranslations("Buttons");
  const ta = useTranslations("Alert");

  const [imgUrl, setImgUrl] = useState(
    imageLink?.length > 0 ? imageLink : defaultImg
  );
  useEffect(() => {
    imageLink?.length > 0 && setImgUrl(imageLink);
  }, [imageLink]);

  const handleImage = (e) => {
    const tmpPath = URL.createObjectURL(e.target.files[0]);
    setImgUrl(tmpPath);
  };
  const handleRemoveImage = () => {
    form.setValue(name, {});
    setImgUrl(defaultImg);
    toast.success("Item has been deleted successfully!");
  };

  return (
    <div
      className={`flex ${
        profile ? "items-center gap-4" : "items-start md:flex-row gap-8"
      } flex-col col-span-6 lg:col-span-3`}
    >
      <div className="text-center">
        {profile ? (
          <Image
            src={imgUrl}
            alt="Picture of the app"
            width={200} // automatically provided
            height={200} // automatically provided
            priority // that will be the Largest Contentful Paint (LCP) element for each page. Doing so allows Next.js to specially prioritize the image for loading
            className="border rounded-full h-40 w-40 object-cover"
          />
        ) : (
          <Image
            src={imgUrl}
            alt="Picture of the app"
            width={200} // automatically provided
            height={100} // automatically provided
            priority // that will be the Largest Contentful Paint (LCP) element for each page. Doing so allows Next.js to specially prioritize the image for loading
            className="mb-3 border rounded-md max-h-40 object-contain"
          />
        )}
        {w && h && (
          <>
            <p className="text-sm text-gray-400">
              {w} W x {h} H
            </p>
            <p className="text-sm text-gray-400">
              {locale == "en" ? "Suggested Dimensions" : "الأبعاد المقترحة"}
            </p>
          </>
        )}
      </div>
      <div
        className={`flex ${profile ? "flex-row" : "flex-col"} gap-2 flex-wrap`}
      >
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-center gap-2 text-neutral-400 bg-gray-100 py-3.5 px-5 rounded-md duration-300 hover:text-neutral-700 hover:-translate-y-1 hover:shadow-lg cursor-pointer dark:bg-mainDark-900 text-md text-start">
                <SquarePen className="w-4 h-4" />
                <span>{tb("changeP")}</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="hidden"
                  multiple={false}
                  onChange={(e) => {
                    field.onChange(e.target?.files?.[0] ?? undefined);
                    handleImage(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDialog>
          <AlertDialogTrigger
            type="button"
            className="flex items-center justify-center gap-2 text-neutral-400 bg-gray-100 py-3 px-5 rounded-md duration-300 hover:text-neutral-700 hover:-translate-y-1 hover:shadow-lg cursor-pointer dark:bg-mainDark-900"
          >
            <Trash2 className="w-4 h-4" />
            <span>{tb("deleteP")}</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="!text-start">
              <AlertDialogTitle>{ta("title")}</AlertDialogTitle>
              <AlertDialogDescription>{ta("message")}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-2 flex-wrap">
              <AlertDialogCancel>{ta("cancel")}</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleRemoveImage()}>
                {ta("continue")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
export default EditImage;
