"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import { useLocale } from "next-intl";
import TagForm from "./formInputs/TagForm";

const formSchema = z.object({
  Config_Edit_Title_en: z.string().optional(),
  Config_Edit_Title_ar: z.string().optional(),
  Config_Edit_Subtitle_en: z.string().optional(),
  Config_Edit_Subtitle_ar: z.string().optional(),
  Config_Edit_Tags_en: z.array(z.string()).optional(),
  Config_Edit_Tags_ar: z.array(z.string()).optional(),
  Config_Edit_Status: z.boolean().optional(),
});

const ConfigForm = () => {
  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Config_Edit_Title_en: "",
      Config_Edit_Title_ar: "",
      Config_Edit_Subtitle_en: "",
      Config_Edit_Subtitle_ar: "",
      Config_Edit_Tags_en: [],
      Config_Edit_Tags_ar: [],
      Config_Edit_Status: false,
    },
  });

  function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <div className="section-container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="card-style">
            <Tabs
              defaultValue={locale == "en" ? "english" : "arabic"}
              className="tabs-style w-full"
            >
              <TabsList
                className={`absolute -top-[3.2rem] h-auto bg-transparent gap-2 ${
                  locale == "en" ? "-right-1" : "-left-1"
                }`}
              >
                <TabsTrigger
                  value="english"
                  className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
                >
                  English
                </TabsTrigger>
                <TabsTrigger
                  value="arabic"
                  className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
                >
                  Arabic
                </TabsTrigger>
              </TabsList>
              <TabsContent value="english" className="space-y-4 w-full">
                {/* Title */}
                <TitleInput
                  form={form}
                  section="Config"
                  placeholder="Title"
                  name="Config_Edit_Title_en"
                  lang="en"
                  title="Page title"
                />
                {/* Subtitle */}
                <SubtitleInput
                  form={form}
                  section="Config"
                  placeholder="Subtitle"
                  name="Config_Edit_Subtitle_en"
                  lang="en"
                  title="Page subtitle"
                />
                {/* Tags */}
                <TagForm
                  form={form}
                  title="Keywords"
                  name="Config_Edit_Tags_en"
                />
              </TabsContent>
              <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
                {/* Title */}
                <TitleInput
                  form={form}
                  section="Config"
                  placeholder="Title"
                  name="Config_Edit_Title_ar"
                  lang="ar"
                  title="Page title"
                />
                {/* Subtitle */}
                <SubtitleInput
                  form={form}
                  section="Config"
                  placeholder="Subtitle"
                  name="Config_Edit_Subtitle_ar"
                  lang="ar"
                  title="Page subtitle"
                />
                {/* Tags */}
                <TagForm
                  form={form}
                  title="Keywords"
                  name="Config_Edit_Tags_ar"
                />
              </TabsContent>
            </Tabs>
          </div>
          <div className="card-style">
            <StatusInput
              form={form}
              section="Config"
              title="Show in header"
              name="Config_Edit_Status"
            />
          </div>
          <div className="flex items-center justify-end my-8">
            <SubmitButton title="Update" />
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ConfigForm;
