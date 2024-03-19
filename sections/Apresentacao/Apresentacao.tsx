import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  text: HTMLWidget;
  containerWidth?: number;
}

const DEFAULT_TEXT =
  '<h2>O que é uma garantidora de condomínio?</h2> <p>Uma <strong>Cedrom</strong> é uma empresa que assume a cobrança da taxa condominial e repassa ao condomínio o valor das taxas pagas e não pagas pelos condôminos. <br/>A cobrança dos atrasados é feita diretamente pela Cedrom, eliminando os custos e os riscos jurídicos para a condomínio. Com a receita garantida, o Síndico tem a certeza do valor que irá entrar na conta do condomínio, sem risco de falta de caixa devido a inadimplência.</p>';

export default function RichText(
  { text = DEFAULT_TEXT, containerWidth }: Props,
) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      style={{
        maxWidth: containerWidth ? containerWidth : 1000,
        margin: "70px auto",
      }}
      class="text-apresentation max-[1020px]:w-[90%] max-[1020px]:mx-auto"
    >
    </div>
  );
}
