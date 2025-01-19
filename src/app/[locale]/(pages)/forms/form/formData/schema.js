import * as z from "zod";

export const editSchema = z.object({
  Forms_Edit_Title_en: z.string().optional(),
  Forms_Edit_Title_ar: z.string().optional(),
  Forms_Edit_Status: z.boolean().optional(),
  Forms_Edit_Fields: z
    .array(
      z.object({
        type: z.enum([
          "text",
          "mobile",
          "email",
          "time",
          "date",
          "select",
          "radio",
          "textarea",
        ]),
        value: z.string().optional(),
      })
    )
    .optional(),
});
export const addSchema = z.object({
  Forms_Add_Title_en: z.string().optional(),
  Forms_Add_Title_ar: z.string().optional(),
  Forms_Add_Status: z.boolean().optional(),
  Forms_Add_Text: z.array(z.string()).optional(),
  Forms_Add_Mobile: z.array(z.string()).optional(),
  Forms_Add_Email: z.array(z.string()).optional(),
  Forms_Add_Time: z.array(z.string()).optional(),
  Forms_Add_Date: z.array(z.string()).optional(),
  Forms_Add_Textarea: z.array(z.string()).optional(),
  Forms_Add_Select: z.array(z.string()).optional(),
  Forms_Add_Radio: z.array(z.string()).optional(),
});
