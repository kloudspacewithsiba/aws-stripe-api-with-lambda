import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct1 from "@/components/singleProduct/SingleProduct1";

// import { allProducts } from "@/data/products";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useContextElement } from "@/context/Context";

let product_name = ""

const metadata = {
  title: `KloudSpace | ${product_name}`,
  description: "",
};


export default function ProductDetailsPage() {
  let params = useParams();
  const productId = params.id;
  const { productsList } = useContextElement();
  //const [product, setProduct] = useState({})
  const product = productsList.find(prod => prod.PutRequest.Item.pk.S.includes(productId));
  console.log("PRODUCT__ITEM::", product);


  useEffect(() => {
    console.log("PRODUCT_LIST::", productsList)
  }, [])
  
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct1 product={product} />
        {/* <RelatedSlider /> */}
      </main>
      <Footer1 />
    </>
  );
}
