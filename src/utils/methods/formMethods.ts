/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFormErrorMsg = (errors: any, inputName: string) =>
  errors && errors[inputName] && errors[inputName]?.message.toString();

export const generateNumbers = (startYear: number, endYear: number) => {
  const numbers = [];

  for (let year = endYear; year >= startYear; year--) {
    numbers.push({ label: year.toString(), value: year.toString() });
  }

  return numbers;
};

export const getNepalProvinces = () => {
  const provinces = [
    { label: "Province 1", value: "P1" },
    { label: "Province 2", value: "P2" },
    { label: "Bagmati Province", value: "P3" },
    { label: "Gandaki Province", value: "P4" },
    { label: "Lumbini Province", value: "P5" },
    { label: "Karnali Province", value: "P6" },
    { label: "Sudurpashchim Province", value: "P7" },
  ];
  return provinces;
};
