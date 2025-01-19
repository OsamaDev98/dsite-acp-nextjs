import * as z from "zod";

export const editSchema = z.object({
  News_Edit_Title_en: z.string().optional(),
  News_Edit_Title_ar: z.string().optional(),
  News_Edit_Subtitle_en: z.string().optional(),
  News_Edit_Subtitle_ar: z.string().optional(),
  News_Edit_Description_en: z.string().optional(),
  News_Edit_Description_ar: z.string().optional(),
  News_Edit_Editor_en: z.string().optional(),
  News_Edit_Editor_ar: z.string().optional(),
  News_Edit_Author: z.string().optional(),
  News_Edit_Date: z.date().optional(),
  News_Edit_Status: z.boolean().optional(),
  News_Edit_Tags: z.array(z.string()).optional(),
  News_Edit_Image: z
    .custom((value) => {
      // Allow undefined or null
      if (value === undefined || value === null) return true;
      // Allow any value without failing validation
      return (
        value instanceof File ||
        typeof value === "string" ||
        typeof value === "object"
      ); // Example: allow string or object as well
    })
    .optional(),
});
export const addSchema = z.object({
  News_Add_Title_en: z.string().optional(),
  News_Add_Title_ar: z.string().optional(),
  News_Add_Subtitle_en: z.string().optional(),
  News_Add_Subtitle_ar: z.string().optional(),
  News_Add_Description_en: z.string().optional(),
  News_Add_Description_ar: z.string().optional(),
  News_Add_Editor_en: z.string().optional(),
  News_Add_Editor_ar: z.string().optional(),
  News_Add_Author: z.string().optional(),
  News_Add_Date: z
    .date()
    .transform((str) => new Date(str))
    .optional(),
  News_Add_Status: z.boolean().optional(),
  News_Add_Tags: z.array(z.string()).optional(),
  News_Add_Image: z
    .custom((value) => {
      // Allow undefined or null
      if (value === undefined || value === null) return true;
      // Allow any value without failing validation
      return (
        value instanceof File ||
        typeof value === "string" ||
        typeof value === "object"
      ); // Example: allow string or object as well
    })
    .optional(),
});
