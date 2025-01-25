import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Logo {
  src: ImageWidget;
  alt?: string;
}

export interface Props {
  logo?: Logo;
  text?: string;
  address?: string;
}

const DEFAULT_PROPS2 = {
  logo: {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
    alt: "Cedrom",
  },
  text: "TODOS OS DIREITOS RESERVADOS CEDROM GARANTIDORA - CNPJ: 19.409.591/0001-83",
  address: "Rua Araguari, nº 835, conjunto 301 - Sala 1, Vila Uberabinha, São Paulo, SP",
};

export default function FooterNew(props: Props) {
  const {
    logo,
    text,
    address,
  } = { ...DEFAULT_PROPS2, ...props };

  return (
    <div>
      <div class="block bg-[#012E66] text-center w-full py-3">
        <Image
          width={100}
          class="relative object-fit mx-auto"
          src={logo.src}
          alt={logo.alt}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div class="bg-[#00A6CA] py-5 text-center">
        <p class="text-white text-[11px]">TODOS OS DIREITOS RESERVADOS CEDROM GARANTIDORA - CNPJ: 19.409.591/0001-83</p>
        <address class="text-white text-[8px] not-italic">Rua Araguari, nº 835, conjunto 301 - Sala 1, Vila Uberabinha, São Paulo, SP</address>
      </div>
    </div>
  );
}
