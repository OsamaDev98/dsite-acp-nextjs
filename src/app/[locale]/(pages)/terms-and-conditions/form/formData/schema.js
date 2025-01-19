import * as z from "zod";

export const schema = z.object({
  Terms_Edit_Title_en: z.string().optional(),
  Terms_Edit_Title_ar: z.string().optional(),
  Terms_Edit_Subtitle_en: z.string().optional(),
  Terms_Edit_Subtitle_ar: z.string().optional(),
  Terms_Edit_Editor_en: z.string().optional(),
  Terms_Edit_Editor_ar: z.string().optional(),
  Terms_Status: z.boolean().optional(),
});
