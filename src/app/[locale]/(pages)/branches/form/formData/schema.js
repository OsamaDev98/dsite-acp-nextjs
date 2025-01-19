import * as z from "zod";

export const editSchema = z.object({
  Branches_Edit_Title_en: z.string().optional(),
  Branches_Edit_Title_ar: z.string().optional(),
  Branches_Edit_Description_en: z.string().optional(),
  Branches_Edit_Description_ar: z.string().optional(),
  Branches_Edit_Status: z.boolean().optional(),
});
export const addSchema = z.object({
  Branches_Add_Title_en: z.string().optional(),
  Branches_Add_Title_ar: z.string().optional(),
  Branches_Add_Description_en: z.string().optional(),
  Branches_Add_Description_ar: z.string().optional(),
  Branches_Add_Status: z.boolean().optional(),
});
