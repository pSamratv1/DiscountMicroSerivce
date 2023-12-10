import { CommonSchema } from "utils/schemas/GlobalSchema";

export default function ActiveStatus(props: CommonSchema) {
  const { css, title, flag } = props;

  // Props variables
  const { divCss } = css!;

  // CSS
  const finalDivCss = divCss ?? "flex items-center gap-1";
  const flagCss = flag === "success" ? "bg-success-normal" : "bg-red-400";
  const finalFlagCss = `${flagCss} w-1.5 h-1.5 rounded-full`;

  return (
    <div className={finalDivCss}>
      <span className={finalFlagCss}></span>
      <span>{title}</span>
    </div>
  );
}
