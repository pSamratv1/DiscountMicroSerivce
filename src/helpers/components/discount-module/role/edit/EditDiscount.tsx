/* eslint-disable @typescript-eslint/no-explicit-any */

import { CenterSection, CloseIconButton } from "helpers/components/common";

import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { setDiscountEditForm } from "redux-app/discount-module/DiscountSlice";
import { RootState } from "redux-app/store";
import EditDiscountForm from "./EditDiscountForm";
// import { useEffect, useState } from "react";

export default function EditDiscount() {
  // const [editData, setEditData] = useState({});
  // Redux
  const dispatch = useAppDispatch();

  const { id } = useAppSelector(
    (state: RootState) => state.Discount.platform._edit_DiscountForm
  );
  //   const { discount } = useAppSelector((state: RootState) => state.Discount);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("your-api-endpoint");
  //       const data = await response.json();
  //       // Update state with fetched data
  //       setEditData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // Redux variables

  const { isFlag } = useAppSelector(
    (state: RootState) => state.Discount.discount.edit
  );

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "absolute top-0 left-0 w-full min-w-[24rem] h-full bg-black/10 overflow-hidden",
          }}
        >
          <div className=" z-[101] mt-[px]  edit-form-one w-[calc(45vw+3rem)] max-w-[1400px]  min-w-[400px] sm:min-w-[350px] sm:max-w-[500px] h-[calc(100vh-5.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-4 ">
            <p className="text-base text-primary-medium font-medium ">
              Edit Discount Card
            </p>
            <EditDiscountForm id={id} />
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => dispatch(setDiscountEditForm(false))}
          />
        </CenterSection>
      )}
    </>
  );
}
