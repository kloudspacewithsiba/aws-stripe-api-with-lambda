import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Checkout from "@/components/shopCartandCheckout/Checkout";
import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
const metadata = {
  title: "KloudSpace | Checkout",
  description: "",
};

export default function ShopCheckoutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="shop-checkout container">
          <h2 className="page-title">Shipping and Checkout</h2>
          <ChectoutSteps />
          <Checkout />
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
