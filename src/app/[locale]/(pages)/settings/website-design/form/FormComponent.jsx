"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import ChangeColor from "../custom/ChangeColor";
import UploadLogo from "../custom/UploadLogo";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useTranslations } from "next-intl";

const logoData = [
  { id: 1, title: "Colorful", classTitle: "colorful_logo", size: "large" },
  {
    id: 2,
    title: "White",
    classTitle: "white_logo",
    size: "large",
  },
  {
    id: 3,
    title: "Favicon",
    classTitle: "favicon_logo",
    size: "small",
  },
];

const colorsData = [
  {
    id: 1,
    title: "title",
    name: "Main_Color",
    color: "#000000",
  },
  {
    id: 2,
    title: "Subtitle",
    name: "Subtitle_Color",
    color: "#f0dcc8",
  },
  {
    id: 3,
    title: "Light",
    name: "Light_Color",
    color: "#b48c50",
  },
  {
    id: 4,
    title: "Dark",
    name: "Dark_Color",
    color: "#f0f0c8",
  },
  {
    id: 5,
    title: "Button",
    name: "Button_Color",
    color: "#f0dcdc",
  },
  {
    id: 6,
    title: "Paragraph",
    name: "Paragraph_Color",
    color: "#ffffff",
  },
  {
    id: 7,
    title: "Footer",
    name: "Footer_Color",
    color: "#d6d6d6",
  },
  {
    id: 8,
    title: "background",
    name: "Light_Background_Color",
    color: "#f0f0dc",
  },
];

const LogoAndColors = () => {
  const t = useTranslations("WebsiteDesign");

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style mt-2 rounded-tr-lg">
          <h1 className="text-3xl text-mainColor-500 text-center font-bold capitalize mb-12">
            {t("logos")}
          </h1>
          <div className="w-full flex justify-center gap-8 lg:gap-24 flex-wrap">
            {logoData?.map((item) => {
              return (
                <UploadLogo
                  key={item.id}
                  form={form}
                  title={t(item.title.toLowerCase())}
                  name={item.classTitle}
                  classTitle={item.classTitle}
                  size={item.size}
                  logoId={item.id}
                />
              );
            })}
          </div>
          <h1 className="text-3xl text-mainColor-500 text-center font-bold capitalize my-12">
            {t("colors")}
          </h1>
          <div className="w-full grid md:grid-cols-2 gap-4">
            {colorsData?.map((item) => {
              return (
                <ChangeColor
                  key={item.id}
                  form={form}
                  name={item.name}
                  title={t(item.title.toLowerCase())}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-end my-8">
          <SubmitButton title="Update" />
        </div>
      </form>
    </Form>
  );
};
export default LogoAndColors;
