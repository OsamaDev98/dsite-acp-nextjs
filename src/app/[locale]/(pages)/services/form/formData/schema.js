import * as z from "zod";

export const editSchema = z.object({
  Services_Edit_Title_en: z.string().optional(),
  Services_Edit_Title_ar: z.string().optional(),
  Services_Edit_Subtitle_en: z.string().optional(),
  Services_Edit_Subtitle_ar: z.string().optional(),
  Services_Edit_Description_en: z.string().optional(),
  Services_Edit_Description_ar: z.string().optional(),
  Services_Edit_Editor_en: z.string().optional(),
  Services_Edit_Editor_ar: z.string().optional(),
  Services_Edit_Status: z.boolean().optional(),
  Services_Edit_Link: z.string().optional(),
  Services_Edit_Image: z
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
  Services_Add_Title_en: z.string().optional(),
  Services_Add_Title_ar: z.string().optional(),
  Services_Add_Subtitle_en: z.string().optional(),
  Services_Add_Subtitle_ar: z.string().optional(),
  Services_Add_Description_en: z.string().optional(),
  Services_Add_Description_ar: z.string().optional(),
  Services_Add_Editor_en: z.string().optional(),
  Services_Add_Editor_ar: z.string().optional(),
  Services_Add_Status: z.boolean().optional(),
  Services_Add_Link: z.string().optional(),
  Services_Add_Image: z
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
