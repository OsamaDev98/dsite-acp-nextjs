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
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import { addSchema, editSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
// Dynamically import CKEditor to prevent SSR issues
import dynamic from "next/dynamic";
import DateInput from "@/components/custom/formInputs/DateInput";
import { useLocale } from "next-intl";
import TagForm from "@/components/custom/formInputs/TagForm";
const CustomEditor = dynamic(
  () => import("@/components/custom/ckeditor5/CustomEditor"),
  {
    ssr: false,
  }
);

const FormComponent = ({ isEdit }) => {
  const locale = useLocale();

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

  const sectionName = isEdit ? "News_Edit" : "News_Add";

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
                name={`${sectionName}_Title_en`}
                lang="en"
                title="Main title"
                placeholder="title"
                setYoutubeLink={false}
                isLink={false}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                name={`${sectionName}_Subtitle_en`}
                placeholder="Subtitle"
                lang="en"
                title="Subtitle"
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                placeholder="Description"
                name={`${sectionName}_Description_en`}
                lang="en"
                title="Short Description"
              />
              {/* Content */}
              <div className="grid lg:grid-cols-6 items-start w-full">
                <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
                  Content
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
                section={sectionName}
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title="Main title"
                placeholder="title"
                setYoutubeLink={false}
                isLink={false}
              />
              {/* SubTitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                name={`${sectionName}_Subtitle_ar`}
                placeholder="Subtitle"
                lang="ar"
                title="Subtitle"
              />
              {/* Short description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                placeholder="Description"
                name={`${sectionName}_Description_ar`}
                lang="ar"
                title="Short Description"
              />
              {/* Content */}
              <div className="grid lg:grid-cols-6 items-start w-full">
                <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2">
                  Content
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
            Preferences:
          </h1>
          <div className="space-y-4 w-full">
            {/* Edit image */}
            <div className="grid grid-cols-6 gap-4 my-8">
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2">
                Image
              </label>
              <EditImage
                w="1920"
                h="1200"
                isLink={false}
                name={`${sectionName}_Image`}
                form={form}
              />
            </div>
            {/* Author */}
            <TitleInput
              form={form}
              section={sectionName}
              name={`${sectionName}_Author`}
              lang=""
              title="Author"
              placeholder="Author"
              setYoutubeLink={false}
              isLink={false}
            />
            {/* Date */}
            <DateInput form={form} name={`${sectionName}_Date`} title="Date" />
            {/* Tags */}
            <TagForm form={form} title="Tags" name={`${sectionName}_Tags`} />
            <div className="pt-4">
              {/* Status */}
              <StatusInput
                form={form}
                section={sectionName}
                title="Status"
                name={`${sectionName}_Status`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title="Update" />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
