import * as z from "zod";

export const editSchema = z.object({
  Forms_Edit_Title_en: z.string().optional(),
  Forms_Edit_Title_ar: z.string().optional(),
  Forms_Edit_Status: z.boolean().optional(),
  Fields: z.array(
    z.object({
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
      values: z
        .array(
          z.object({
            value_en: z.string().optional(),
            value_ar: z.string().optional(),
            options_en: z.array(z.string().optional()).optional(),
            options_ar: z.array(z.string().optional()).optional(),
          })
        )
        .optional(),
    })
  ),
});
export const addSchema = z.object({
  Forms_Add_Title_en: z.string().optional(),
  Forms_Add_Title_ar: z.string().optional(),
  Forms_Add_Status: z.boolean().optional(),
  Fields: z.array(
    z.object({
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
      values: z
        .array(
          z.object({
            value_en: z.string().optional(),
            value_ar: z.string().optional(),
            options_en: z.array(z.string()),
            options_ar: z.array(z.string()),
          })
        )
        .optional(),
    })
  ),
});
