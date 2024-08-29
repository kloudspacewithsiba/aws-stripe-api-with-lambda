import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
import OrderCompleted from "@/components/shopCartandCheckout/OrderCompleted";
const metadata = {
  title: "KloudSpace | Shop Order Complete",
  description: "",
};
export default function ShopOrderConplate() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="shop-checkout container">
          {/* <h2 className="page-title">ORDER RECEIVED</h2>
          <ChectoutSteps /> */}
          <OrderCompleted />
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
