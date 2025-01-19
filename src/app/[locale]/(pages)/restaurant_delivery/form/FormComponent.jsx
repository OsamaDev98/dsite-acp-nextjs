"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <ConfigButton target="/restaurant_delivery/delivery_config" />
        <div className="card-style mt-16">
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
                section="Delivery"
                name="Delivery_Edit_Title_en"
                lang="en"
                placeholder="Title"
                title="Page title"
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section="Delivery"
                name="Delivery_Edit_Title_ar"
                lang="ar"
                placeholder="Title"
                title="Page title"
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
          <SubmitButton title="Update" />
        </div>
      </form>
    </Form>
  );
};
export default FormComponent;
