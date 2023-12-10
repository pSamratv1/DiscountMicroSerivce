import { ButtonSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { tagButtonCss } from ".";

export default function TagsButton(props: ButtonSchema) {
  // Props
  const { title, css } = props;

  // Props variables
  const { customCss } = css!;

  const className = customCss ?? tagButtonCss;

  // Props
  const buttonProps = { className };

  return (
    <div className="max-w-full">
      <button {...buttonProps}>{title}</button>
    </div>
  );
}
