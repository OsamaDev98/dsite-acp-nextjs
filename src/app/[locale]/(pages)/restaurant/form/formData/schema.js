import * as z from "zod";

export const editSchema = z.object({
  Restaurant_Edit_Title_en: z.string().optional(),
  Restaurant_Edit_Title_ar: z.string().optional(),
  Restaurant_Edit_Subtitle_en: z.string().optional(),
  Restaurant_Edit_Subtitle_ar: z.string().optional(),
  Restaurant_Edit_Description_en: z.string().optional(),
  Restaurant_Edit_Description_ar: z.string().optional(),
  Restaurant_Edit_Editor_en: z.string().optional(),
  Restaurant_Edit_Editor_ar: z.string().optional(),
  Restaurant_Edit_Category: z.string().optional(),
  Restaurant_Edit_Image: z.string().optional(),
  Restaurant_Edit_Price: z.coerce.number().optional(),
  Restaurant_Edit_Number: z.coerce.number().optional(),
  Restaurant_Edit_Status: z.boolean().optional(),
  Restaurant_Edit_Image: z
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
  Restaurant_Add_Title_en: z.string().optional(),
  Restaurant_Add_Title_ar: z.string().optional(),
  Restaurant_Add_Subtitle_en: z.string().optional(),
  Restaurant_Add_Subtitle_ar: z.string().optional(),
  Restaurant_Add_Description_en: z.string().optional(),
  Restaurant_Add_Description_ar: z.string().optional(),
  Restaurant_Add_Editor_en: z.string().optional(),
  Restaurant_Add_Editor_ar: z.string().optional(),
  Restaurant_Add_Category: z.string().optional(),
  Restaurant_Add_Image: z.string().optional(),
  Restaurant_Add_Price: z.coerce.number().optional(),
  Restaurant_Add_Number: z.coerce.number().optional(),
  Restaurant_Add_Status: z.boolean().optional(),
  Restaurant_Add_Image: z
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
export const editSubSchema = z.object({
  Category_Edit_Title_en: z.string().optional(),
  Category_Edit_Title_ar: z.string().optional(),
  Category_Edit_Category_Tags: z.array(z.string()).optional(),
  Category_Edit_Status: z.boolean().optional(),
  Category_Edit_Image: z
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
export const addSubSchema = z.object({
  Category_Add_Title_en: z.string().optional(),
  Category_Add_Title_ar: z.string().optional(),
  Category_Add_Category_Tags: z.array(z.string()).optional(),
  Category_Add_Status: z.boolean().optional(),
  Category_Add_Image: z
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
