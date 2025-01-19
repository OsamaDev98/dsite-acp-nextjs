import * as z from "zod";

export const schema = z.object({
  Change_Old_Password: z.string().optional(),
  Change_New_Password: z.string().optional(),
  Confirm_New_Password: z.string().optional(),
});
