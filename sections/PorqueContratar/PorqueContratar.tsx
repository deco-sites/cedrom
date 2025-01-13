export interface ContentText {
  text?: string;
}

export interface Props {
  title?: string;
  itens?: ContentText[];
}

export default function PorqueContratar({
  title = "Por que contratar a Cedrom?",
  itens = [
    {
      text: "Receita mensal garantida e previsível",
    },
    {
      text: "Eliminação dos gastos legais relacionados às cobranças",
    },
    {
      text:
        "Segurança que os serviços e obras não serão interrompidos por falta de caixa",
    },
    {
      text: "Fluxo de caixa previsível para planejar obras e melhorias",
    },
    {
      text:
        "Taxa de condomínio estável e previsível: não haverá aumento para cobrir a inadimplência",
    },
    {
      text: "Condomínio com caixa saudável e valorização dos imóveis",
    },
  ],
}: Props) {
  const ItensReturn = itens.map((value) => {
    return (
      <div class="bg-[#00A6CA] flex justify-center items-center py-[50px] px-[70px] rounded-[6px] max-[1020px]:w-11/12 max-[1020px]:py-[60px] max-[1020px]:px-[80px]">
        <p class="text-[25px] text-white text-center font-semibold max-[1020px]:text-[20px]">
          {value?.text}
        </p>
      </div>
    );
  });

  return (
    <div
      class="flex flex-wrap container justify-center my-[40px]"
      id="vantagens"
    >
      <h2 class="w-full text-center text-[#012E66] font-bold text-[40px] block mb-[20px] max-[1020px]:text-[25px]">
        {title}
      </h2>
      <div class="grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[10px] gap-y-[10px] max-[1020px]:grid-cols-[1fr] max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:items-center">
        {ItensReturn}
      </div>
      <div class="my-5 w-full">
        <h2 class="my-2 font-bold text-3xl block text-center py-2 text-[#012E66]">
          Solicitar 2ª via de boleto
        </h2>
        {
          /* <div data-tf-live="01JCPXD2VNEJQWEYV8BB37C7VJ" class="w-full"></div>
        <script src="//embed.typeform.com/next/embed.js"></script> */
        }
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe0MhJ3cBLbfdS8gYSOIjo_1j3OsX1PfdTlz63ig_w4Zmm6dQ/viewform?embedded=true"
          class="w-full"
          height="1552"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Carregando…
        </iframe>
      </div>
    </div>
  );
}
