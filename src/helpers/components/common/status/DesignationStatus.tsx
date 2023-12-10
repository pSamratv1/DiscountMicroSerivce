import { CommonSchema } from "utils/schemas/GlobalSchema";

export default function DesignationStatus(props: CommonSchema) {
  const { css, title } = props;

  // Props variables
  const { divCss } = css!;

  // CSS
  const finalDivCss = divCss ?? "flex items-center gap-1";
  const statusCss =
    title === "Manager"
      ? "font-medium text-white bg-tags-manager pl-2.5 pr-1.5 py-1 rounded-sm"
      : "bg-red-400";
  const finalStatusCss = `${statusCss}`;

  return (
    <div className={finalDivCss}>
      <span className={finalStatusCss}>{title?.charAt(0).toUpperCase()}</span>
      <span>{title}</span>
    </div>
  );
}
