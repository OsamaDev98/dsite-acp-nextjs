import * as z from "zod";

export const schema = z.object({
  Info_Website_Title_en: z.string().optional(),
  Info_Website_Title_ar: z.string().optional(),
  Info_Website_Description_en: z.string().optional(),
  Info_Website_Description_ar: z.string().optional(),
  Info_Website_Tags_en: z.array(z.string()).optional(),
  Info_Website_Tags_ar: z.array(z.string()).optional(),
  Info_Website_Language: z.string().optional(),
  Info_Website_Country: z.string().optional(),
  Info_Website_Status: z.string().optional(),
  Info_Website_Social_Facebook: z.string().optional(),
  Info_Website_Social_Twitter: z.string().optional(),
  Info_Website_Social_LinkedIn: z.string().optional(),
  Info_Website_Social_Youtube: z.string().optional(),
  Info_Website_Social_Instagram: z.string().optional(),
  Info_Website_Social_WhatsApp: z.string().optional(),
  Info_Website_Social_Snapchat: z.string().optional(),
  Info_Website_Social_Tiktok: z.string().optional(),
});
