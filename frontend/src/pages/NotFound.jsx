import MetaComponent from "@/components/common/MetaComponent";
import PageNotFound from "./PageNotFound";
const metadata = {
  title: "KloudSpace | Oops, Not Found",
  description: "",
};
export default function NotFound() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageNotFound />
    </>
  );
}
