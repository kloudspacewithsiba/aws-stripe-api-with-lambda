import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Shop1 from "@/components/shoplist/Shop1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "kloudSpace | Shop",
  description: "",
};

export default function ShopPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <Shop1 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
