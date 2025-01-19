"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import { addDefaultValues, editDefaultValues } from "./formData/defaultValues";
import { addSchema, editSchema } from "./formData/schema";
import { useLocale } from "next-intl";
import { Fragment, useEffect } from "react";
import Sortable from "sortablejs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TextForm from "../custom/inputs/TextForm";
import MobileForm from "../custom/inputs/MobileForm";
import {
  AlarmClock,
  Calendar,
  CircleDot,
  Hash,
  Mail,
  NotepadText,
  SquareCheck,
  Type,
} from "lucide-react";
import TextareaForm from "../custom/inputs/TextareaForm";
import EmailForm from "../custom/inputs/EmailForm";
import DateForm from "../custom/inputs/DateForm";
import TimeForm from "../custom/inputs/TimeForm";
import SelectForm from "../custom/inputs/SelectForm";
import RadioForm from "../custom/inputs/RadioForm";
const FormComponent = ({ isEdit }) => {
  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(isEdit ? editSchema : addSchema),
    defaultValues: isEdit ? editDefaultValues : addDefaultValues,
  });

  const control = form.control;

  const {
    fields: formFieldsText,
    append: formAppendText,
    remove: formRemoveText,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Text" : "Form_Add_Text",
  });
  const {
    fields: formFieldsMobile,
    append: formAppendMobile,
    remove: formRemoveMobile,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Mobile" : "Form_Add_Mobile",
  });
  const {
    fields: formFieldsEmail,
    append: formAppendEmail,
    remove: formRemoveEmail,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Email" : "Form_Add_Email",
  });
  const {
    fields: formFieldsDate,
    append: formAppendDate,
    remove: formRemoveDate,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Date" : "Form_Add_Date",
  });
  const {
    fields: formFieldsTime,
    append: formAppendTime,
    remove: formRemoveTime,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Time" : "Form_Add_Time",
  });
  const {
    fields: formFieldsTextarea,
    append: formAppendTextarea,
    remove: formRemoveTextarea,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Textarea" : "Form_Add_Textarea",
  });
  const {
    fields: formFieldsSelect,
    append: formAppendSelect,
    remove: formRemoveSelect,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Select" : "Form_Add_Select",
  });
  const {
    fields: formFieldsRadio,
    append: formAppendRadio,
    remove: formRemoveRadio,
  } = useFieldArray({
    control,
    name: isEdit ? "Form_Edit_Radio" : "Form_Add_Radio",
  });

  const handleCreateInput = (value) => {
    value == "text" &&
      formAppendText({
        textValue: "",
      });
    value == "mobile" &&
      formAppendMobile({
        mobileValue: "",
      });
    value == "email" &&
      formAppendEmail({
        emailValue: "",
      });
    value == "date" &&
      formAppendDate({
        dateValue: "",
      });
    value == "time" &&
      formAppendTime({
        timeValue: "",
      });
    value == "textarea" &&
      formAppendTextarea({
        textareaValue: "",
      });
    value == "select" &&
      formAppendSelect({
        selectValue: "",
      });
    value == "radio" &&
      formAppendRadio({
        radioValue: "",
      });
  };

  function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  const sectionName = isEdit ? "Forms_Edit" : "Forms_Add";

  const inputOptions = [
    { id: 1, value: "text", title: "Text" },
    { id: 2, value: "mobile", title: "Mobile" },
    { id: 3, value: "email", title: "Email" },
    { id: 4, value: "date", title: "Date" },
    { id: 5, value: "time", title: "Time" },
    { id: 6, value: "select", title: "Multiple selection" },
    { id: 7, value: "radio", title: "Radio" },
    { id: 8, value: "textarea", title: "Text area" },
  ];

  // sortable config
  useEffect(() => {
    const elements = document.querySelector("#FormContent");
    const sortable = new Sortable(elements, {
      handle: ".sortable_icon", // Drag handle selector within list items
      onEnd: function () {
        const rows = document.querySelectorAll("#FormContent #formRow");
        rows.forEach((row, index) => {
          const indexCell = row.querySelector("#formId");
          indexCell.innerHTML = index + 1; // Update the index based on row position
        });
      },
    });
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style rounded-tr-lg">
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
                title="Form title"
                placeholder="Title"
                setYoutubeLink={false}
                isLink={false}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                name={`${sectionName}_Title_ar`}
                lang="ar"
                title="Main title"
                placeholder="Title"
                setYoutubeLink={false}
                isLink={false}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start rounded-tr-lg">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            Preferences:
          </h1>
          <div className="space-y-4 w-full">
            {/* Status */}
            <div className="pt-4 grid">
              <StatusInput
                form={form}
                section={sectionName}
                title="Status"
                name={`${sectionName}_Status`}
              />
              <div className="mt-2 flex justify-end">
                <FormField
                  control={form.control}
                  name={`${sectionName}_Select_Input`}
                  render={({ field }) => (
                    <FormItem className="max-w-60 items-start w-full">
                      <div className="col-span-3">
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value); // Update the form value
                            handleCreateInput(value);
                          }}
                          // value={field.value}
                          // defaultValue={field.value}
                          name={`${sectionName}_Select_Input`}
                          dir={locale == "en" ? "ltr" : "rtl"}
                        >
                          <FormControl className="h-12 dark:bg-mainDark-900">
                            <SelectTrigger>
                              <SelectValue placeholder="Select an input" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="dark:bg-mainDark-900">
                            <SelectGroup>
                              {inputOptions?.map((item, i) => {
                                return (
                                  <SelectItem key={i} value={item.value}>
                                    {item.title}
                                  </SelectItem>
                                );
                              })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage className="mt-2" />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="scroll-container w-full overflow-x-auto grid mt-8">
                <div
                  className="flex flex-col justify-center items-center gap-2 min-w-[900px]"
                  id="FormContent"
                >
                  {formFieldsText?.map((field, i) => {
                    return (
                      <TextForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Text${i + 1}_en`}
                        name_ar={`${sectionName}_Text${i + 1}_ar`}
                        placeholder_en="Text"
                        placeholder_ar="النص"
                        removeAction={() => formRemoveText(i)}
                        index={i + 1}
                        boxId="requiredText"
                        icon={<Type className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsMobile?.map((field, i) => {
                    return (
                      <MobileForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Mobile${i + 1}_en`}
                        name_ar={`${sectionName}_Mobile${i + 1}_ar`}
                        placeholder_en="Mobile"
                        placeholder_ar="الموبايل"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredMobile"
                        icon={<Hash className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsEmail?.map((field, i) => {
                    return (
                      <EmailForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Email${i + 1}_en`}
                        name_ar={`${sectionName}_Email${i + 1}_ar`}
                        placeholder_en="Email"
                        placeholder_ar="الميل"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredEmail"
                        icon={<Mail className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsDate?.map((field, i) => {
                    return (
                      <DateForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Date${i + 1}_en`}
                        name_ar={`${sectionName}_Date${i + 1}_ar`}
                        placeholder_en="Date"
                        placeholder_ar="التاريخ"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredDate"
                        icon={<Calendar className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsTime?.map((field, i) => {
                    return (
                      <TimeForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Time${i + 1}_en`}
                        name_ar={`${sectionName}_Time${i + 1}_ar`}
                        placeholder_en="Time"
                        placeholder_ar="الوقت"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredTime"
                        icon={<AlarmClock className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsTextarea?.map((field, i) => {
                    return (
                      <TextareaForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Textarea${i + 1}_en`}
                        name_ar={`${sectionName}_Textarea${i + 1}_ar`}
                        placeholder_en="Textarea"
                        placeholder_ar="نص محتوي"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredTextarea"
                        icon={<NotepadText className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsSelect?.map((field, i) => {
                    return (
                      <SelectForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Select${i + 1}_en`}
                        name_ar={`${sectionName}_Select${i + 1}_ar`}
                        placeholder_en="City"
                        placeholder_ar="المدينة"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredSelect"
                        icon={<SquareCheck className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                  {formFieldsRadio?.map((field, i) => {
                    return (
                      <RadioForm
                        key={field.id}
                        form={form}
                        name_en={`${sectionName}_Radio${i + 1}_en`}
                        name_ar={`${sectionName}_Radio${i + 1}_ar`}
                        placeholder_en="Gander"
                        placeholder_ar="الجنس"
                        removeAction={() => formRemove(i)}
                        index={i + 1}
                        boxId="requiredRadio"
                        icon={<CircleDot className="text-gray-500 w-5 h-5" />}
                      />
                    );
                  })}
                </div>
              </div>
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
