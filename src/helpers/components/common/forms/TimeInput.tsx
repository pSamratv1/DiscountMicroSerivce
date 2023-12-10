/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputSchema } from "utils/schemas/helpers/components/ComponentSchema";
import { FormSpanError } from "../errors/FormSpanError";
import { getFormErrorMsg } from "utils/methods/formMethods";
import {
  formErrorCss,
  formInputCss,
  formLabelCss,
  formOptionCss,
} from "./sub/props";
import { useForm } from "react-hook-form";

export default function TimeInput(props: InputSchema) {
  // Props
  const { common, actions, form, css } = props;

  // Props variables
  const { input, label, defaultValue, placeholder, showImportant, icon } =
    common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown } = actions!;
  const { labelCss, inputCss, errorCss } = css;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  const timeString = defaultValue;

  // Split the time string
  const [time] = timeString.split(" ");
  const [hours, minutes] = time.split(":");
  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Final Css
  const finalDivCss =
    "relative w-full h-[65px] flex flex-col text-sm font-text-100 px-2";
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;
  const finalOptionCss = "p-8" ?? formOptionCss;

  // React Form Hooks
  const { setValue } = useForm();

  // Error Props
  // const labelErrorProps = { css: {}, title: "*" };
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };

  const handleHoursChange = (e: any) => {
    const inputValue = e.target.value;

    // Check if the input is a valid two-digit number
    if (/^\d{0,2}$/.test(inputValue)) {
      setValue(`${input}-hours`, inputValue);
    }
  };

  const handleMinChange = (e: any) => {
    const inputValue = e.target.value;

    // Check if the input is a valid two-digit number
    if (/^\d{0,2}$/.test(inputValue)) {
      setValue(`${input}-minutes`, inputValue); // Set the value for the minutes input
    }
  };
  const period = (hours: any) => {
    return hours >= 12 ? "PM" : "AM";
  };
  const timeperiod = period(hours);
  const options = ["AM", "PM"];

  return (
    <div className={`${finalDivCss}`}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label} {showImportant && <span className="text-red-400">*</span>}
          {/* {errorMsg && <FormSpanError {...labelErrorProps} />} */}
        </label>
      )}
      {icon && icon}
      <div className="flex items-center gap-1">
        <input
          id={input}
          {...register(`${input}_hours`, {
            required: true,
            min: 0,
            max: 24,
          })}
          className={`${finalInputCss} ${border} my-1 pl-3`}
          type="text"
          placeholder={placeholder}
          key={`${input}_hours`}
          defaultValue={hours ?? ""}
          onClick={handleClick}
          onChange={handleHoursChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        />
        <span>:</span>
        <input
          id={input}
          {...register(`${input}_minutes`, {
            required: true,
            min: 0,
            max: 59,
          })}
          className={`${finalInputCss} ${border}`}
          type="text"
          placeholder={placeholder}
          key={`${input}_minutes`}
          defaultValue={minutes ?? ""}
          onClick={handleClick}
          onChange={handleMinChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        />

        <select
          id={input}
          {...register(`${input}_timeperiod`, {
            required: true,
            min: 0,
            max: 59,
          })}
          className={`${finalInputCss} ${border} my-1`}
          type="text"
          placeholder={placeholder}
          key={`${input}_timeperiod`}
          defaultValue={timeperiod ?? ""}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        >
          {options?.map((item: any, idx: number) => (
            <option
              key={`${idx}. ${item}`}
              value={item}
              className={finalOptionCss}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
