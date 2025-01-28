"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import { useState } from "react";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = () => {
  const [youtubeLink, setYoutubeLink] = useState(
    "https://www.youtube.com/embed/bZnrExAoXwA"
  );

  const locale = useLocale();
  const t = useTranslations("ShowPage");
  const tp = useTranslations("Preferences");
  const tpl = useTranslations("Placeholder");
  const tb = useTranslations("Buttons");

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

  const handleYoutubeVideo = (e) => {
    const targetLink = e.target.value;
    console.log(targetLink);
    targetLink.includes("youtu.be")
      ? setYoutubeLink(targetLink.replace("youtu.be", "www.youtube.com/embed"))
      : setYoutubeLink(targetLink);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style">
          <Tabs
            defaultValue={locale == "en" ? "english" : "arabic"}
            className="tabs-style w-full"
          >
            <TabsListComp />
            <TabsContent value="english" className="space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Show"
                lang="en"
                name="Show_Title_en"
                placeholder={tpl("title")}
                title={t("title")}
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Show"
                lang="en"
                name="Show_Subtitle_en"
                placeholder={tpl("subtitle")}
                title={t("subtitle")}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Show"
                placeholder={tpl("title")}
                lang="ar"
                name="Show_Title_ar"
                title={t("title")}
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Show"
                placeholder={tpl("subtitle")}
                lang="ar"
                name="Show_Subtitle_ar"
                title={t("subtitle")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <div className="space-y-4 w-full">
            {/* Link */}
            <FormField
              control={form.control}
              name="Show_Link_Title"
              render={({ field }) => (
                <FormItem className="grid lg:grid-cols-6 items-start w-full">
                  <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
                    {t("link")}
                  </FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Controller
                        name="Show_Link_Title"
                        control={form.control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            value={field.value ? field.value : youtubeLink} // Controlled value
                            onChange={(e) => {
                              field.onChange(e); // Call React Hook Form's onChange
                              handleYoutubeVideo(e); // Call custom handler
                            }}
                            placeholder={tpl("link")}
                            type="text"
                            className="h-12 dark:bg-mainDark-900"
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </div>
                </FormItem>
              )}
            />
            {/* Video */}
            <div className="grid grid-cols-6">
              <iframe
                className="col-start-1 col-end-7 col lg:col-start-2 lg:col-end-5"
                width="100%"
                height="400"
                src={
                  youtubeLink.length > 0
                    ? youtubeLink
                    : "https://www.youtube.com/embed/bZnrExAoXwA"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
