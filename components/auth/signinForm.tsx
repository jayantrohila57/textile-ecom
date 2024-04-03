"use client";

import * as React from "react";

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
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Loader2 } from "lucide-react";
import { SignIn } from "@/server/action-sign-in";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export default function SignInForm({ className, ...props }: SignInFormProps) {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");

  const { toast } = useToast();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError("");
    setSuccess("");
    setIsPending(true);
    const data = await SignIn(values);
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
      <CardHeader className="flex flex-col space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Sign in Your Account
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter your email below to sign in your account
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("grid gap-6", className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="name@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
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
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

                {isPending ? "Signing In..." : "Sign In with Email"}
              </Button>
            </div>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-5">
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
      <CardFooter className="relative flex flex-row items-center justify-center py-1 ">
        <Button asChild variant={"link"} className="text-black">
          <Link href={"/auth/forget-password"}>
            Forget Password?
            <span className="sr-only">Forgot password</span>
          </Link>
        </Button>

        <Button asChild variant={"link"} className="text-black">
          <Link href="/auth/sign-up">
            Sign up new account?
            <span className="sr-only">Sign up</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
