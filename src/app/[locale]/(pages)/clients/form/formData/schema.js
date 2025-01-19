import * as z from "zod";

export const editSchema = z.object({
  Clients_Edit_Title_en: z.string().optional(),
  Clients_Edit_Title_ar: z.string().optional(),
  Clients_Edit_Link: z.string().optional(),
  Clients_Edit_Status: z.boolean().optional(),
  Clients_Edit_Image: z
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
  Clients_Add_Title_en: z.string().optional(),
  Clients_Add_Title_ar: z.string().optional(),
  Clients_Add_Link: z.string().optional(),
  Clients_Add_Status: z.boolean().optional(),
  Clients_Add_Image: z
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
