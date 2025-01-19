"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import ContentInput from "@/components/custom/formInputs/ContentInput";
import TagsInputs from "@/components/custom/formInputs/TagsInputs";
import { editSchema, addSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { useLocale } from "next-intl";
import { useState } from "react";

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();
  const [tabTags, setTabTags] = useState([]);

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
            <TabsList className="absolute -top-12 -right-1 h-auto bg-transparent gap-2">
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
                section={sectionName}
                placeholder="Title"
                name={`${sectionName}_Title_en`}
                lang="en"
                title="Page Title"
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                placeholder="Subtitle"
                name={`${sectionName}_Subtitle_en`}
                lang="en"
                title="Page Subtitle"
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                placeholder="Content"
                name={`${sectionName}_Content_en`}
                lang="en"
                title="Page Content"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                placeholder="Title"
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title="Page Title"
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                placeholder="Subtitle"
                name={`${sectionName}_Subtitle_ar`}
                lang="ar"
                title="Page Subtitle"
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                placeholder="Content"
                name={`${sectionName}_Content_ar`}
                lang="ar"
                title="Page Content"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            Preferences:
          </h1>
          <TagsInputs
            form={form}
            title="Tags"
            name={`${sectionName}_Tags`}
            placeholder="Enter a tag"
            tags={tabTags}
            setTags={setTabTags}
          />
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title="Update" />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
