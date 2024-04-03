import * as z from "zod";
import { Role } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([Role.ADMIN, Role.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const UserListTableSchema = z.object({
  id: z.string(),
  name: z.optional(z.string()),
  label: z.optional(z.string()),
  email: z.optional(z.string().email()),
  image: z.string(),
  role: z.enum([Role.ADMIN, Role.USER]),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(4, "Name will be minimum of 4 character")
      .max(60, "Name will be maximum of 60 characters"),
    email: z.string().email({ message: "Enter Valid Email" }),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const editProfileSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  nationality: z.string(),
  gender: z.enum(["male", "female", "other"]),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export const editUserSchema = z.object({
  name: z.string(),
  email: z.optional(z.string().email()),
  role: z.enum([Role.ADMIN, Role.USER]),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string(),
  nationality: z.string(),
});
