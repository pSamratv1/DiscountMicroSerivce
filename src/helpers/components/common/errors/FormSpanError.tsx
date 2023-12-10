import { FC } from "react";
import { CommonSchema } from "utils/schemas/GlobalSchema";

export const FormSpanError: FC<CommonSchema> = (props) => {
  // Props
  const { title, css } = props;

  // Props variables
  const { customCss } = css;

  // Css
  const defaultCss = "text-[10px] text-red-400 font-xs";
  const finalCss = customCss ?? defaultCss;

  return <span className={finalCss}>{title}</span>;
};
