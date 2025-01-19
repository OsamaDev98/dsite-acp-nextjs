import * as z from "zod";

export const editSchema = z.object({
  Slider_Edit_Title_en: z.string().optional(),
  Slider_Edit_Title_ar: z.string().optional(),
  Slider_Edit_Subtitle_en: z.string().optional(),
  Slider_Edit_Subtitle_ar: z.string().optional(),
  Slider_Edit_Content_en: z.string().optional(),
  Slider_Edit_Content_ar: z.string().optional(),
  Slider_Edit_Action_en: z.string().optional(),
  Slider_Edit_Action_ar: z.string().optional(),
  Slider_Edit_Url_en: z.string().optional(),
  Slider_Edit_Url_ar: z.string().optional(),
  Slider_Edit_Link: z.string().optional(),
  Slider_Edit_Status: z.boolean().optional(),
  Slider_Edit_Flip_Status: z.boolean().optional(),
  Slider_Edit_File_type: z.string().optional(),
  Slider_Edit_Image: z
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
  Slider_Add_Title_en: z.string().optional(),
  Slider_Add_Title_ar: z.string().optional(),
  Slider_Add_Subtitle_en: z.string().optional(),
  Slider_Add_Subtitle_ar: z.string().optional(),
  Slider_Add_Content_en: z.string().optional(),
  Slider_Add_Content_ar: z.string().optional(),
  Slider_Add_Action_en: z.string().optional(),
  Slider_Add_Action_ar: z.string().optional(),
  Slider_Add_Url_en: z.string().optional(),
  Slider_Add_Url_ar: z.string().optional(),
  Slider_Add_Link: z.string().optional(),
  Slider_Add_Status: z.boolean().optional(),
  Slider_Add_Flip_Status: z.boolean().optional(),
  Slider_Add_Image: z
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
