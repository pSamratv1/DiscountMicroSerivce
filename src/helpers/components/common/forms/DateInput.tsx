/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FormSpanError } from "../errors/FormSpanError";
import { getFormErrorMsg } from "utils/methods/formMethods";
import { formErrorCss, formInputCss, formLabelCss } from "./sub/props";

export default function DateInput(props: InputSchema) {
  // Props
  const { common, actions, form, css } = props;

  // Props variables
  const { input, label, defaultValue, placeholder, showImportant, icon } =
    common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { labelCss, inputCss, errorCss } = css;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Final Css
  const finalDivCss = "relative w-full h-[65px] flex flex-col text-xs ";
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;

  // Error Props
  // const labelErrorProps = { css: {}, title: "*" };
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };

  return (
    <div className={`${finalDivCss} px-2`}>
      {label && (
        <label className={`${finalLabelCss}`} htmlFor={input}>
          {label} {showImportant && <span className="text-red-400">*</span>}
          {/* {errorMsg && <FormSpanError {...labelErrorProps} />} */}
        </label>
      )}
      {icon && icon}
      <input
        id={input}
        {...(register && register(input))}
        className={`${finalInputCss} ${border} my-1`}
        type="date"
        placeholder={placeholder}
        key={input}
        defaultValue={defaultValue ?? ""}
        onClick={handleClick}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
