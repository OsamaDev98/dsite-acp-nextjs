"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailInput from "@/components/custom/formInputs/EmailInput";
import { useTranslations } from "next-intl";

const FormComponent = () => {
  const t = useTranslations("Admins");
  const tb = useTranslations("Buttons");

  const formSchema = z.object({
    Add_Admin_Email: z.string().email("Enter a valid email"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { Add_Admin_Email: "" },
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-end w-full"
      >
        <div className="grid card-style mt-2 rounded-tr-lg">
          <div className="flex items-center justify-center gap-8 flex-wrap w-full">
            <EmailInput
              form={form}
              placeholder="ex: info@exampl.com"
              name="Add_Admin_Email"
              title={t("email")}
              className="max-w-96 w-full h-12"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 bg-mainColor-500 text-white text-lg font-medium py-6 px-8 rounded-md transition duration-300 hover:bg-[#4c73c3] hover:shadow-lg hover:-translate-y-[3px] flex items-center gap-3"
        >
          {tb("update")}
        </Button>
      </form>
    </Form>
  );
};
export default FormComponent;
