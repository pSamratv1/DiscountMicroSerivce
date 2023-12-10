/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { RootState } from "redux-app/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddDiscountFormValidation, productData } from "../../formProps";

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
  commonActions,
  typeProps,
} from "../../formProps";
import { useForm } from "react-hook-form";
import {
  EditDiscountThunk,
  setAddProductList,
  setAddProductName,
  setAddProductType,
  setEditDiscountType,
} from "redux-app/discount-module/DiscountSlice";
import { transformOptionsInObj } from "utils/methods/stringMethods";

import DiscountForm from "../../DiscountForm";
// import { useEffect, useState } from "react";

const EditDiscountForm = ({ id }: any) => {
  // Redux
  const dispatch = useAppDispatch();
  const { platform } = useAppSelector((state: RootState) => state.Discount);
  const { details } = useAppSelector(
    (state: RootState) => state.Discount.discount.view.response
  );
  const fetchItems = (id: any) => {
    const filteredData = details.filter((item: any) => item.id === id);
    return filteredData;
  };
  const index = id;
  console.log(index, "index");
  //Edit form handle submit
  const onSubmit = async (data: any) => {
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
    console.log(data, "data before setting to form data");
    const discount_value =
      data.discount_type_percentage || data.discount_type_value;
    const formData = {
      start_time,
      end_time,
      discount_name: data.discount_card_name,
      discount_type: data.discount_type,
      discount_value,
      end_date: formatDateToYYYYMMDD(data.end_date),
      start_date: formatDateToYYYYMMDD(data.start_date),
      product: data.product_list,
      product_type: data.product_type,
    };
    console.log(formData, "fromData");
    dispatch(EditDiscountThunk({ formData, id: index }));
  };

  // Redux variables
  const discount_type = platform;
  const discountFlag: any =
    discount_type._edit_DiscountForm.input.discount_type.isFlag;
  const validationSchema: any = AddDiscountFormValidation(
    discount_type._edit_DiscountForm.input.discount_type.isFlag
  );

  //

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // reset,
  } = useForm({ resolver: yupResolver(validationSchema) });
  // Common Props
  const form = { register, handleSubmit, errors, onSubmit };

  // Discount Type On Change

  const handleOnChangeType = (e: any) => {
    const field = e.target.value;
    field === "FXD"
      ? dispatch(setEditDiscountType(true))
      : dispatch(setEditDiscountType(false));
  };
  const handleOnChangePoductType = (e: any) => {
    const data = transformOptionsInObj(productData, e.target.value);
    dispatch(setAddProductType(e.target.value));
    dispatch(setAddProductList(data));
  };

  const handleOnChangePoduct = (e: any) => {
    dispatch(setAddProductName(e.target.value));
  };

  // Fetch items from the response details (using redux / api)
  const editDataArray = fetchItems(id);

  const remaining = { actions: commonActions, form, css: {} };
  const editFormObj = {
    name: {
      common: nameProps({ defaultValue: editDataArray[0].discount_name }),
      ...remaining,
    },
    type: {
      common: typeProps({ defaultValue: editDataArray[0].discount_type }),
      options: [
        { label: "Percentage", value: "PER" },
        { label: "Number", value: "FXD" },
      ],
      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangeType(e),
      },
    },
    value: {
      common: valueProps({
        defaultValue: editDataArray[0].discount_value,
      }),

      ...remaining,
    },
    pecentage: {
      common: percentageValueProps({
        defaultValue: editDataArray[0].discount_value,
      }),
      ...remaining,
    },
    start_date: {
      common: dateStartProps({ defaultValue: editDataArray[0].start_date }),
      ...remaining,
    },
    end_date: {
      common: dateEndProps({ defaultValue: editDataArray[0].end_date }),
      ...remaining,
    },
    start_time: {
      common: timeStartProps({ defaultValue: editDataArray[0].start_time }),
      ...remaining,
    },
    end_time: {
      common: timeEndProps({ defaultValue: editDataArray[0].end_time }),
      ...remaining,
    },
    product_type: {
      common: selectProductTypebox({
        defaultValue: editDataArray[0].product_type,
      }).common,
      options: platform._add_DiscountForm.input.product_type.labels,
      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangePoductType(e),
      },
    },

    product: {
      common: selectProductListbox({ defaultValue: editDataArray[0].product }),
      options: platform._add_DiscountForm.input.product_type.values,

      ...remaining,
      actions: {
        ...remaining.actions,
        handleOnChange: (e: any) => handleOnChangePoduct(e),
      },
    },
  };

  return (
    <DiscountForm
      formObj={editFormObj}
      form={form}
      discountFlag={discountFlag}
    />
  );
};

export default EditDiscountForm;
