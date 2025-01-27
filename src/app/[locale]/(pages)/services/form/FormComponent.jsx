"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import EditImage from "@/components/custom/EditImage";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import SelectInputWithAction from "@/components/custom/formInputs/SelectInputWithAction";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { addSchema, editSchema } from "./formData/schema";
// Dynamically import CKEditor to prevent SSR issues
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
const CustomEditor = dynamic(
  () => import("@/components/custom/ckeditor5/CustomEditor"),
  {
    ssr: false,
  }
);

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();
  const t = useTranslations("ServicesPage");
  const tt = useTranslations("Tabs");
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

  const linkType = [
    { id: 1, value: "subpage", title: "SubPage" },
    { id: 2, value: "addlink", title: "Add link" },
    { id: 3, value: "off", title: "off" },
  ];

  const sectionName = isEdit ? "Services_Edit" : "Services_Add";

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
                section="Service_Edit"
                name={`${sectionName}_Title_en`}
                lang="en"
                title={t("title")}
                placeholder={tpl("title")}
                setYoutubeLink={false}
                isLink={false}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section="Service_Edit"
                name={`${sectionName}_Subtitle_en`}
                placeholder={tpl("subtitle")}
                lang="en"
                title={t("subtitle")}
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section="Service_Edit"
                placeholder={tpl("description")}
                name={`${sectionName}_Description_en`}
                lang="en"
                title={t("description")}
              />
              {/* Content */}
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
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Service_Edit"
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title={tpl("title")}
                placeholder={t("title")}
                setYoutubeLink={false}
                isLink={false}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section="Service_Edit"
                name={`${sectionName}_Subtitle_ar`}
                placeholder={tpl("subtitle")}
                lang="ar"
                title={t("subtitle")}
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section="Service_Edit"
                placeholder={tpl("description")}
                name={`${sectionName}_Description_ar`}
                lang="ar"
                title={t("description")}
              />
              {/* Content */}
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
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <SelectInputWithAction
            form={form}
            title={t("type")}
            section="Service_Edit"
            placeholder={tpl("type")}
            defaultValue="subpage"
            name={`${sectionName}_Link`}
            selectData={linkType}
          />
          <div className="space-y-4 w-full">
            {/* Edit image */}
            <div className="grid grid-cols-6 gap-4 my-8">
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
              <StatusInput
                form={form}
                section="Service_Edit"
                title={t("status")}
                name={`${sectionName}_Status`}
              />
              {/* Flip image */}
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
