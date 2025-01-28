"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import ContentInput from "@/components/custom/formInputs/ContentInput";
import EditImage from "@/components/custom/EditImage";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import SelectInputWithAction from "@/components/custom/formInputs/SelectInputWithAction";
import { useState } from "react";
import { addSchema, editSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = ({ isEdit }) => {
  const [isVideo, setIsVideo] = useState("");
  const locale = useLocale();
  const t = useTranslations("SliderPage");
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

  const sectionName = isEdit ? "Slider_Edit" : "Slider_Add";

  const fileType = [
    { id: 1, value: "image", title: "image" },
    { id: 2, value: "addlink", title: "video" },
  ];

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
              {/* Button Action */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("action")}
                name={`${sectionName}_Action_en`}
                lang="en"
                title={t("actionBtn")}
              />
              {/* URL */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("url")}
                name={`${sectionName}_Url_en`}
                lang="en"
                title={t("url")}
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
                title={t("title")}
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
              {/* Button Action */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("action")}
                name={`${sectionName}_Action_ar`}
                lang="ar"
                title={t("actionBtn")}
              />
              {/* URL */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder={tpl("url")}
                name={`${sectionName}_Url_ar`}
                lang="ar"
                title={t("url")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <SelectInputWithAction
            form={form}
            title={t("file")}
            section={sectionName}
            name={`${sectionName}_Link`}
            placeholder="File type"
            defaultValue="image"
            selectData={fileType}
            setIsVideo={setIsVideo}
          />
          <div className="space-y-4 w-full">
            {/* Edit image */}
            <div
              className={`grid-cols-6 gap-4 my-8 ${
                isVideo != "addlink" ? "grid" : "hidden"
              }`}
            >
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2 text-start">
                {t("image")}
              </label>
              <EditImage
                w="1920"
                h="1200"
                name={`${sectionName}_Image`}
                form={form}
              />
            </div>
            <div className="space-y-4">
              {/* Status */}
              <div className="pt-4">
                <StatusInput
                  form={form}
                  section={sectionName}
                  title={t("status")}
                  name={`${sectionName}_Status`}
                />
              </div>
              {/* Flip image */}
              <StatusInput
                form={form}
                section="Slider_Flip"
                title={t("flip")}
                name={`${sectionName}_Flip_Status`}
              />
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
