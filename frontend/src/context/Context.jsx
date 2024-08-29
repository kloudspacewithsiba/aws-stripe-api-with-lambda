/* eslint-disable react/prop-types */
// import { allProducts } from "@/data/products";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
const dataContext = React.createContext();

import { allProducts } from '@/data/products.json'

// eslint-disable-next-line react-refresh/only-export-components
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [productItem, setProductItem] = useState();
  const [customerOrders, setCustomerOrders] = useState([]);
  const [authenticated, setAuthenticated] = useState({
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : null
  });
  const [orderBillingDetails, setOrderBillingDetails] = useState({});

  
  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.PutRequest.Item.product_price.N;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  // Fetch prodcuts
  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = allProducts.filter(prod => prod.PutRequest.Item.entityType.S == "product");
      setProductsList(products)
    }
    fetchAllProducts();
  }, []);

  // Fetch customer orders
  useEffect(() => {
    const fetchProductById = async (id) => {
      const product = allProducts.filter(prod => prod.PutRequest.Item.entityType.S == "product" && prod.PutRequest.Item.pk == id);
      setProductItem(product)
    }
    //fetchProductById();
  }, [])

  const addProductToCart = (id) => {

    if (!cartProducts.filter((elm) => elm.PutRequest.Item.pk.S.includes(id))[0]) {

      const item = {
        ...productsList.filter((elm) => elm.PutRequest.Item.pk.S.includes(id))[0],
        quantity: 1,
      };

      setCartProducts((pre) => [...pre, item]);

      document
        .getElementById("cartDrawerOverlay")
        .classList.add("page-overlay_visible");
      document.getElementById("cartDrawer").classList.add("aside_visible");
    }
  };
  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.PutRequest.Item.pk.S.includes(id))[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);


  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") ? true : false;
    setAuthenticated({
      ...authenticated,
      isAuthenticated: isAuthenticated
    })
  }, [])

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    productsList,
    authenticated,
    setAuthenticated,
    orderBillingDetails, 
    setOrderBillingDetails,
    customerOrders, 
    setCustomerOrders
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
