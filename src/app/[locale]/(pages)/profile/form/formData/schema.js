import * as z from "zod";

const fileSchema = z
  .instanceof(File) // Check that the value is a File object
  .refine((file) => file.size <= 2 * 1024 * 1024, {
    // Max size: 2MB
    message: "File size should not exceed 2MB",
  })
  .refine((file) => /\.(jpeg|jpg|png|gif|svg|webp)$/i.test(file.name), {
    // Allowed file types
    message: "Only image files are allowed",
  });

export const schema = z.object({
  Profile_Edit_Name: z.string().optional(),
  Profile_Edit_Email: z.string().email().optional(),
  Profile_Edit_Phone: z.string().optional(),
  Profile_Edit_Address: z.string().optional(),
  Profile_Edit_Picture: z
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
