"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import EditImage from "@/components/custom/EditImage";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = () => {
  const locale = useLocale();
  const t = useTranslations("DownloadPage");
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
                section="App"
                lang="en"
                name="App_Title_en"
                placeholder={tpl("title")}
                title={t("title")}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="App"
                lang="ar"
                name="App_Title_ar"
                placeholder={tpl("title")}
                title={t("title")}
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
            <div className="grid grid-cols-6 gap-4">
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2 text-start">
                {t("image")}
              </label>
              <EditImage w="800" h="800" name="App_Image" form={form} />
            </div>
            {/* Android */}
            <TitleInput
              form={form}
              section="App_Android"
              title={t("android")}
              name="App_Android_Title"
              placeholder={tpl("android")}
            />
            {/* IOS */}
            <TitleInput
              form={form}
              section="App_Ios"
              title={t("ios")}
              name="App_Ios_Title"
              placeholder={tpl("ios")}
            />
            {/* AppGallery */}
            <TitleInput
              form={form}
              section="App_AppGallery"
              title={t("appGallery")}
              name="App_AppGallery_Title"
              placeholder={tpl("appGallery")}
            />
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
