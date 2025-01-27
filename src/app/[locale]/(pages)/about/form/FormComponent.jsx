"use client";

import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Fragment } from "react";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
// Dynamically import CKEditor to prevent SSR issues
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import TagForm from "@/components/custom/formInputs/TagForm";
const CustomEditor = dynamic(
  () => import("@/components/custom/ckeditor5/CustomEditor"),
  {
    ssr: false,
  }
);

const FormComponent = () => {
  const locale = useLocale();
  const t = useTranslations("AboutPage");
  const tt = useTranslations("Tabs");
  const ttg = useTranslations("Tags");
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

  const sectionName = "About_Edit";

  const contentValue_en = form.watch(`${sectionName}_Editor_en`);
  const contentValue_ar = form.watch(`${sectionName}_Editor_ar`);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style">
          <Tabs
            defaultValue={locale == "en" ? "english" : "arabic"}
            className="tabs-style w-full"
          >
            <TabsList
              className={`absolute -top-12 h-auto bg-transparent gap-2 ${
                locale == "en" ? "-right-1" : "-left-1"
              }`}
            >
              <TabsTrigger
                value="english"
                className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
              >
                {tt("en")}
              </TabsTrigger>
              <TabsTrigger
                value="arabic"
                className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
              >
                {tt("ar")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="english" className="space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="About"
                lang="en"
                title={t("title")}
                name={`${sectionName}_Title_en`}
                placeholder={tpl("title")}
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section="About"
                lang="en"
                title={t("description")}
                name={`${sectionName}_Description_en`}
                placeholder={tpl("description")}
              />
              {/* Content */}
              <div className="col-span-3">
                <div className="grid lg:grid-cols-6 items-start w-full">
                  <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
                    {t("content")}
                  </label>
                  <div className="col-span-3">
                    <CustomEditor
                      editorId={`${sectionName}_Editor_en`}
                      value={contentValue_en}
                      errors={form.formState.errors}
                      onChange={(value) =>
                        form.setValue(`${sectionName}_Editor_en`, value)
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Statistics */}
              <div className="grid lg:grid-cols-6 gap-3">
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#b5b5b5] text-md lg:pt-2 text-start">
                  {t("statistics")}
                </label>
                <div className="flex flex-col gap-3 col-span-3">
                  {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
                    return (
                      <div key={i} className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name={`${sectionName}_Statistic${i + 1}_en`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder={tpl("title")}
                                  type="text"
                                  className="h-12 col-span-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`${sectionName}_Statistic${i + 1}_Value_en`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder={tpl("value")}
                                  type="text"
                                  className="h-12 col-span-3"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="About"
                lang="ar"
                title={t("title")}
                name={`${sectionName}_Title_ar`}
                placeholder={tpl("title")}
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section="About"
                lang="ar"
                title={t("description")}
                name={`${sectionName}_Description_ar`}
                placeholder={t("description")}
              />
              {/* Content */}
              <div className="col-span-3">
                <div className="grid lg:grid-cols-6 items-start w-full">
                  <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
                    {t("content")}
                  </label>
                  <div className="col-span-3">
                    <CustomEditor
                      editorId={`${sectionName}_Editor_ar`}
                      value={contentValue_ar}
                      errors={form.formState.errors}
                      onChange={(value) =>
                        form.setValue(`${sectionName}_Editor_ar`, value)
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Statistics */}
              <div className="grid grid-cols-6">
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#b5b5b5] text-md lg:pt-2 text-start">
                  {t("statistics")}
                </label>
                <div className="grid grid-cols-2 gap-4 col-span-3">
                  {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
                    return (
                      <Fragment key={i}>
                        <FormField
                          control={form.control}
                          name={`${sectionName}_Statistic${i + 1}_ar`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder={tpl("title")}
                                  type="text"
                                  className="h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`${sectionName}_Statistic${i + 1}_Value_ar`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder={tpl("value")}
                                  type="text"
                                  className="h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start rounded-tr-lg">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          {/* Tags */}
          <TagForm form={form} title={ttg("tags")} name="About_Tags" />
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
