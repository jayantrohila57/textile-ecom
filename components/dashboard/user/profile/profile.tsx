"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const user = [
  {
    id: 1,
    name: "Ram Prakash",
    email: "ramprakash@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "+91-0123456789",
    password: "User@123",
    address: "XYZ Uttar Pradesh 247121",
  },
];

function Profile() {
  return (
    <section className="w-full p-5">
      <h1 className="text-lg font-semibold">User Profile</h1>
      {user.map(
        ({ address, avatar, email, id, name, password, phone }, index) => (
          <>
            <Card
              key={index + id}
              className="w-full flex flex-col md:flex-row justify-start items-center gap-5 mt-4"
            >
              <CardHeader className="w-full ">
                <AspectRatio ratio={3 / 2} className="h-32 w-32 md:w-60 md:h-60 ">
                  <Image
                    src={avatar}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-full"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-start items-start gap-5">
                <div className="w-full flex justify-start items-center gap-3">
                  <h2 className="text-primary text-sm md:text-lg font-semibold">Name:-</h2>
                  <span className="text-sm md:text-lg">{name}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-3">
                  <h2 className="text-primary text-sm md:text-lg font-semibold">
                    Phone No:-
                  </h2>
                  <span className="text-sm md:text-lg">{phone}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-3">
                  <h2 className="text-primary text-sm md:text-lg font-semibold">
                    Email:-
                  </h2>
                  <span className="text-sm md:text-lg">{email}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-3">
                  <h2 className="text-primary text-sm md:text-lg font-semibold">
                    Password:-
                  </h2>
                  <span className="text-sm md:text-lg">{password}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-3">
                  <h2 className="text-primary text-sm md:text-lg font-semibold">
                    Address:-
                  </h2>
                  <span className="text-sm md:text-lg">{address}</span>
                </div>
              </CardContent>
            </Card>
            <div className="w-full flex items-center justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&#39;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue={name}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        defaultValue={email}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Phone No.
                      </Label>
                      <Input
                        id="phone"
                        defaultValue={phone}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Password
                      </Label>
                      <Input
                        id="password"
                        defaultValue={password}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Address
                      </Label>
                      <Input
                        id="address"
                        defaultValue={address}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </>
        )
      )}
      {/* 
             
            
          
        )
      )} */}
    </section>
  );
}

export default Profile;
