import { ButtonSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { IoMdArrowBack } from "react-icons/io";
import { commonButtonCss } from ".";

export default function GoBackButton(props: ButtonSchema) {
  // Props
  const { title, handleAction, css, icon } = props;

  // Props variables
  const { customCss } = css!;

  const onClick = handleAction && handleAction;
  const className = customCss ?? commonButtonCss;

  // Props
  const buttonProps = { onClick, className };

  return (
    <button {...buttonProps}>
      {icon ?? <IoMdArrowBack className="text-sm" />}
      {title ?? "Go Back"}
    </button>
  );
}
