"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import ContentInput from "@/components/custom/formInputs/ContentInput";
import { editSchema, addSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import TagForm from "@/components/custom/formInputs/TagForm";

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();
  const t = useTranslations("PagesPage");
  const tt = useTranslations("Tabs");
  const ttg = useTranslations("Tags");
  const tp = useTranslations("Preferences");
  const tpl = useTranslations("Placeholder");
  const tb = useTranslations("Buttons");

  const form = useForm({
    resolver: zodResolver(isEdit ? editSchema : addSchema),
    defaultValues: isEdit ? editDefaultValues : addDefaultValues,
  });

  function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  const sectionName = isEdit ? "Pages_Edit" : "Pages_Add";

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
                section={sectionName}
                placeholder={tpl("title")}
                name={`${sectionName}_Title_en`}
                lang="en"
                title={t("title")}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("subtitle")}
                name={`${sectionName}_Subtitle_en`}
                lang="en"
                title={t("subtitle")}
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                placeholder={tpl("content")}
                name={`${sectionName}_Content_en`}
                lang="en"
                title={t("content")}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("title")}
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title={t("title")}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("subtitle")}
                name={`${sectionName}_Subtitle_ar`}
                lang="ar"
                title={t("subtitle")}
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                placeholder={tpl("content")}
                name={`${sectionName}_Content_ar`}
                lang="ar"
                title={t("content")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <TagForm
            form={form}
            title={ttg("tags")}
            name={`${sectionName}_Tags`}
          />
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
