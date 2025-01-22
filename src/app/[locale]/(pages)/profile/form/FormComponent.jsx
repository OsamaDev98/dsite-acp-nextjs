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

const FormComponent = () => {
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
              Profile picture
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
            placeholder="FullName"
            name="Profile_Edit_Name"
            title="FullName"
          />
          <EmailInput
            form={form}
            section="Profile"
            placeholder="Email"
            name="Profile_Edit_Email"
            title="Email"
            icon={false}
          />
          <TelephoneInput
            form={form}
            section="Profile"
            placeholder="Phone Number"
            name="Profile_Edit_Phone"
            title="Phone Number"
            icon={false}
          />
          <DescriptionInput
            form={form}
            section="Profile"
            placeholder="Address"
            name="Profile_Edit_Address"
            title="Address"
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
