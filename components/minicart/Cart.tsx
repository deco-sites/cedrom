// import { platform } from "$store/apps/storefront.ts";
import { lazy } from "preact/compat";
import { usePlatform } from "$store/sdk/usePlatform.tsx";

const CartVTEX = lazy(() => import("./vtex/Cart.tsx"));
const CartVNDA = lazy(() => import("./vnda/Cart.tsx"));
const CartWake = lazy(() => import("./wake/Cart.tsx"));
const CartLinx = lazy(() => import("./linx/Cart.tsx"));
const CartShopify = lazy(() => import("./shopify/Cart.tsx"));
const CartNuvemshop = lazy(() => import("./nuvemshop/Cart.tsx"));

export interface Props {
  platform: ReturnType<typeof usePlatform>;
}

function Cart({ platform }: Props) {
  if (platform === "vtex") {
    return;
  }

  if (platform === "vnda") {
    return;
  }

  if (platform === "wake") {
    return;
  }

  if (platform === "linx") {
    return;
  }

  if (platform === "shopify") {
    return;
  }

  if (platform === "nuvemshop") {
    return;
  }

  return null;
}

export default Cart;
