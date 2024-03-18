import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Logo {
    src: ImageWidget
    alt?: string
}

export interface LogoLinkedIn {
    src: ImageWidget
    alt?: string
    text?: string
    url_link?: string
}

export interface LogoInstagram {
    src: ImageWidget
    alt?: string
    text?: string
    url_link?: string
}

export interface Props {
    logo: Logo
    logoLinkedIn: LogoLinkedIn
    logoInstagram: LogoInstagram
    firstPhoneContact: string
    secondPhoneContact: string
}

const DEFAULT_PROPS = {
    logo: {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "Cedrom"
    },
    logoLinkedIn: {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "Logo LinkedIn",
        text: "Cedrom",
        url_link: "https://www.instagram.com/cedromoveissc401/"
    },
    logoInstagram: {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "Logo LinkedIn",
        text: "cedrom",
        url_link: "https://www.instagram.com/cedromoveissc401/"
    },
    firstPhoneContact: "999999999",
    secondPhoneContact: "999999999"
}

export default function Contato(props: Props) {

    const {
        logo,
        logoLinkedIn,
        logoInstagram,
        firstPhoneContact,
        secondPhoneContact
    } = { ...DEFAULT_PROPS, ...props }

    const firstNumberContact = `tel:+5511${firstPhoneContact}`
    const secondNumberContact = `tel:+5511${secondPhoneContact}`

    console.log('logoInstagram', logoInstagram)

    return (
        <div class="bg-[#012E66] flex items-center justify-between py-14">
            <div class="flex flex-col max-w-[600px] container">
                <h3 class="text-[32px] text-white w-[60%] font-bold">Solicite uma simulação gratuita</h3>
                <form class="flex flex-wrap justify-start">
                    <input class="w-[47%] mr-8 p-4 rounded-[6px] mb-[10px]" placeholder="Primeiro Nome" type="text" name="" id="" required/>
                    <input class="w-[47%] p-4 rounded-[6px] mb-[10px]" placeholder="Último Nome" type="text" name="" id="" required/>
                    <input class="w-[47%] mr-8 p-4 rounded-[6px] mb-[10px]" placeholder="E-mail" type="email" name="" id="" required/>
                    <input class="w-[47%] p-4 rounded-[6px] mb-[10px]" placeholder="Nome do condomínio" type="text" name="" id="" required/>
                    <textarea class="w-full p-4 rounded-[6px] mb-[10px]" placeholder="Escreva sua mensagem aqui" name="" id="" cols="30" rows="10"></textarea>
                    <input class="w-1/2 bg-[#00A6CA] text-white uppercase px-4 py-2 rounded-[6px] cursor-pointer" type="submit" value="Solicitar" />
                </form>
            </div>
            <div class="flex flex-col bg-[#00A6CA] w-[40%] rounded-tl-[6px] rounded-bl-[6px]">
                <div class="ml-[15%] py-12">
                    <div class="block w-[110px] ml-[10%] mb-6">
                        <Image 
                            width={100}
                            class="relative object-fit w-full"
                            src={logo.src}
                            alt={logo.alt}
                            decoding="async"
                            loading="lazy"
                        />
                    </div>
                    <div class="flex items-center mb-6">
                        <h4 class="text-[20px] text-white font-bold mr-6 block">Redes Sociais</h4>
                        <ul>
                            <li class="flex items-center">
                                <a class="text-white flex items-center cursor-pointer" href={logoLinkedIn.link} target="_blank" rel="noopener noreferrer">
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
                                <a class="text-white flex items-center cursor-pointer" href={logoInstagram.link} target="_blank" rel="noopener noreferrer">
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
                                <a class="text-white" href={firstNumberContact}>(11) {firstPhoneContact}</a>
                            </li>
                            <li>
                                <a class="text-white" href={secondNumberContact}>(11) {secondPhoneContact}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}