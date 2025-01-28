"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import LinkInput from "@/components/custom/formInputs/LinkInput";
import SelectInput from "@/components/custom/formInputs/SelectInput";
import RadioInput from "@/components/custom/formInputs/RadioInput";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import TagForm from "@/components/custom/formInputs/TagForm";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = () => {
  const locale = useLocale();
  const t = useTranslations("WebsiteInfo");
  const tp = useTranslations("Preferences");
  const tb = useTranslations("Buttons");
  const tpl = useTranslations("Placeholder");
  const ttg = useTranslations("Tags");

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

  const countries = [
    {
      title: "English",
      value: "en",
    },
    {
      title: "French",
      value: "fr",
    },
    {
      title: "German",
      value: "de",
    },
    {
      title: "Spanish",
      value: "es",
    },
    {
      title: "Portuguese",
      value: "pt",
    },
    {
      title: "Russian",
      value: "ru",
    },
    {
      title: "Japanese",
      value: "ja",
    },
    {
      title: "Korean",
      value: "ko",
    },
    {
      title: "Chinese",
      value: "zh",
    },
    {
      title: "Saudi Arabia",
      value: "su",
    },
  ];

  const languageData = [
    {
      id: 1,
      value: "EN",
      title: "English",
    },
    {
      id: 2,
      value: "AR",
      title: "Arabic",
    },
    {
      id: 3,
      value: "EN&AR",
      title: "English & Arabic",
    },
  ];

  const socialData = [
    {
      id: 1,
      title: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Twitter",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Youtube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "WhatsApp",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      ),
    },
    {
      id: 7,
      title: "Snapchat",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"></path>
        </svg>
      ),
    },
    {
      id: 8,
      title: "Tiktok",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style">
          <Tabs
            defaultValue={locale == "en" ? "english" : "arabic"}
            className="tabs-style w-full"
          >
            <TabsListComp />
            <h1 className="text-mainColor-500 text-xl font-bold pb-4 mb-8 border-b">
              {t("title")}
            </h1>
            <TabsContent value="english" className="space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Info"
                placeholder={tpl("title")}
                name="Info_Website_Title_en"
                lang="en"
                title={t("name")}
              />
              {/* Subtitle */}
              <DescriptionInput
                form={form}
                section="Info"
                placeholder={tpl("description")}
                name="Info_Website_Description_en"
                lang="en"
                title={t("description")}
              />
              {/* Tags */}
              <TagForm
                form={form}
                title={ttg("tags")}
                name="Info_Website_Tags_en"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Info"
                placeholder={tpl("title")}
                name="Info_Website_Title_ar"
                lang="ar"
                title={t("name")}
              />
              {/* Subtitle */}
              <DescriptionInput
                form={form}
                section="Info"
                placeholder={t("description")}
                name="Info_Website_Description_ar"
                lang="ar"
                title={t("description")}
              />
              {/* Tags */}
              <TagForm
                form={form}
                title={ttg("tags")}
                name="Info_Website_Tags_ar"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style rounded-tr-lg">
          <div value="english" className="space-y-4 w-full">
            {/* Language */}
            <SelectInput
              form={form}
              title={t("language")}
              placeholder={tpl("language")}
              name="Info_Website_Language"
              selectData={languageData}
            />
            {/* Country */}
            <SelectInput
              form={form}
              title={t("country")}
              placeholder={tpl("language")}
              name="Info_Website_Country"
              selectData={countries}
              isSearch={true}
            />
            {/* Website status */}
            <RadioInput
              form={form}
              title={t("status")}
              name="Info_Website_Status"
            />
          </div>
        </div>
        <div className="card-style rounded-tr-lg items-start">
          <h1 className="text-mainColor-500 text-xl font-bold pb-4 mb-8 border-b w-full">
            {t("social")}
          </h1>
          <div className="space-y-4 w-full justify-center">
            {socialData?.map((item) => {
              return (
                <LinkInput
                  key={item.id}
                  form={form}
                  section="Info"
                  icon={item.icon}
                  title={tpl(item.title.toLowerCase())}
                  label={true}
                  isIcon={true}
                  placeholder={tpl(item.title.toLowerCase())}
                  name={`Info_Website_Social_${item.title}`}
                />
              );
            })}
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
