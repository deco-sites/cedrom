/**
 * @title {{{text}}}
 */
export interface ComoFunciona {
  /**
   * @title Número da etapa
   */
  number?: number;
  /**
   * @title Texto da etapa
   */
  text?: string;
}

export interface Props {
  title?: string;
  content?: ComoFunciona[];
}

const DEFAULT_PROPS = {
  content: [
    {
      number: 1,
      text: "Simulação do financiamento",
    },
    {
      number: 2,
      text: "Envio de documentaçãopreliminar",
    },
    {
      number: 3,
      text: "Análise de crédito",
    },
    {
      number: 4,
      text: "Aprovação do empréstimo em assembleia",
    },
    {
      number: 5,
      text: "Liberação do dinheiro para o condomínio",
    },
  ],
};

export default function ComoFunciona(props: Props) {
  const {
    content,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    content
      ? (
        <div class="bg-[#012E66] flex-wrap flex w-full py-[15px] my-[20px]">
          <h3 class="text-[30px] text-[#ffffff] w-full text-center font-[900] ">
            Como funciona na prática?
          </h3>
          <div class=" container grid grid-cols-[repeat(5,_1fr)] grid-rows-[1fr] gap-x-[0px] gap-y-[0px] w-full max-[1020px]:grid-cols-[1fr]">
            {content.map((item) => (
              <div class="flex items-center align-middle mx-auto ">
                <p class="bg-transparent text-transparent content-text-edit text-[80px] mr-[5px] font-bold">
                  {item?.number}
                </p>
                <span class="text-[#ffffff] w-[125px]">{item?.text}</span>
              </div>
            ))}
          </div>
        </div>
      )
      : ""
  );
}
