"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import SelectInput from "@/components/custom/formInputs/SelectInput";
import NumberInput from "@/components/custom/formInputs/NumberInput";
import EditImage from "@/components/custom/EditImage";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import { editSchema, addSchema } from "./formData/schema";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
// Dynamically import CKEditor to prevent SSR issues
import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
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

  const categoriesData = [
    {
      id: 1,
      value: "chocolate",
      title: "Chocolate",
    },
    {
      id: 2,
      value: "drinks",
      title: "Drinks",
    },
  ];

  const sectionName = isEdit ? "Restaurant_Edit" : "Restaurant_Add";

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
                lang="en"
                name={`${sectionName}_Title_en`}
                placeholder="Main title"
                title="Main title"
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                lang="en"
                name={`${sectionName}_Subtitle_en`}
                placeholder="Subtitle"
                title="Subtitle"
              />
              {/* Short Description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                lang="en"
                name={`${sectionName}_Description_en`}
                placeholder="Short Description"
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
                lang="ar"
                name={`${sectionName}_Title_ar`}
                placeholder="Main title"
                title="Main title"
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section={sectionName}
                lang="ar"
                name={`${sectionName}_Subtitle_ar`}
                placeholder="Subtitle"
                title="Subtitle"
              />
              {/* Short Description */}
              <DescriptionInput
                form={form}
                section={sectionName}
                lang="ar"
                name={`${sectionName}_Description_ar`}
                placeholder="Short Description"
                title="Short Description"
              />
              {/* Content */}
              <div className="grid lg:grid-cols-6 items-start w-full">
                <label className="text-[#b5b5b5] text-md mb-3 lg:mb-0 lg:pt-2 text-start">
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
            {/* Duration */}
            <SelectInput
              form={form}
              placeholder="Select a category"
              title="Category"
              name={`${sectionName}_Category`}
              selectData={categoriesData}
              defaultValue=""
            />
            {/* Edit image */}
            <div className="grid grid-cols-6 gap-4 my-8">
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2 text-start">
                Image
              </label>
              <EditImage
                w="1920"
                h="1200"
                name={`${sectionName}_Image`}
                form={form}
              />
            </div>
            {/* Price */}
            <NumberInput
              form={form}
              section={sectionName}
              placeholder="Price"
              title="Product price"
              name={`${sectionName}_Price`}
            />
            {/* Number */}
            <NumberInput
              form={form}
              section={sectionName}
              placeholder="Number"
              title="Product Number"
              name={`${sectionName}_Number`}
            />
            {/* Status */}
            <div className="pt-4">
              <StatusInput form={form} section={sectionName} title="Status" />
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
