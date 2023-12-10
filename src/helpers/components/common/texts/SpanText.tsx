import { CommonSchema } from "utils/schemas/GlobalSchema";

export default function SpanText(props: CommonSchema) {
  const { css, children } = props;

  // Props variables
  const { customCss } = css!;

  // CSS
  const finalCss = customCss ?? "";

  return <span className={finalCss}>{children}</span>;
}
