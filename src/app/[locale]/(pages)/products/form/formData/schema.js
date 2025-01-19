import * as z from "zod";

export const editSchema = z.object({
  Product_Edit_Title_en: z.string().optional(),
  Product_Edit_Title_ar: z.string().optional(),
  Product_Edit_Subtitle_en: z.string().optional(),
  Product_Edit_Subtitle_ar: z.string().optional(),
  Product_Edit_Description_en: z.string().optional(),
  Product_Edit_Description_ar: z.string().optional(),
  Product_Edit_Editor_en: z.string().optional(),
  Product_Edit_Editor_ar: z.string().optional(),
  Product_Edit_Link: z.string().optional(),
  Product_Edit_Category: z.string().optional(),
  Product_Edit_Brands: z.string().optional(),
  Product_Edit_Price: z.coerce.number().optional(),
  Product_Edit_Number: z.coerce.number().optional(),
  Product_Edit_Status: z.boolean().optional(),
  Product_Edit_Files: z.array(z.instanceof(File)).optional(),
  Product_Edit_Image: z
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
  Product_Add_Title_en: z.string().optional(),
  Product_Add_Title_ar: z.string().optional(),
  Product_Add_Subtitle_en: z.string().optional(),
  Product_Add_Subtitle_ar: z.string().optional(),
  Product_Add_Description_en: z.string().optional(),
  Product_Add_Description_ar: z.string().optional(),
  Product_Add_Editor_en: z.string().optional(),
  Product_Add_Editor_ar: z.string().optional(),
  Product_Add_Link: z.string().optional(),
  Product_Add_Category: z.string().optional(),
  Product_Add_Brands: z.string().optional(),
  Product_Add_Price: z.coerce.number().optional(),
  Product_Add_Number: z.coerce.number().optional(),
  Product_Add_Status: z.boolean().optional(),
  Product_Add_Files: z.array(z.instanceof(File)).optional(),
  Product_Add_Image: z
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
  Brand_Edit_Title_en: z.string().optional(),
  Brand_Edit_Title_ar: z.string().optional(),
  Brand_Edit_Image: z
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
  Brand_Edit_Status: z.boolean().optional(),
  Brand_Edit_Product_Tags: z.array(z.string()).optional(),
  Category_Edit_Title_en: z.string().optional(),
  Category_Edit_Title_ar: z.string().optional(),
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
  Category_Edit_Status: z.boolean().optional(),
  Category_Edit_Product_Tags: z.array(z.string()).optional(),
});
export const addSubSchema = z.object({
  Brand_Add_Title_en: z.string().optional(),
  Brand_Add_Title_ar: z.string().optional(),
  Brand_Add_Image: z
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
  Brand_Add_Status: z.boolean().optional(),
  Brand_Add_Product_Tags: z.array(z.string()).optional(),
  Category_Add_Title_en: z.string().optional(),
  Category_Add_Title_ar: z.string().optional(),
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
  Category_Add_Status: z.boolean().optional(),
  Category_Add_Product_Tags: z.array(z.string()).optional(),
});
