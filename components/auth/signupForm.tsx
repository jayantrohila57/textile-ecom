"use client";

import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/server/action-sign-up";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import React from "react";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { RegisterSchema } from "@/validation/validation";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: UserAuthFormProps) {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");

  const [isPending, setIsPending] = React.useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setError("");
    setSuccess("");
    setIsPending(true);
    const data = await register(values);
    if (data?.error) {
      form.reset();
      setError(data?.error);
      toast({
        title: data?.error,
      });
      setIsPending(false);
    }
    if (data?.success) {
      form.reset();
      setSuccess(data?.success);
      setIsPending(false);
    }
  }

  return (
    <Card className="max-w-lg">
      <CardHeader className="flex flex-col space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Sign Up New Account
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter your detail below to sign up new account
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("grid gap-1", className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-1">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FullName</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full Name, ex John Deo"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter Your Email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter Your Password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Repeat Password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isPending ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
          </form>
        </Form>
        <div className="relative mt-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-5 mt-2">
          <Button variant="outline" size={"icon"}>
            <FaGoogle className="h-6 w-6 text-red-500" />
          </Button>
          <Button variant="outline" size={"icon"}>
            <FaFacebook className="h-6 w-6 text-blue-800" />
          </Button>
          <Button variant="outline" size={"icon"}>
            <FaTwitter className="h-6 w-6 text-blue-500" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="relative flex flex-row items-center justify-center py-0 ">
        <Button asChild variant={"link"} className="text-black">
          <Link href={"/auth/forget-password"}>
            Forget Password?
            <span className="sr-only">Forgot password</span>
          </Link>
        </Button>

        <Button asChild variant={"link"} className="text-black">
          <Link href="/auth/sign-in">
            Sign In Your Account?
            <span className="sr-only">Sign In</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
