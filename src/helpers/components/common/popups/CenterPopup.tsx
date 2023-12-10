import { middleCss } from "assets/common/css/global";
import CardPopup from "./CardPopup";
import { ChildrenSchema } from "utils/schemas/GlobalSchema";

export default function CenterPopup(props: ChildrenSchema) {
  return (
    <CardPopup
      popupArea={props.children}
      css={{
        divCss: "z-100 absolute top-0 left-0 w-screen min-h-screen bg-black/90",
        customCss: middleCss,
      }}
    />
  );
}
