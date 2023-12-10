import { ButtonSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { formButtonCss } from "../forms/sub/props";
import Spinner from "../animations/Spinner";

export default function Button(props: ButtonSchema) {
  // Props
  const { title, handleAction, css, isFlag } = props;

  // Props variables
  const { customCss } = css!;

  const onClick = handleAction && handleAction;
  const className = customCss ?? formButtonCss;

  // Props
  const buttonProps = { onClick, className };

  return (
    <>
      {isFlag ? (
        <button {...{ className }}>
          <Spinner isFlag />
        </button>
      ) : (
        <button {...buttonProps}>{title}</button>
      )}
    </>
  );
}
