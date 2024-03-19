import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
  placement: "left" | "right";
  cta: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row relative",
};

export default function HeroFlats({
  title = "Hero",
  description = "Your description here",
  image,
  placement,
  cta,
}: Props) {
  return (
    <div class="mb-[20px] bg-transparent">
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:mx-auto mx-5 md:mx-10 z-10 relative ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full object-fit relative max-[1020px]:h-[400px] max-[1020px]:object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
            />
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-[47%] space-y-4 gap-4 absolute left-[5%] max-[1020px]:flex max-[1020px]:items-start max-[1020px]:flex-col max-[1020px]:bottom-[100px] ${
              image
                ? "lg:w-1/2 lg:max-w-[47%]"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block text-[60px] leading-[100%] font-[900] max-[1020px]:text-[20px]"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-[#ffffff] text-[16px] md:text-[18px] leading-[150%] font-[300] max-[1020px]:text-[12px]">
              {description}
            </p>
            <div class="flex flex-col items-center lg:items-start lg:flex-row gap-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`group relative overflow-hidden rounded-[5px] bg-[#00A6CA] hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out ${
                    item.variant === "Reverse"
                      ? "bg-[#00A6CA] text-white"
                      : "bg-[#00A6CA] text-white"
                  }`}
                >
                  <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
                  </span>
                  <span class="relative font-medium lg:text-[20px]">
                    {item?.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
