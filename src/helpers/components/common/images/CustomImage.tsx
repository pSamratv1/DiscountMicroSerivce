import { CustomImageProps } from "utils/schemas/helpers/components/ComponentSchema";

export default function CustomImage(props: CustomImageProps) {
  // Props
  const { src, alt, css } = props;

  // Props variables
  const { divCss, imgCss } = css!;

  return (
    <div className={`${divCss ?? "w-full h-full"}`}>
      <img
        src={src}
        alt={alt}
        className={`${imgCss ?? ""} w-full h-full object-cover`}
      />
    </div>
  );
}
