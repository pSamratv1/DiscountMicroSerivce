/* eslint-disable @typescript-eslint/no-explicit-any */

import { CenterSection, CloseIconButton } from "helpers/components/common";

import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import {
  CreateDiscountThunk,
  ViewCategoryThunk,
  setAddDiscountType,
  setAddDiscountValue,
  setAddProductList,
  setAddProductName,
  setAddProductType,
  setDiscountAddForm,
} from "redux-app/discount-module/DiscountSlice";
import { RootState } from "redux-app/store";
import DiscountForm from "../../DiscountForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddDiscountFormValidation, productData } from "../../formProps";
import { useForm } from "react-hook-form";
import {
  nameProps,
  valueProps,
  percentageValueProps,
  selectProductTypebox,
  selectProductListbox,
  dateStartProps,
  dateEndProps,
  timeStartProps,
  timeEndProps,
  typeProps,
  commonActions,
} from "../../formProps";
import { transformOptionsInObj } from "utils/methods/stringMethods";
export default function AddRoleForm() {
  // Redux

  const dispatch = useAppDispatch();
  const { discount } = useAppSelector((state: RootState) => state.Discount);
  const { platform } = useAppSelector((state: RootState) => state.Discount);

  const discount_type = platform;
  const discountFlag: any =
    discount_type._add_DiscountForm.input.discount_type.isFlag;
  const validationSchema: any = AddDiscountFormValidation(
    discount_type._add_DiscountForm.input.discount_type.isFlag
  );

  const onSubmit = (data: any) => {
    const start_time = `${data.start_time_hours}:${data.start_time_minutes}`;

    // Combine the end time components into a single string
    const end_time = `${data.end_time_hours}:${data.end_time_minutes}`;
    function formatDateToYYYYMMDD(date: any) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    // Now you have startTime and endTime strings

    const formData = {
      start_time,
      end_time,
      discount_name: data.discount_card_name,
      discount_type: data.discount_type,
      discount_value: data.discount_type_percentage,
      end_date: formatDateToYYYYMMDD(data.end_date),
      start_date: formatDateToYYYYMMDD(data.start_date),
      product: data.product_list,
      product_type: data.product_type,
    };
    console.log(formData, "data");
    dispatch(CreateDiscountThunk(formData));
    dispatch(ViewCategoryThunk());
  };

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  // Redux variables
  const form = { register, handleSubmit, errors, onSubmit };
  const remaining = { actions: commonActions, form, css: {} };
  const { isFlag } = discount.add;

  const handleOnChangeType = (e: any) => {
    const field = e.target.value;
    field === "FXD"
      ? dispatch(setAddDiscountType(true))
      : dispatch(setAddDiscountType(false));
  };
  const handleOnChangeValue = (e: any) => {
    dispatch(setAddDiscountValue(e.target.value));
  };
  const handleOnChangePoductType = (e: any) => {
    const data = transformOptionsInObj(productData, e.target.value);
    dispatch(setAddProductType(e.target.value));
    dispatch(setAddProductList(data));
  };
  const handleOnChangePoduct = (e: any) => {
    dispatch(setAddProductName(e.target.value));
  };
  // Form Object for add
  const formObj: any = {
    name: { common: nameProps({}), ...remaining },
    type: {
      common: typeProps({}),
      ...remaining,
      options: [
        { label: "Percentage", value: "PER" },
        { label: "Number", value: "FXD" },
      ],
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangeType(e),
      },
    },
    value: {
      common: valueProps({}),

      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangeValue(e),
      },
    },
    pecentage: {
      common: percentageValueProps({}),
      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangeValue(e),
      },
    },
    start_date: { common: dateStartProps({}), ...remaining },
    end_date: { common: dateEndProps({}), ...remaining },
    start_time: { common: timeStartProps({}), ...remaining },
    end_time: { common: timeEndProps({}), ...remaining },
    product_type: {
      common: selectProductTypebox({}).common,
      options: platform._add_DiscountForm.input.product_type.labels,

      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangePoductType(e),
      },
    },

    product: {
      common: selectProductListbox({}),
      options: platform._add_DiscountForm.input.product_type.values,

      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangePoduct(e),
      },
    },
  };
  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "absolute top-0 left-0 w-full min-w-[24rem] h-full bg-black/10 overflow-hidden",
          }}
        >
          <div className="z-[101] edit-form-one w-[calc(45vw+3rem)] max-w-[1400px]  min-w-[400px] sm:min-w-[350px] sm:max-w-[500px] h-[calc(100vh-5.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-4">
            <p className="text-base text-primary-medium font-medium ">
              Create Discount Card
            </p>
            <DiscountForm
              formObj={formObj}
              form={form}
              discountFlag={discountFlag}
            />
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => dispatch(setDiscountAddForm(false))}
          />
        </CenterSection>
      )}
    </>
  );
}
