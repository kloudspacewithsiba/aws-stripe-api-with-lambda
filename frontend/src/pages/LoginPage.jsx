import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import LoginRegister from "@/components/otherPages/LoginRegister";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "KloudSpace | Login Register",
  description: "",
};
export default function LoginPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <LoginRegister />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
