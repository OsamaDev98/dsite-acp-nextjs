"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import SubtitleInput from "@/components/custom/formInputs/SubtitleInput";
import { useState } from "react";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { useLocale } from "next-intl";

const FormComponent = () => {
  const [youtubeLink, setYoutubeLink] = useState(
    "https://www.youtube.com/embed/bZnrExAoXwA"
  );

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
            <TabsList className="absolute -top-[3.2rem] -right-1 h-auto bg-transparent gap-2">
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
                section="Show"
                lang="en"
                name="Show_Title_en"
                placeholder="Title"
                title="Page title"
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Show"
                lang="en"
                name="Show_Subtitle_en"
                placeholder="Subtitle"
                title="Page subtitle"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Show"
                placeholder="Title"
                lang="ar"
                name="Show_Title_ar"
                title="Page title"
              />
              {/* Subtitle */}
              <SubtitleInput
                form={form}
                section="Show"
                placeholder="Subtitle"
                lang="ar"
                name="Show_Subtitle_ar"
                title="Page subtitle"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            Preferences:
          </h1>
          <div className="space-y-4 w-full">
            {/* Link */}
            <TitleInput
              form={form}
              section="Show_Link"
              title="Link"
              name="Show_Link_Title"
              placeholder="Link"
              isLink="true"
              youtubeLink={youtubeLink}
              setYoutubeLink={setYoutubeLink}
            />
            {/* Video */}
            <div className="grid grid-cols-6">
              <iframe
                className="col-start-1 col-end-7 col lg:col-start-2 lg:col-end-5"
                width="100%"
                height="400"
                src={youtubeLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
