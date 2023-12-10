/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FormSpanError } from "../errors/FormSpanError";
import { getFormErrorMsg } from "utils/methods/formMethods";
import {
  formDivCss,
  formLabelCss,
  formInputCss,
  formDivIconCss,
  formErrorCss,
} from "./sub/props";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PasswordInput(props: InputSchema) {
  // Props
  const { common, actions, form, css } = props;

  // Props variables
  const { input, label, defaultValue, placeholder, showForgotPassword } =
    common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { divCss, labelCss, inputCss, errorCss, iconCss } = css!;

  // States
  const [show, setShow] = useState<boolean>(false);

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Final css
  const finalDivCss = divCss ?? formDivCss;
  const finalIconCss = iconCss ?? formDivIconCss;
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;

  // Error Props
  // const labelErrorProps = { css: {}, title: "*" };
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };

  return (
    <div className={finalDivCss}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label}
          {showForgotPassword && (
            <Link to="/forgot-password">
              <span className="text-new-blue-700">Forgot Password?</span>
            </Link>
          )}
        </label>
      )}

      <div className={finalIconCss}>
        {!show && <HiMiniEyeSlash onClick={() => setShow(true)} />}
        {show && <HiMiniEye onClick={() => setShow(false)} />}
      </div>

      <input
        id={input}
        {...register(input)}
        className={`${finalInputCss} ${border}`}
        type={show ? "text" : "password"}
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
