import { ButtonSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { addButtonCss } from ".";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function AddButton(props: ButtonSchema) {
  // Props
  const { title, handleAction, css } = props;

  // Props variables
  const { customCss, iconCss } = css!;

  const onClick = handleAction && handleAction;
  const iconClass = iconCss ?? "text-lg";
  const className = customCss ?? addButtonCss;

  // Props
  const buttonProps = { onClick, className };

  return (
    <button {...buttonProps}>
      <AiOutlinePlusSquare className={iconClass} />
      {title ?? "Add"}
    </button>
  );
}
