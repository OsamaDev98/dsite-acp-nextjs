import * as z from "zod";

export const editSchema = z.object({
  Team_Edit_Name_en: z.string().optional(),
  Team_Edit_Name_ar: z.string().optional(),
  Team_Edit_Position_en: z.string().optional(),
  Team_Edit_Position_ar: z.string().optional(),
  Team_Edit_Editor_en: z.string().optional(),
  Team_Edit_Editor_ar: z.string().optional(),
  Team_Edit_Status: z.boolean().optional(),
  Team_Edit_Image: z
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
  Team_Add_Name_en: z.string().optional(),
  Team_Add_Name_ar: z.string().optional(),
  Team_Add_Position_en: z.string().optional(),
  Team_Add_Position_ar: z.string().optional(),
  Team_Add_Editor_en: z.string().optional(),
  Team_Add_Editor_ar: z.string().optional(),
  Team_Add_Status: z.boolean().optional(),
  Team_Add_Image: z
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
