"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import ContentInput from "@/components/custom/formInputs/ContentInput";
import SelectInput from "@/components/custom/formInputs/SelectInput";
import NumberInput from "@/components/custom/formInputs/NumberInput";
import EditImage from "@/components/custom/EditImage";
import PlanFeature from "@/components/custom/planFeature/PlanFeature";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { addSchema, editSchema } from "./formData/schema";
import { useLocale } from "next-intl";

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

  const durationData = [
    {
      id: 1,
      value: "daily",
      title: "Daily",
    },
    {
      id: 2,
      value: "weekly",
      title: "Weekly",
    },
    {
      id: 3,
      value: "monthly",
      title: "Monthly",
    },
    {
      id: 4,
      value: "yearly",
      title: "Yearly",
    },
  ];

  const sectionName = isEdit ? "Plans_Edit" : "Plans_Add";

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
                placeholder="Name"
                title="Name"
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                lang="en"
                name={`${sectionName}_Content_en`}
                placeholder="Content"
                title="Content"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                lang="ar"
                name={`${sectionName}_Title_ar`}
                placeholder="Name"
                title="Name"
              />
              {/* Content */}
              <ContentInput
                form={form}
                section={sectionName}
                lang="ar"
                name={`${sectionName}_Content_ar`}
                placeholder="Content"
                title="Content"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style">
          <PlanFeature form={form} sectionName={sectionName} />
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            Preferences:
          </h1>
          <div className="space-y-4 w-full">
            {/* Duration */}
            <SelectInput
              form={form}
              placeholder="Duration"
              title="Duration"
              name={`${sectionName}_Duration`}
              selectData={durationData}
              defaultValue="daily"
            />
            {/* Price */}
            <NumberInput
              form={form}
              section={sectionName}
              name={`${sectionName}_Price`}
              placeholder="Price"
              title="Plan price"
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
