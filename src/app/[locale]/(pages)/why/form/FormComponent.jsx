"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
// Dynamically import CKEditor to prevent SSR issues
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";
const CustomEditor = dynamic(
  () => import("@/components/custom/ckeditor5/CustomEditor"),
  {
    ssr: false,
  }
);

const FormComponent = () => {
  const locale = useLocale();
  const t = useTranslations("WhyPage");
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

  const contentValue_en = form.watch("Why_Editor_en");
  const contentValue_ar = form.watch("Why_Editor_ar");

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
                section="Banner"
                placeholder={tpl("title")}
                name="Why_Edit_Title_en"
                lang="en"
                title={t("title")}
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Banner"
                placeholder={tpl("subtitle")}
                name="Why_Edit_Subtitle_en"
                lang="en"
                title={t("subtitle")}
              />
              {/* Content */}
              <div className="grid lg:grid-cols-6 items-start w-full">
                <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
                  {t("content")}
                </label>
                <div className="col-span-3">
                  <CustomEditor
                    editorId="Why_Editor_en"
                    value={contentValue_en}
                    errors={form.formState.errors}
                    onChange={(value) => form.setValue("Why_Editor_en", value)}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Banner"
                placeholder={tpl("title")}
                name="Why_Edit_Title_ar"
                lang="ar"
                title={t("title")}
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Banner"
                placeholder={tpl("subtitle")}
                name="Why_Edit_Subtitle_ar"
                lang="ar"
                title={t("subtitle")}
              />
              {/* Content */}
              <div className="grid lg:grid-cols-6 items-start w-full">
                <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
                  {t("content")}
                </label>
                <div className="col-span-3">
                  <CustomEditor
                    editorId="Why_Editor_ar"
                    value={contentValue_ar}
                    errors={form.formState.errors}
                    onChange={(value) => form.setValue("Why_Editor_ar", value)}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
