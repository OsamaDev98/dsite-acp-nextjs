"use client";
"use client";

import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormLabel } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import EmailInput from "@/components/custom/formInputs/EmailInput";
import TelephoneInput from "@/components/custom/formInputs/TelephoneInput";
import DescriptionInput from "@/components/custom/formInputs/DescriptionInput";
import EditImage from "@/components/custom/EditImage";
import { useTranslations } from "next-intl";

const FormComponent = () => {
  const t = useTranslations("ProfilePage");
  const tb = useTranslations("Buttons");
  const tpl = useTranslations("Placeholder");

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
        <div className="card-style flex flex-col gap-3">
          <div className="space-y-2 grid lg:grid-cols-6 items-start w-full">
            <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200">
              {t("image")}
            </FormLabel>
            <EditImage
              profile={true}
              name="Profile_Edit_Picture"
              // w="1920"
              // h="1200"
              form={form}
            />
          </div>
          <TitleInput
            form={form}
            section="Profile"
            placeholder={tpl("name")}
            name="Profile_Edit_Name"
            title={t("name")}
          />
          <EmailInput
            form={form}
            section="Profile"
            placeholder={tpl("email")}
            name="Profile_Edit_Email"
            title={t("email")}
            icon={false}
          />
          <TelephoneInput
            form={form}
            section="Profile"
            placeholder={tpl("number")}
            name="Profile_Edit_Phone"
            title={t("phone")}
            icon={false}
          />
          <DescriptionInput
            form={form}
            section="Profile"
            placeholder={tpl("address")}
            name="Profile_Edit_Address"
            title={t("address")}
          />
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
