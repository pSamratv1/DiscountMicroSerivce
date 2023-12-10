/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsFilter } from "react-icons/bs";

export default function FilterButton(props: any) {
  // Props
  const { css, ...rest } = props;

  const { divCss, iconCss } = css;

  // Div Css
  const finalDivCss = divCss ?? "text-lg";

  // Icon Props
  const defaultIconCss = "";
  const iconProps = { className: iconCss ?? defaultIconCss, ...rest };

  return (
    <div className={finalDivCss}>
      <BsFilter {...iconProps} />
    </div>
  );
}
