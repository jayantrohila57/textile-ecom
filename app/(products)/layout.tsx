import Scroll from "@/components/common/Scroll";
import ScrollToTopButton from "@/components/common/ScrollToUp";
import FooterLayout from "@/components/layout/footer";
import Header from "@/components/layout/header";
import HeaderLayout from "@/components/layout/headerLayout";
import { IChildren } from "@/types/interface";

const SiteLayout = ({ children }: IChildren) => (
  <>
    <HeaderLayout>
      <Header />
    </HeaderLayout>
    {children}
    <FooterLayout />
    <Scroll />
    <ScrollToTopButton />
  </>
);
export default SiteLayout;
