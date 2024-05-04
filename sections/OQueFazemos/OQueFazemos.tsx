import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImagemItem {
  src?: ImageWidget;
  alt?: string;
  label?: string;
}

export interface Itens {
  image?: ImagemItem;
  titleText?: string;
  /**
   * @format textarea
   */
  contentText?: string;
}

export interface Props {
  itens: Itens[];
}

export default function OQueFazemos({
  itens = [
    {
      image: {
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "",
        label: "",
      },
      titleText: "A Solução para Estabilidade Financeira do Seu Condomínio",
      contentText:
        "Você já imaginou proporcionar estabilidade financeira ao seu condomínio, garantindo uma gestão eficiente para o síndico? Apresentamos a Cedrom, a solução que transforma a administração condominial, eliminando preocupações com inadimplência.",
    },
    {
      image: {
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "",
        label: "",
      },
      titleText: "Elimine Preocupações com Inadimplência",
      contentText:
        "Uma garantidora de condomínio como a Cedrom assume a cobrança da taxa condominial, garantindo a receita mensal e eliminando os riscos jurídicos. O síndico passa a contar com uma gestão financeira estável, sem surpresas desagradáveis.",
    },
    {
      image: {
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "",
        label: "",
      },
      titleText: "Gestão Condominial Simplificada",
      contentText:
        "Ao contratar a Cedrom, a cobrança dos inadimplentes se torna responsabilidade da empresa, sem custos adicionais para o condomínio. O síndico ganha previsibilidade de caixa, possibilitando planejar obras e melhorias, sem impacto na taxa condominial.",
    },
    {
      image: {
        src:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416",
        alt: "",
        label: "",
      },
      titleText: "Receitas Mensais Garantidas",
      contentText:
        "Deseja garantir receitas mensais estáveis, eliminar gastos legais com cobranças e valorizar seu condomínio? Contratar a Cedrom é simples: uma análise de cadastro, proposta enviada, aprovação em assembleia e assinatura do contrato. Solicite agora uma simulação gratuita e transforme a gestão do seu condomínio com a Cedrom.",
    },
  ],
}: Props) {
  const ItensMap = itens.map((value, index) => {
    return (
      <div
        data-index={index}
        class="mb-[20px] last:mb-0 itens-fazer relative ml-[15px]"
      >
        <h3 class="text-[#012E66] text-[24px] font-bold">{value.titleText}</h3>
        <p class="text-[16px]">{value.contentText}</p>
      </div>
    );
  });

  return (
    <div class="flex items-center container justify-between max-[1020px]:flex-col">
      <Image
        src={itens[0].image?.src}
        width={521}
        height={526}
        alt={itens[0].image?.alt}
        label={itens[0].image?.label}
      />
      <div class="flex items-center flex-col w-10/12 ml-[35px] max-[1020px]:ml-0 max-[1020px]:mt-5">
        {ItensMap}
      </div>
    </div>
  );
}
