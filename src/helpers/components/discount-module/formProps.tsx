/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { setDiscountType } from "redux-app/discount-module/DiscountSlice";
import {
  nameValidation,
  numberValidation,
  percentageValidation,
  selectValidation,
  discountDateValidation,
  discountEndDateValidation,
  discountTimeValidation,
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

// Product Data
export const productData = {
  colddrinks: ["Pepsi", "Fanta", "Sprite", "Coke"],
  food: ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"],
  icecream: [
    "Vanilla",
    "Chocolate",
    "Cookies and cream",
    "Strawberry",
    "Mint chocolate chip",
    "Butter pecan",
    "Chocolate chip cookie dough ice cream",
    "Chocolate chip",
    "Chocolate ice cream",
  ],
};

export const AddDiscountFormValidation = (activeType: boolean) => {
  let validationSchema;
  if (!activeType) {
    validationSchema = yup.object({
      discount_card_name: nameValidation,
      discount_type_percentage: percentageValidation,
      start_date: discountDateValidation,
      end_date: discountEndDateValidation,
      start_time: discountTimeValidation,
      end_time: discountTimeValidation,
      product_type: selectValidation,
      product_list: selectValidation,
    });
  } else {
    validationSchema = yup.object({
      discount_card_name: nameValidation,
      discount_type_value: numberValidation,
      start_date: discountDateValidation,
      end_date: discountEndDateValidation,
      start_time: discountTimeValidation,
      end_time: discountTimeValidation,
      product_type: selectValidation,
      product_list: selectValidation,
    });
  }

  return validationSchema;
  // return yup.object({});
};

// Props for inputs
export const zIndexProp = "z-50";
export const commonCss = {
    css: {
      divCss:
        "relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12",
      checkboxCss: "w-[16px] h-[16px]",
      labelCss: "",
      inputCss:
        "w-full h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
      errorCss: "absolute top-[64px] text-red-400 text-[11px] leading-tight",
    },
  },
  commonActions = {
    handleClick: null,
    handleKeyUp: null,
    handleKeyDown: null,
    handleOnChange: null,
  };

export const nameProps = ({ defaultValue }: any) => ({
  input: "discount_card_name",
  label: "Dicount Card Name",
  placeholder: "New Year Offer",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const typeProps = ({ defaultValue }: any) => ({
  input: "discount_type",
  label: "Discount Type",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const valueProps = ({ defaultValue }: any) => ({
  input: "discount_type_value",
  label: "Discount Value",
  placeholder: "Enter in Amount.",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const percentageValueProps = ({ defaultValue }: any) => ({
  input: "discount_type_percentage",
  label: "Discount Percentage",
  placeholder: "Enter in Percentage",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const dateStartProps = ({ defaultValue }: any) => ({
  input: "start_date",
  label: "Select Start Date",
  placeholder: "Today's Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const dateEndProps = ({ defaultValue }: any) => ({
  input: "end_date",
  label: "Select End Date",
  placeholder: "Today's Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const timeStartProps = ({ defaultValue }: any) => ({
  input: "start_time",
  label: "Select Start Time",
  placeholder: "00",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const timeEndProps = ({ defaultValue }: any) => ({
  input: "end_time",
  label: "Select End Time",
  placeholder: "00",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

// export const selectInputbox = ({
//   form,
//   restCommon,
//   discount_type,
//   handleOnChange,
// }: // setDiscountType,
// any) => ({
//   common: {
//     input: "discount_type",
//     label: "Discount Type",
//     showImportant: true,
//     defaultValue: discount_type.label,
//     ...restCommon,
//   },
//   options: ,
//   // actions: restActions ? { ...restActions } : { ...actions },
//   actions: {
//     ...commonActions,
//     handleOnChange,
//   },
//   form,
//   css: {
//     ...commonCss.css,
//     divCss:
//       " relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 max-w-[190px]  ",
//   },
// });

export const selectProductTypebox = ({ defaultValue }: any) => ({
  common: {
    input: "product_type",
    label: "Product Type",
    showImportant: true,
    defaultValue: defaultValue ?? "",
  },
});

// " relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 max-w-[190px]  ",
export const selectProductListbox = ({ defaultValue }: any) => ({
  input: "product_list",
  label: "Product List",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const roleCheckbox = (
  form: any,
  input: any,
  label: any,
  restActions?: any
) => ({
  common: { input, label, zIndexProp },
  actions: restActions ?? { ...commonActions },
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
  actions: restActions ? { ...restActions } : { ...commonActions },
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
  actions: restActions ? { ...restActions } : { ...commonActions },
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
