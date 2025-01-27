"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import EditImage from "@/components/custom/EditImage";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { useLocale } from "next-intl";

const FormComponent = () => {
  const locale = useLocale();

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
            <TabsList
              className={`absolute -top-12 h-auto bg-transparent gap-2 ${
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
                section="App"
                lang="en"
                name="App_Title_en"
                placeholder="Title"
                title="Page title"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="App"
                lang="ar"
                name="App_Title_ar"
                placeholder="Title"
                title="Page title"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            Preferences:
          </h1>
          <div className="space-y-4 w-full">
            {/* Edit image */}
            <div className="grid grid-cols-6 gap-4">
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2 text-start">
                Image
              </label>
              <EditImage w="800" h="800" name="App_Image" form={form} />
            </div>
            {/* Android */}
            <TitleInput
              form={form}
              section="App_Android"
              title="Android"
              name="App_Android_Title"
              placeholder="Android app"
            />
            {/* IOS */}
            <TitleInput
              form={form}
              section="App_Ios"
              title="IOS"
              name="App_Ios_Title"
              placeholder="IOS app"
            />
            {/* AppGallery */}
            <TitleInput
              form={form}
              section="App_AppGallery"
              title="AppGallery"
              name="App_AppGallery_Title"
              placeholder="AppGallery app"
            />
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
