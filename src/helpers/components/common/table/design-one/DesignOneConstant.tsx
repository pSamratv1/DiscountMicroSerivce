/* eslint-disable @typescript-eslint/no-explicit-any */
const commonCss = {
  css: {
    divCss: "formDivCss",
    labelCss: "formLabelCss",
    inputCss:
      "w-10/12 h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
  },
  errorCss: "formErrorCss",
};

export const orgNameProps = (form: any) => ({
  common: {
    input: "org_name",
    label: "Organization Name",
    placeholder: "Organization One",
    showImportant: true,
  },
  actions: {
    handleClick: null,
    handleKeyUp: null,
    handleKeyDown: null,
    handleOnChange: null,
  },
  form,
  ...commonCss,
});
