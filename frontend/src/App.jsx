/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Svgs from "@/components/common/Svgs";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";
import LoginFormPopup from "@/components/common/LoginFormPopup";

import ScrollTop from "@/components/common/ScrollTop";
import Context, { useContextElement } from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import SiteMap from "@/components/modals/SiteMap";
import NewsLetter from "@/components/modals/NewsLetter";
import CookieContainer from "@/components/common/CookieContainer";
import MobileHeader from "@/components/headers/MobileHeader";
import SizeGuide from "@/components/modals/SizeGuide";
import Delivery from "@/components/modals/Delivery";
import CustomerLogin from "@/components/asides/CustomerLogin";
import ShopFilter from "@/components/asides/ShopFilter";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductReviews from "@/components/asides/ProductReviews";
import MobileFooter1 from "@/components/footers/MobileFooter1";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";


import ShopCartPage from "./pages/ShopCartPage";
import ShopCheckoutPage from "./pages/ShopCheckoutPage";
import ShopOrderConplate from "./pages/ShopOrderCompletePage";
import AccountPage from "./pages/AccountPage";

import AccountOrderPage from "./pages/AccountOrderPage";
import AccountEditAddressPage from "./pages/AccountEditAddressPage";
import AccountEditPage from "./pages/AccountEditPage";
import AccountWishlistPage from "./pages/AccountWishlistPage";

import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";


import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const PrivateRoutes = () => {
  const { authenticated } = useContextElement();
  return (authenticated.isAuthenticated ? <Outlet /> : <Navigate to="/login_register" />)
}

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  return (
    <>
      <Svgs />
      <Context>
        <MobileHeader />
        <Routes>
          <Route path="/">
            {/* Public Routes */}
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/product/:id" element={<ProductDetailsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="accounts/reset-password" element={<ResetPasswordPage />} />
            <Route path="accounts/login" element={<LoginPage />} />
            <Route path="accounts/register" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />

            {/* Public Routes */}
            <Route path="account_edit_address" element={<AccountEditAddressPage />}/>
            <Route path="shop_cart" element={<ShopCartPage />} />
            <Route path="shop_checkout" element={<ShopCheckoutPage />} />
            <Route path="account_dashboard" element={<AccountPage />} />
            <Route path="shop_order_complete" element={<ShopOrderConplate />} />
            <Route path="account_orders" element={<AccountOrderPage />} />
            <Route path="account_edit" element={<AccountEditPage />} />
            <Route path="account_wishlist" element={<AccountWishlistPage />} />
            
          </Route>
        </Routes>

        <MobileFooter1 />
        {/* //modals and asides */}
        <LoginFormPopup />
        <QuickView />
        <NewsLetter />
        <CookieContainer />
        <SizeGuide />
        <Delivery />
        <CartDrawer />
        <SiteMap />
        <CustomerLogin />
        <ShopFilter />
        <ProductDescription />
        <ProductAdditionalInformation />
        <ProductReviews />
      </Context>
      <div className="page-overlay" id="pageOverlay"></div>
      <ScrollTop />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
