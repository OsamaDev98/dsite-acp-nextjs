"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import { schema } from "./formData/schema";
import { defaultValues } from "./formData/defaultValues";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import DeliveryComp from "../custom/DeliveryComp";
import hungerStation from "@/app/img/restaurant_delivery/hungerStation.webp";
import Jahez from "@/app/img/restaurant_delivery/jahez.webp";
import Ninja from "@/app/img/restaurant_delivery/ninja.webp";
import Noon from "@/app/img/restaurant_delivery/noon.webp";
import TheChefz from "@/app/img/restaurant_delivery/theChefz.webp";
import Toyou from "@/app/img/restaurant_delivery/toyou.webp";
import { useLocale, useTranslations } from "next-intl";
import TabsListComp from "@/components/custom/TabsListComp";

const FormComponent = () => {
  const locale = useLocale();
  const t = useTranslations("DeliveryPage");
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
        <ConfigButton target="/restaurant_delivery/delivery_config" />
        <div className="card-style mt-16">
          <Tabs
            defaultValue={locale == "en" ? "english" : "arabic"}
            className="tabs-style w-full"
          >
            <TabsListComp />
            <TabsContent value="english" className="space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Delivery"
                name="Delivery_Edit_Title_en"
                lang="en"
                placeholder={tpl("title")}
                title={t("title")}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Delivery"
                name="Delivery_Edit_Title_ar"
                lang="ar"
                placeholder={tpl("title")}
                title={t("title")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style">
          <div className="flex flex-col gap-8">
            <DeliveryComp
              form={form}
              image={hungerStation}
              title="Hunger Station"
              itemId="HungerStation"
            />
            <DeliveryComp
              form={form}
              image={Jahez}
              title="Jahez"
              itemId="Jahez"
            />
            <DeliveryComp
              form={form}
              image={Ninja}
              title="Ninja"
              itemId="Ninja"
            />
            <DeliveryComp form={form} image={Noon} title="Noon" itemId="Noon" />
            <DeliveryComp
              form={form}
              image={TheChefz}
              title="TheChefz"
              itemId="TheChefz"
            />
            <DeliveryComp
              form={form}
              image={Toyou}
              title="Toyou"
              itemId="Toyou"
            />
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
