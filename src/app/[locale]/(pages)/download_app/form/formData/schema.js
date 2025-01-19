import * as z from "zod";

export const schema = z.object({
  App_Title_en: z.string().optional(),
  App_Title_ar: z.string().optional(),
  App_Android_Title: z.string().optional(),
  App_Ios_Title: z.string().optional(),
  App_AppGallery_Title: z.string().optional(),
  App_Image: z
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
