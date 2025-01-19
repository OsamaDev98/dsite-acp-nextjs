import * as z from "zod";

export const editSchema = z.object({
  Project_Edit_Title_en: z.string().optional(),
  Project_Edit_Title_ar: z.string().optional(),
  Project_Edit_Subtitle_en: z.string().optional(),
  Project_Edit_Subtitle_ar: z.string().optional(),
  Project_Edit_Description_en: z.string().optional(),
  Project_Edit_Description_ar: z.string().optional(),
  Project_Edit_Editor_en: z.string().optional(),
  Project_Edit_Editor_ar: z.string().optional(),
  Project_Edit_Status: z.boolean().optional(),
  Project_Edit_Image: z
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
  Project_Add_Title_en: z.string().optional(),
  Project_Add_Title_ar: z.string().optional(),
  Project_Add_Subtitle_en: z.string().optional(),
  Project_Add_Subtitle_ar: z.string().optional(),
  Project_Add_Description_en: z.string().optional(),
  Project_Add_Description_ar: z.string().optional(),
  Project_Add_Editor_en: z.string().optional(),
  Project_Add_Editor_ar: z.string().optional(),
  Project_Add_Status: z.boolean().optional(),
  Project_Add_Image: z
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
