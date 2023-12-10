/* eslint-disable @typescript-eslint/no-explicit-any */
export const getReduxErrorMsg = (error: any) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};
