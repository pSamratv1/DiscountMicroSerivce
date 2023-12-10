import { ButtonSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FiEdit } from "react-icons/fi";
import { editButtonCss } from ".";

export default function EditButton(props: ButtonSchema) {
  // Props
  const { title, handleAction, css, icon } = props;

  // Props variables
  const { customCss } = css!;

  const onClick = handleAction && handleAction;
  const className = customCss ?? editButtonCss;

  // Props
  const buttonProps = { onClick, className };

  return (
    <button {...buttonProps}>
      {icon ?? <FiEdit />}
      {title ?? "Edit"}
    </button>
  );
}
