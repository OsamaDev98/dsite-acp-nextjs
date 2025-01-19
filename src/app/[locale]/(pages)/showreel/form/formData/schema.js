import * as z from "zod";

export const schema = z.object({
  Show_Title_en: z.string().optional(),
  Show_Title_ar: z.string().optional(),
  Show_Subtitle_en: z.string().optional(),
  Show_Subtitle_ar: z.string().optional(),
  Show_Show_Link: z.string().optional(),
  Show_Link_Title: z.string().optional(),
});
