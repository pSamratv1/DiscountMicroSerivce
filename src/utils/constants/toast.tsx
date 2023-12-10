import { toast } from "react-toastify";

const commonToast = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  // theme: "light",
};

export const getSuccessToast = (msg: string) =>
  toast.success(msg, { ...commonToast });

export const getErrorToast = (msg: string) =>
  toast.error(msg, { ...commonToast });

export const getWarningToast = (msg: string) =>
  toast.warning(msg, { ...commonToast });

export const getInfoToast = (msg: string) =>
  toast.info(msg, { ...commonToast });

export const getDefaultToast = (msg: string) => toast(msg, { ...commonToast });

// toast("Custom Style Notification with css class!", {
//   position: toast.POSITION.BOTTOM_RIGHT,
//   className: "foo-bar",
// });

// export const successToast = {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
//   }
