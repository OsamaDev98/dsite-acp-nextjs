import * as z from "zod";

export const editSchema = z.object({
  Plans_Edit_Title_en: z.string().optional(),
  Plans_Edit_Title_ar: z.string().optional(),
  Plans_Edit_Content_en: z.string().optional(),
  Plans_Edit_Content_ar: z.string().optional(),
  Plans_Edit_Duration: z.string().optional(),
  Plans_Edit_Price: z.coerce.number().optional(),
  Plans_Edit_Status: z.boolean().optional(),
  Plans_Edit_Image: z
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
  planFeatures: z
    .array(
      z.object({
        feature_en: z.string().optional(),
        feature_ar: z.string().optional(),
      })
    )
    .optional(),
});
export const addSchema = z.object({
  Plans_Add_Title_en: z.string().optional(),
  Plans_Add_Title_ar: z.string().optional(),
  Plans_Add_Content_en: z.string().optional(),
  Plans_Add_Content_ar: z.string().optional(),
  Plans_Add_Duration: z.string().optional(),
  Plans_Add_Price: z.coerce.number().optional(),
  Plans_Add_Status: z.boolean().optional(),
  Plans_Add_Image: z
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
  planFeatures: z
    .array(
      z.object({
        feature_en: z.string().optional(),
        feature_ar: z.string().optional(),
      })
    )
    .optional(),
});
