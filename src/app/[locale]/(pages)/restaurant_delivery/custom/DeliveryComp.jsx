"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import StatusInput from "@/components/custom/formInputs/StatusInput";

const DeliveryComp = ({ form, image, title, itemId }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center w-full">
      <div className="flex items-center justify-around gap-2 flex-wrap">
        <StatusInput
          form={form}
          section="Delivery"
          title={title}
          isImage={true}
          image={image}
          name={`Delivery_${itemId}_Status`}
        />
      </div>
      <div>
        <FormField
          control={form.control}
          name={`Delivery_${itemId}_Name`}
          render={({ field }) => (
            <FormItem>
              <div className="w-full">
                <FormControl>
                  <Input
                    name={`Delivery_${itemId}_Name`}
                    placeholder="App name"
                    type="text"
                    className="h-12 dark:bg-mainDark-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
      </div>
      <div>
        <FormField
          control={form.control}
          name={`Delivery_${itemId}_Android`}
          render={({ field }) => (
            <FormItem>
              <div className="w-full">
                <div className="relative col-span-3">
                  <span className="absolute top-1/2 -translate-y-1/2 text-muted-foreground bg-[#eee] dark:bg-mainDark-900 h-full w-12 flex items-center justify-center rounded-l-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-google-play"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"></path>
                    </svg>
                  </span>
                  <FormControl>
                    <Input
                      name={`Delivery_${itemId}_Android`}
                      placeholder="Android link"
                      type="text"
                      className="h-12 ltr:pl-14 rtl:pr-14 dark:bg-mainDark-900"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
      </div>
      <div>
        <FormField
          control={form.control}
          name={`Delivery_${itemId}_Apple`}
          render={({ field }) => (
            <FormItem>
              <div className="w-full">
                <div className="relative col-span-3">
                  <span className="absolute top-1/2 -translate-y-1/2 text-muted-foreground bg-[#eee] dark:bg-mainDark-900 h-full w-12 flex items-center justify-center rounded-l-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-apple"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"></path>
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"></path>
                    </svg>
                  </span>
                  <FormControl>
                    <Input
                      name={`Delivery_${itemId}_Apple`}
                      placeholder="Apple link"
                      type="text"
                      className="h-12 ltr:pl-14 rtl:pr-14 dark:bg-mainDark-900"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
export default DeliveryComp;
