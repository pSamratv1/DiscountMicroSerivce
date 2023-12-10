import { AiOutlineClose } from "react-icons/ai";
import { CssSchema, HandleActionSchema } from "utils/schemas/GlobalSchema";

export interface CloseIconButtonSchema extends CssSchema, HandleActionSchema {}

export default function CloseIconButton(props: CloseIconButtonSchema) {
  // Props
  const { css, handleAction } = props;

  // Icon Css
  const { iconCss } = css;

  const defaultCss =
    "absolute top-4 right-4 text-lg text-danger-normal/70 hover:text-danger-normal";
  const finalIconCss = iconCss ?? defaultCss;

  return <AiOutlineClose className={finalIconCss} onClick={handleAction} />;
}
