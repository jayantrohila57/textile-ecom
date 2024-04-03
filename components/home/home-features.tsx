import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function HomeFeatures() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-16  grid md:grid-cols-4 gap-5 md:py-20 py-10  text-center">
      <Card className="shadow-xl hover:-translate-y-4 duration-300 transition-all cursor-pointer">
        <CardHeader
          className="p-4 gap-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CardTitle>Free Shipping</CardTitle>
          <CardDescription>Free shipping on all order</CardDescription>
        </CardHeader>
      </Card>
      <Card className="shadow-xl hover:-translate-y-4 duration-300 transition-all cursor-pointer">
        <CardHeader
          className="p-4 gap-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CardTitle>Support 24/7</CardTitle>
          <CardDescription>Support 24 hours a day</CardDescription>
        </CardHeader>
      </Card>
      <Card className="shadow-xl hover:-translate-y-4 duration-300 transition-all cursor-pointer">
        <CardHeader
          className="p-4 gap-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CardTitle>Money Return</CardTitle>
          <CardDescription>30 days for free return</CardDescription>
        </CardHeader>
      </Card>
      <Card className="shadow-xl hover:-translate-y-4 duration-300 transition-all cursor-pointer">
        <CardHeader
          className="p-4 gap-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CardTitle>Order Discount</CardTitle>
          <CardDescription>10% off on your first order</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default HomeFeatures;
