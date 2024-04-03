'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const forgetUserSchema = z.object({
  email: z.string().email({ message: 'Enter Valid Email' }),
})

export default function ForgetForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof forgetUserSchema>>({
    resolver: zodResolver(forgetUserSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof forgetUserSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className="max-w-lg">
      <CardHeader className="flex flex-col space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Forget Password</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter Your Email below to send reset password link to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className={cn('grid gap-6', className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1">
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
              <Button disabled={isLoading}>
                {/* {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />} */}
                Send Email
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="relative flex flex-row items-center justify-center py-1 ">
        <Button asChild variant={'link'} className="text-black">
          <Link href={'/auth/sign-in'}>
            Sign In your Account
            <span className="sr-only">Sign In</span>
          </Link>
        </Button>

        <Button asChild variant={'link'} className="text-black">
          <Link href="/auth/sign-up">
            Sign up new account?
            <span className="sr-only">Sign up</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
