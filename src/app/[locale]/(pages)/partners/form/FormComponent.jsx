"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import EditImage from "@/components/custom/EditImage";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import LinkInput from "@/components/custom/formInputs/LinkInput";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { addSchema, editSchema } from "./formData/schema";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();
  const t = useTranslations("PartnersPage");
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

  const sectionName = isEdit ? "Partners_Edit" : "Partners_Add";

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
                name={`${sectionName}_Title_en`}
                lang="en"
                title={t("title")}
                placeholder={tpl("title")}
                setYoutubeLink={false}
                isLink={false}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title={t("title")}
                placeholder={tpl("title")}
                setYoutubeLink={false}
                isLink={false}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
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
            <LinkInput
              form={form}
              section={sectionName}
              placeholder={tpl("link")}
              name={`${sectionName}_Link`}
              isIcon={false}
              title={t("link")}
              label="Link"
            />
            {/* Status */}
            <div className="pt-4">
              <StatusInput
                form={form}
                section={sectionName}
                title={t("status")}
                name={`${sectionName}_Status`}
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
