"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import { addSchema, editSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();
  const t = useTranslations("BranchesPage");
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

  const sectionName = isEdit ? "Branches_Edit" : "Branches_Add";

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
                lang="en"
                name={`${sectionName}_Title_en`}
                title={t("title")}
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                placeholder={tpl("description")}
                name={`${sectionName}_Description_en`}
                lang="en"
                title={t("description")}
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
              {/* Short description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                placeholder={tpl("description")}
                name={`${sectionName}_Description_ar`}
                lang="ar"
                title={t("description")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <div className="space-y-4 w-full">
            {/* Map */}
            <div className="pt-4">
              {/* Status */}
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
