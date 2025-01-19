import * as z from "zod";

export const editSchema = z.object({
  Pages_Edit_Title_en: z.string().optional(),
  Pages_Edit_Title_ar: z.string().optional(),
  Pages_Edit_Subtitle_en: z.string().optional(),
  Pages_Edit_Subtitle_ar: z.string().optional(),
  Pages_Edit_Content_en: z.string().optional(),
  Pages_Edit_Content_ar: z.string().optional(),
  Pages_Edit_Tags: z.array(z.string()).optional(),
});
export const addSchema = z.object({
  Pages_Add_Title_en: z.string().optional(),
  Pages_Add_Title_ar: z.string().optional(),
  Pages_Add_Subtitle_en: z.string().optional(),
  Pages_Add_Subtitle_ar: z.string().optional(),
  Pages_Add_Content_en: z.string().optional(),
  Pages_Add_Content_ar: z.string().optional(),
  Pages_Add_Tags: z.array(z.string()).optional(),
});
