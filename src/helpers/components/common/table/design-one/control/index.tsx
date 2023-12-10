import { FiSearch } from "react-icons/fi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const commonCss = {
  css: {
    divCss:
      "relative sm:min-w-[17rem] min-w-[14rem] h-[2rem] flex flex-col items-center gap-1 text-[11px] text-dark-100",
    labelCss: "formLabelCss",
    inputCss: "w-full h-full px-4 rounded-md bg-light-100 border-0",
  },
  errorCss: "formErrorCss",
};

export const controlBarSearch: any = {
  common: {
    input: "control_bar_search",
    label: "",
    placeholder: "Search here..",
    icon: (
      <FiSearch className="absolute left-1.5 h-full flex items-center text-primary-lighter text-[1rem]" />
    ),
    // showImportant: true,
  },
  actions: {
    handleClick: null,
    handleKeyUp: null,
    handleKeyDown: null,
    handleOnChange: null,
  },
  form: {},
  css: {
    ...commonCss.css,
    inputCss: "w-full h-full pl-6 px-4 rounded-md bg-light-100 border-0",
  },
};
