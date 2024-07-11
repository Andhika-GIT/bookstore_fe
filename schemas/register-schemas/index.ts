import * as z from "zod";

export const registerSchema = z.object({
  email: z.string().email("invalid email format"),
  username: z.string().min(1, "username is required").min(5, "username must atleast 5 characters"),
  password: z.string().min(5, "password must atleast 5 characters"),
  phoneNumber: z.string().regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  address: z.string().min(1, "Address is required"),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
