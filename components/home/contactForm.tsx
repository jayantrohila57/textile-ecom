"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import React from "react";
import { useToast } from "../ui/use-toast";
import { ContactAction } from "@/server/action-contact";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FormError } from "../auth/form-error";
import { FormSuccess } from "../auth/form-success";
import { Loader2 } from "lucide-react";

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

const ContactForm = () => {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");

  const { toast } = useToast();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setError("");
    setSuccess("");
    setIsPending(true);
    const data = await ContactAction(values);
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
    <Card className="w-full">
      <CardHeader className="flex flex-col space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
          Contact Us
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter your full details
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("grid gap-6", "")}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Full Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Jon Smith"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Business Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="w-full"
                      placeholder="work@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Business Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="w-full"
                      placeholder="+91 9876543210"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Business Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Enter Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full"
                      placeholder="Your Message..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

              {isPending ? "Submitting..." : "Submit Your Details"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
