import * as z from "zod";

export const schema = z.object({
  Contact_Edit_Title_en: z.string().optional(),
  Contact_Edit_Title_ar: z.string().optional(),
  Contact_Edit_Subtitle_en: z.string().optional(),
  Contact_Edit_Subtitle_ar: z.string().optional(),
  Contact_Edit_Editor_en: z.string().optional(),
  Contact_Edit_Editor_ar: z.string().optional(),
  Contact_Edit_Email: z.string().optional(),
  Contact_Edit_Phone: z.string().optional(),
  Contact_Edit_Telephone: z.string().optional(),
  Contact_Edit_Submit_Email: z.string().optional(),
});
