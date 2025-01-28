"use client";

import Image from "next/image";
import defaultImg from "@/app/img/default-img.jpg";
import { prominent } from "color.js";
import { SquarePen, Trash2 } from "lucide-react";
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
} from "../../../../../../components/ui/alert-dialog";
import { toast } from "sonner";
import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

const UploadLogo = ({ form, name, title, classTitle, size, logoId }) => {
  const [logoImage, setLogoImage] = useState(defaultImg);

  const tb = useTranslations("Buttons");

  const handleImage = (e) => {
    const tmpPath = URL.createObjectURL(e.target.files[0]);
    setLogoImage(tmpPath);
    toast.success("Item has been added successfully!");
  };
  const handleRemoveImage = () => {
    form.setValue(name, {});
    setLogoImage(defaultImg);
    toast.success("Item has been deleted successfully!");
  };

  // Start color extraction
  let uploadImage;
  let colorInputs;
  if (typeof document !== "undefined") {
    // Code that uses document
    uploadImage = document.querySelector(
      `#imagePreview${logoId}.colorful_logo`
    );
    colorInputs = document.querySelectorAll(".color-input");
  }
  if (uploadImage) {
    uploadImage.onload = function () {
      extractColorsFromImage(uploadImage);
    };
  }
  function extractColorsFromImage(image) {
    prominent(image, { amount: 8, format: "hex" }).then((colors) => {
      for (let i = 0; i < colors.length; i++) {
        colorInputs[i].value = colors[i];
        form.setValue(colorInputs[i].name, colors[i]);
        colorInputs[i].previousSibling.style.backgroundColor = colors[i];
      }
    });
  }
  // End color extraction

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3 className="text-lg text-gray-500">{title}</h3>
      <div
        className="border rounded-md flex items-center justify-center overflow-hidden p-2"
        style={
          size == "small"
            ? { width: "100px", height: "80px" }
            : title == "White logo"
            ? { width: "220px", height: "120px", backgroundColor: "#8d8d8d" }
            : { width: "220px", height: "120px" }
        }
      >
        <Image
          src={logoImage}
          alt="Website logo"
          width={120}
          height={120}
          priority
          className={`${classTitle} object-contain`}
          style={
            size == "large"
              ? { width: "120px", height: "110px" }
              : { width: "60px", height: "60px" }
          }
          id={`imagePreview${logoId}`}
        />
      </div>
      <div className="flex items-center gap-2">
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-center gap-2 text-neutral-400 bg-gray-100 p-3 rounded-md duration-300 hover:text-neutral-700 hover:-translate-y-1 hover:shadow-lg cursor-pointer dark:bg-mainDark-900">
                <SquarePen className="w-4 h-4" />
                <span>{tb("change")}</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="hidden"
                  multiple={false}
                  data-id={logoId}
                  onChange={(e) => {
                    field.onChange(e.target?.files?.[0] ?? undefined);
                    handleImage(e);
                  }}
                />
              </FormControl>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <AlertDialog>
          <AlertDialogTrigger
            type="button"
            className="flex items-center justify-center gap-2 text-neutral-400 bg-gray-100 py-2 px-3 rounded-md duration-300 hover:text-neutral-700 hover:-translate-y-1 hover:shadow-lg cursor-pointer dark:bg-mainDark-900"
          >
            <Trash2 className="w-4 h-4" />
            <span>{tb("delete")}</span>
          </AlertDialogTrigger>
          <AlertDialogContent className="dark:bg-mainDark-900">
            <AlertDialogHeader className="!text-start">
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                image and remove your image from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-2 flex-wrap">
              <AlertDialogCancel className="dark:bg-mainDark-800">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => handleRemoveImage()}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
export default UploadLogo;
