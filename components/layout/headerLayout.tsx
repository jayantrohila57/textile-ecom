"use client";
import { IChildren } from "@/types/interface";
import Headroom from "react-headroom";
const HeaderLayout = ({ children }: IChildren) => (
  <header>
    <Headroom className="z-50">{children}</Headroom>
  </header>
);

export default HeaderLayout;
