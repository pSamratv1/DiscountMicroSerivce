/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  emailValidation,
  nameValidation,
  numberValidation,
} from "utils/validations/yupValidations";
import * as yup from "yup";

// Subscriptions List
export const subscriptions = [
  "Staff Management",
  "Discount Card Management",
  "Inventory Management",
  "Order Management",
  "Product Management",
  "Schedule Management",
  "Supply Chain Management",
];

// Form validation
export const AddRoleFormOneValidation = yup
  .object({
    // login_password: passwordValidation,
    title: nameValidation,
    first_name: nameValidation,
    last_name: nameValidation,
    email: emailValidation,
    contact_number: numberValidation,
  })
  .required();

// Props for inputs
export const zIndexProp = "z-50";
export const commonCss = {
  css: {
    divCss:
      "relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100",
    checkboxCss: "w-[16px] h-[16px]",
    labelCss: "",
    inputCss: "w-full h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
    errorCss: "absolute top-[64px] text-red-400 text-[11px] leading-tight",
  },
};
const actions = {
  handleClick: null,
  handleKeyUp: null,
  handleKeyDown: null,
  handleOnChange: null,
};

export const nameProps = (form: any, restCommon?: any, restActions?: any) => ({
  common: {
    input: "name",
    label: "Name",
    placeholder: "Manager",
    ...restCommon,
  },
  actions: restActions ? { ...restActions } : { ...actions },
  form,
  ...commonCss,
});

export const adminCheckbox = (
  form: any,
  restCommon?: any,
  restActions?: any
) => ({
  common: {
    input: "admin_checkbox",
    label: "Admin",
    // placeholder: "",
    ...restCommon,
  },
  actions: restActions ? { ...restActions } : { ...actions },
  form,
  css: {
    ...commonCss.css,
    divCss:
      "relative h-[50px] pt-1 flex gap-5 items-center gap-1 text-[11px] text-dark-100 font-bold",
  },
});

export const roleCheckbox = (
  form: any,
  input: any,
  label: any,
  restActions?: any
) => ({
  common: { input, label, zIndexProp },
  actions: restActions ?? actions,
  form,
  css: {
    ...commonCss.css,
    divCss:
      "relative h-[45px] pt-1 flex gap-1.5 items-center gap-1 text-[11px] text-dark-100",
    labelCss: "order-1",
  },
});

// export const read

export const contactCodeProps = (
  form: any,
  restCommon?: any,
  restActions?: any
) => ({
  common: {
    input: "contact_code",
    label: "Contact Number",
    placeholder: "+977",
    ...restCommon,
  },
  actions: restActions ? { ...restActions } : { ...actions },
  form,
  options: [
    { label: "+977", value: "+977" },
    { label: "+49", value: "+49" },
    { label: "+31", value: "+31" },
    { label: "+1", value: "+1" },
    { label: "+33", value: "+33" },
  ],
  ...commonCss,
  css: {
    ...commonCss.css,
    divCss:
      "relative pt-1 flex flex-col gap-1 justify-center text-sm text-xs text-dark-100",
    inputCss:
      "w-[6rem] max-w-[6rem] h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
  },
});

export const roleProps = (form: any, restCommon?: any, restActions?: any) => ({
  common: {
    input: "role",
    label: "Role",
    // placeholder: "business",
    ...restCommon,
    ...restCommon,
  },
  actions: restActions ? { ...restActions } : { ...actions },
  form,
  options: [
    { label: "Driver", value: "driver" },
    { label: "Chef", value: "chef" },
    { label: "Pilot", value: "pilot" },
    { label: "Manager", value: "manager" },
    { label: "Doctor", value: "doctor" },
  ],
  css: {
    ...commonCss.css,
    divCss:
      "relative pt-1 h-[75px] flex flex-col gap-1 justify-center text-sm text-xs text-dark-100",
    inputCss: "h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
  },
});

export const addBtnProps = {
  title: "Save",
  css: {
    customCss:
      "w-[6rem] px-3 py-1.5 flex gap-1 justify-center items-center text-primary-more hover:bg-primary-dark hover:text-white border-[1px] border-primary-medium font-medium text-[11px] rounded-sm",
  },
};
