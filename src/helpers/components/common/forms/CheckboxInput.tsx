/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FormSpanError } from "../errors/FormSpanError";
import { getFormErrorMsg } from "utils/methods/formMethods";
import {
  formCboxDivCss,
  formCboxInputCss,
  formCboxLabelCss,
} from "./sub/props";

export default function CheckboxInput(props: InputSchema) {
  // Props
  const { common, actions, form, css } = props;

  // Props variables
  const { input, label, defaultValue, placeholder } = common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { divCss, labelCss, checkboxCss } = css!;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const finalDivCss = divCss ?? formCboxDivCss;
  const finalLabelCss = labelCss ?? formCboxLabelCss;
  const finalInputCss = checkboxCss ?? formCboxInputCss;

  // Error Props
  const labelErrorProps = { css: {}, title: "*" };
  const errorProps = { css: {}, title: errorMsg };

  return (
    <div className={finalDivCss}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label} {errorMsg && <FormSpanError {...labelErrorProps} />}
        </label>
      )}
      <input
        id={input}
        {...register(input)}
        className={finalInputCss}
        type="checkbox"
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
