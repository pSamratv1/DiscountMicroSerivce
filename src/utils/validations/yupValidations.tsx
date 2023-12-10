import * as yup from "yup";
import dayjs from "dayjs";

export const idValidation = yup
  .string()
  .required("Required")
  .min(3, "At least 3 letters")
  .max(10, "At most 10 letters");

export const numberValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .required("Required");

export const percentageValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .required("Required")
  .min(2, "At least 2 letters")
  .max(3, "At most 3 letters");

export const nameValidation = yup
  .string()
  .required("Required")
  .min(3, "At least 3 letters")
  .max(40, "At most 40 letters");

export const passwordValidation = yup
  .string()
  .required("Required")
  .min(8, "Password must be at least 8 characters long");
// .matches(
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//   "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
// );

export const confirmPasswordValidation = yup
  .string()
  .oneOf(
    [yup.ref("reset_password"), yup.ref("password")],
    "Passwords must match"
  )
  .required("Please confirm your password");

export const emailValidation = yup
  .string()
  .email("Must be a valid email")
  .max(255)
  .required("Required");

export const selectValidation = yup.string().required("Required");

export const dateValidation = yup.string().required("Required");
export const discountDateValidation = yup
  .date()
  .required("Required")
  .typeError("Required")
  .nullable();
// .test("", "Purchase date is greater than expiry date", (val, props) => {
//   const purchase_date = dayjs(val);
//   const expiry_date = dayjs(props.parent.expiry_date);
//   return purchase_date.isBefore(expiry_date);
// });
export const discountEndDateValidation = yup
  .date()
  .required("Required")
  .typeError("Required")
  .nullable()
  .test("", "Expiry date is less than purchase date", (val, props) => {
    const end_date = dayjs(val);
    const start_date = dayjs(props.parent.start_date);
    return end_date.isAfter(start_date);
  })

  .test(
    "",
    "Range for year should be in between 2000 to 2023",
    (val, props) => {
      const start_date = dayjs(props.parent.start_date);
      const end_date = dayjs(val);

      if (start_date.year() >= 2000 && end_date.year() <= 2024) {
        return true;
      } else {
        return false;
      }
    }
  );
export const discountTimeValidation = yup.mixed();

// Inventory Name Validation
export const inventoryNameValidation = yup
  .string()
  .nullable()
  .required("Required");
