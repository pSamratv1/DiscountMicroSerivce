import Button from "../buttons/Button";
import { AuthFormContainerSchema } from "utils/schemas/helpers/components/ComponentSchema";

export default function AuthFormContainer(props: AuthFormContainerSchema) {
  // Props
  const { children, src, title, handleAction, buttonName, isFlag, other } =
    props;

  // Button Props
  const btnProps = { title: buttonName, handleAction, css: {}, isFlag };

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center bg-white">
      <div className="w-3/4 h-full flex flex-col gap-1 justify-center items-center">
        <h2 className="inter font-bold text-2xl w-3/4 h-[60px]">{title}</h2>
        {children}
        <div className="w-3/4 h-[3rem] mt-5">
          <Button {...btnProps} />
        </div>
        {other && (
          <div className="w-3/4 h-[3rem] flex justify-center items-center">
            {other}
          </div>
        )}
      </div>
      <div className="w-full h-screen hidden lg:flex">
        <img src={src} alt={src} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
