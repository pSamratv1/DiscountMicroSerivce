/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectInputSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FormSpanError } from "../errors/FormSpanError";
import { getFormErrorMsg } from "utils/methods/formMethods";
import {
  formDivCss,
  formErrorCss,
  formInputCss,
  formLabelCss,
  formOptionCss,
} from "./sub/props";

export default function SelectInput(props: SelectInputSchema) {
  // Props
  const { common, actions, form, css, options } = props;

  // Props variables
  const { input, label, defaultValue, placeholder, showImportant } = common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { divCss, labelCss, inputCss, errorCss, optionCss } = css!;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const finalDivCss = divCss ?? formDivCss;
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;
  const finalOptionCss = optionCss ?? formOptionCss;

  // Error Props
  // const labelErrorProps = { css: {}, title: "*" };
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };
  return (
    <div className={`${finalDivCss}`}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label} {showImportant && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        id={input}
        {...register(input)}
        className={finalInputCss + "[&>*]:p-8 "}
        type="text"
        placeholder={placeholder}
        key={input}
        defaultValue={defaultValue || ""}
        onClick={handleClick}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      >
        {/* {options?.map((item: any, idx: number) => {
          return (
            defaultValue !== item.value && (
              <option
                key={`${idx}. ${item.value}`}
                value={item.value}
                className={finalOptionCss}
              >
                {item.label}
              </option>
            )
          );
        })} */}
        {options?.map((item: any, idx: number) => (
          <option
            key={`${idx}. ${item.value}`}
            value={item.value}
            className={finalOptionCss}
          >
            {item.label}
          </option>
        ))}
      </select>
      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
