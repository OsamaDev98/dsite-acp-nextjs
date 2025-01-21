import * as z from "zod";

const valuesSchema = z.object({
  value_en: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/, "At least 3 letters.")
    .optional(),
  value_ar: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/, "At least 3 letters.")
    .optional(),
  options: z.object({
    option_en: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/, "At least 3 letters.")
      .optional(),
    option_ar: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/, "At least 3 letters.")
      .optional(),
  }),
});

const fieldSchema = z.object({
  type: z.enum([
    "text",
    "mobile",
    "email",
    "date",
    "time",
    "textarea",
    "select",
    "radio",
  ]),
  values: z.array(valuesSchema).optional(),
});

export const editSchema = z.object({
  Forms_Edit_Title_en: z.string().optional(),
  Forms_Edit_Title_ar: z.string().optional(),
  Forms_Edit_Status: z.boolean().optional(),
  Fields: z.array(fieldSchema),
});
export const addSchema = z.object({
  Forms_Add_Title_en: z.string().optional(),
  Forms_Add_Title_ar: z.string().optional(),
  Forms_Add_Status: z.boolean().optional(),
  Fields: z
    .array(
      z.object({
        type: z.enum([
          "text",
          "number",
          "email",
          "date",
          "time",
          "select",
          "radio",
          "textarea",
        ]),
        value: z.string().optional(),
      })
    )
    .optional(),
});
