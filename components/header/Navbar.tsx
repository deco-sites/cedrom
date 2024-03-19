import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import CartButtonNuvemshop from "$store/islands/Header/Cart/nuvemshop.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "$store/components/header/Header.tsx";

function Navbar({ items, logo, logoPosition = "left" }: {
  items: SiteNavigationElement[];
  // searchbar?: SearchbarProps;
  logo?: Logo;
  // buttons?: Buttons;
  logoPosition?: "left" | "center";
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center border-b border-base-200 w-full px-6 pb-6 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt="Cedrom"
              width={100}
              height={75}
              class="max-[1020px]:w-full max-[1020px]:h-auto max-[1020px]:p-4"
            />
          </a>
        )}
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:grid items-center border-b border-base-200 w-full px-6 py-[13px]">
        <div class="container hidden lg:grid lg:grid-cols-2 items-center w-full">
          <ul
            class={`flex gap-6 col-span-1 ${
              logoPosition === "left" ? "justify-end" : "justify-start"
            }`}
          >
            {items.map((item) => <NavItem item={item} />)}
          </ul>
          <div
            class={`flex ${
              logoPosition === "left"
                ? "justify-start -order-1"
                : "justify-center"
            }`}
          >
            {logo && (
              <a
                href="/"
                aria-label="Store logo"
                class="block"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={115}
                  height={62}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
