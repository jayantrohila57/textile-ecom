import AppMetaData from "@/components/meta/app.meta";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { fonts } from "@/lib/utils";
import "@/styles/globals.css";

import { IChildren } from "@/types/interface";
import InitAOS from "@/components/animation/aos";

export const metadata = AppMetaData;
const RootLayout = ({ children }: IChildren) => (
  <html lang="en" suppressHydrationWarning={true}>
    <body suppressHydrationWarning={true} className={fonts.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
        <InitAOS />
      </ThemeProvider>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
