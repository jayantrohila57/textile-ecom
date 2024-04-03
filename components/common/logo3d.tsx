"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import logo from "@/assets/logo-reverent.png";
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card bg-white  dark:hover:shadow-2xl w-full h-full rounded-md p-5 border  ">
        <Image
          src={""}
          alt="Reverent Technologies"
          width={2000}
          height={2000}
          className="h-full w-full object-cover"
        />
      </CardBody>
    </CardContainer>
  );
}
