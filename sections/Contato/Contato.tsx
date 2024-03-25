import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Logo {
  src: ImageWidget;
  alt?: string;
}

export interface LogoLinkedIn {
  src: ImageWidget;
  alt?: string;
  text?: string;
  url_link?: string;
}

export interface LogoInstagram {
  src: ImageWidget;
  alt?: string;
  text?: string;
  url_link?: string;
}

export interface Props {
  logo: Logo;
  logoLinkedIn: LogoLinkedIn;
  logoInstagram: LogoInstagram;
  firstPhoneContact: string;
  secondPhoneContact: string;
}

const DEFAULT_PROPS = {
  logo: {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
    alt: "Cedrom",
  },
  logoLinkedIn: {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
    alt: "Logo LinkedIn",
    text: "Cedrom",
    url_link: "https://www.instagram.com/cedromoveissc401/",
  },
  logoInstagram: {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
    alt: "Logo LinkedIn",
    text: "cedrom",
    url_link: "https://www.instagram.com/cedromoveissc401/",
  },
  firstPhoneContact: "999999999",
  secondPhoneContact: "999999999",
};

export default function Contato(props: Props) {
  const {
    logo,
    logoLinkedIn,
    logoInstagram,
    firstPhoneContact,
    secondPhoneContact,
  } = { ...DEFAULT_PROPS, ...props };

  const firstNumberContact = `tel:+5511${firstPhoneContact}`;
  const secondNumberContact = `tel:+5511${secondPhoneContact}`;

  return (
    <div class="bg-[#012E66] flex items-center justify-between pt-14 flex-col" id="contato">
      <div class="flex flex-col max-w-[600px] container">
        <h3 class="text-[32px] text-white w-full font-bold mb-3 max-[1020px]:w-[90%] max-[1020px]:mx-auto text-center">
          Solicite uma simulação gratuita
        </h3>
        <div
          class="max-[1020px]:w-full respondi-input"
          data-respondi-container=""
          data-respondi-mode="regular"
          data-respondi-src="https://form.respondi.app/qVTZe501"
          data-respondi-width="600px"
          data-respondi-height="400px"
        >
        </div>
      </div>
      <div class="flex flex-col w-full items-center">
        <div class="py-6">
          <div class="flex items-center mb-6">
            <h4 class="text-[20px] text-white font-bold mr-6 block">
              Redes<br />Sociais
            </h4>
            <ul>
              <li class="flex items-center">
                <a
                  class="text-white flex items-center cursor-pointer"
                  href={logoLinkedIn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={15}
                    height={15}
                    src={logoLinkedIn.src}
                    alt={logoLinkedIn.alt}
                    decoding="async"
                    loading="lazy"
                    class="block mr-[5px]"
                  />
                  {logoLinkedIn.text}
                </a>
              </li>
              <li class="flex items-center">
                <a
                  class="text-white flex items-center cursor-pointer"
                  href={logoInstagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={15}
                    height={15}
                    src={logoInstagram.src}
                    alt={logoInstagram.alt}
                    decoding="async"
                    loading="lazy"
                    class="block mr-[5px]"
                  />
                  {logoInstagram.text}
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center">
            <h4 class="text-[20px] text-white font-bold mr-6 block">Contato</h4>
            <ul class="block leading-6">
              <li class="block mb-1">
                <a class="text-white" href={firstNumberContact}>
                  (11) {firstPhoneContact}
                </a>
              </li>
              <li>
                <a class="text-white" href={secondNumberContact}>
                  (11) {secondPhoneContact}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
