import * as z from "zod";

export const editSchema = z.object({
  Career_Edit_Title_en: z.string().optional(),
  Career_Edit_Title_ar: z.string().optional(),
  Career_Edit_Editor_en: z.string().optional(),
  Career_Edit_Editor_ar: z.string().optional(),
  Career_Edit_Status: z.boolean().optional(),
});
export const addSchema = z.object({
  Career_Add_Title_en: z.string().optional(),
  Career_Add_Title_ar: z.string().optional(),
  Career_Add_Editor_en: z.string().optional(),
  Career_Add_Editor_ar: z.string().optional(),
  Career_Add_Status: z.boolean().optional(),
});
