"use client";

import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import PasswordField from "@/components/custom/formInputs/PasswordField";

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
        <div className="card-style rounded-tr-lg">
          <PasswordField
            form={form}
            section="ChangePassword"
            placeholder="Enter a password"
            name="Change_Old_Password"
            title="Old password"
          />
          <PasswordField
            form={form}
            section="ChangePassword"
            placeholder="Enter a password"
            name="Change_New_Password"
            title="New password"
          />
          <PasswordField
            form={form}
            section="ChangePassword"
            placeholder="Enter a password"
            name="Confirm_New_Password"
            title="Confirm password"
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
