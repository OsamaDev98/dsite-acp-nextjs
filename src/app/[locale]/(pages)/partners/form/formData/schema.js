import * as z from "zod";

export const editSchema = z.object({
  Partners_Edit_Title_en: z.string().optional(),
  Partners_Edit_Title_ar: z.string().optional(),
  Partners_Edit_Link: z.string().optional(),
  Partners_Edit_Status: z.boolean().optional(),
  Partners_Edit_Image: z
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
  Partners_Add_Title_en: z.string().optional(),
  Partners_Add_Title_ar: z.string().optional(),
  Partners_Add_Link: z.string().optional(),
  Partners_Add_Status: z.boolean().optional(),
  Partners_Add_Image: z
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
