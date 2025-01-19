import * as z from "zod";

export const schema = z.object({
  Why_Edit_Title_en: z.string().optional(),
  Why_Edit_Subtitle_en: z.string().optional(),
  Why_Editor_en: z.string().optional(),
  Why_Edit_Title_ar: z.string().optional(),
  Why_Edit_Subtitle_ar: z.string().optional(),
  Why_Editor_ar: z.string().optional(),
});
