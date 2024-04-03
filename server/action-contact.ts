"use server";

import { prisma } from "@/config/database";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  businessName: z.string(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 160 characters.",
    }),
});

export const ContactAction = async (
  values: z.infer<typeof FormSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = FormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { businessName, email, message, name, phone } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        businessName,
        email,
        message,
        name,
        phone,
      },
    });
    return { success: "Form Submitted Successfully" };
  } catch (error: any) {
    return { error: error.message };
  }
};
