import { ChildrenSchema, CssSchema } from "utils/schemas/GlobalSchema";

export interface CenterSectionSchema extends ChildrenSchema, CssSchema {}

export default function CenterSection(props: CenterSectionSchema) {
  // Props
  const { children, css } = props;

  // Css
  const { customCss, colorCss } = css;

  //
  const color = colorCss ?? "bg-black/50";
  const defaultCss = `${color} absolute top-0 left-0 w-screen min-h-screen`;
  const finalCss = customCss ?? defaultCss;

  return (
    <div className={finalCss}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
