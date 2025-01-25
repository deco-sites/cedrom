import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "$store/sections/Theme/Theme.tsx";
import { Context } from "deco/deco.ts";

const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      <script
        dangerouslySetInnerHTML={{
          __html:
            `const bodyScript=document.querySelector('body'),hasScript=document.querySelector('#respondi_src');if(!hasScript){const script=document.createElement('script');script.setAttribute("async", "");document.body.appendChild(script),script.id='respondi_src',script.src='https://embed.respondi.app/embed.js';}`,
        }}
      />

      <script src="//code.jivosite.com/widget/SrSwM7PiQm" async></script>

      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X8V5D1GXWW"
      >
      </script>
      <script
        dangerouslySetInnerHTML={{
          __html: ` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X8V5D1GXWW');`,
        }}
      />

      {/* <!-- Google Tag Manager --> */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WS9VX5XP');`,
        }}
      />
      {/* <!-- End Google Tag Manager --> */}

      {/* Rest of Preact tree */}
      <ctx.Component />

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
});
