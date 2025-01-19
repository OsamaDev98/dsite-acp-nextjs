import * as z from "zod";

export const schema = z.object({
  Main_Color: z.string().optional(),
  Subtitle_Color: z.string().optional(),
  Light_Color: z.string().optional(),
  Dark_Color: z.string().optional(),
  Button_Color: z.string().optional(),
  Paragraph_Color: z.string().optional(),
  Footer_Color: z.string().optional(),
  Light_Background_Color: z.string().optional(),
  colorful_logo: z
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
  white_logo: z
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
  favicon_logo: z
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
