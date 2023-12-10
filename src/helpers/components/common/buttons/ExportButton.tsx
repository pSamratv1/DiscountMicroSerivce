/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDotsVertical } from "react-icons/bs";
import { CssSchema, HandleActionSchema } from "utils/schemas/GlobalSchema";

export interface ExportButtonSchema extends CssSchema, HandleActionSchema {}

export default function ExportButton(props: ExportButtonSchema) {
  // Props
  const { css, handleAction } = props;

  const { divCss, iconCss } = css;

  // Div Css
  const finalDivCss = divCss ?? "text-xs";

  // Actions
  const handleExportClick = () => {
    handleAction && handleAction;
  };

  // Icon Props
  const defaultIconCss = "";
  const iconProps = {
    className: iconCss ?? defaultIconCss,
    onClick: handleExportClick,
  };

  return (
    <div className={finalDivCss}>
      <BsThreeDotsVertical {...iconProps} />
    </div>
  );
}
