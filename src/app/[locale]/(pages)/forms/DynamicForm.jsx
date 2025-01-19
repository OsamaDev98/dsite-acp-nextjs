"use client";

import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";

const formSchema = z.object({
  fields: z
    .array(
      z.object({
        type: z.enum(["text", "time", "date"]),
        value: z.string().optional(),
      })
    )
    .optional(),
});

const DynamicForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fields: [{ type: "text", value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Forms_Edit_Fields",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-bold">Dynamic Form</h2>

      {fields.map((field, index) => (
        <FormItem key={field.id}>
          <FormLabel>Type</FormLabel>
          <Controller
            control={control}
            name={`fields.${index}.type`}
            render={({ field }) => (
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger>{field.value || "Select Type"}</SelectTrigger>
                  <SelectContent>
                    <SelectOption value="text">Text</SelectOption>
                    <SelectOption value="time">Time</SelectOption>
                    <SelectOption value="date">Date</SelectOption>
                  </SelectContent>
                </Select>
              </FormControl>
            )}
          />

          {watch(`fields.${index}.type`) === "text" && (
            <FormControl>
              <input
                placeholder="Enter text"
                {...control.register(`fields.${index}.value`)}
              />
            </FormControl>
          )}

          {watch(`fields.${index}.type`) === "time" && (
            <FormControl>
              <input
                type="time"
                {...control.register(`fields.${index}.value`)}
              />
            </FormControl>
          )}

          {watch(`fields.${index}.type`) === "date" && (
            <FormControl>
              <input
                type="date"
                {...control.register(`fields.${index}.value`)}
              />
            </FormControl>
          )}

          {/* <FormError>
            {errors.fields?.[index]?.value?.message && (
              <p>{errors.fields[index].value.message}</p>
            )}
          </FormError> */}

          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </FormItem>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            type: "text",
            value: "",
          })
        }
      >
        Add Field
      </button>

      <button type="submit">Submit</button>
    </Form>
  );
};

export default DynamicForm;
