import { DiscountCardSchema } from "utils/schemas/helpers/components/ComponentSchema";

const Cards = (props: DiscountCardSchema) => {
  const { css, title, icon, label, color } = props;

  const { customCss } = css;

  // Custom Props
  const defaultCss =
    "w-[250px] h-[8rem] grid grid-rows-6 p-4 cursor-pointer shadow-discount-card bg-backgroungColor-discountcard rounded-lg gap-6";
  const combinedCss = customCss ?? defaultCss;

  return (
    <div className={combinedCss}>
      <div className=" row-span-2 h-[2rem] justify-between flex text-[10px] gap-2 overflow-hidden">
        <span className="text-[17px] font-bold text-new-black-500">
          {title}
        </span>
        <div className={color}>
          <img className="h-5 w-6" src={icon} alt="#" />
        </div>
      </div>
      <div className="row-span-4 w-full max-h-[2rem] md:max-h-[3rem] text-3xl md:text-5xl font-bold text-new-black-600">
        {label}
      </div>
    </div>
  );
};

export default Cards;
