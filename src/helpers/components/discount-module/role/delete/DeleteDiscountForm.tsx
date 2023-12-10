/* eslint-disable @typescript-eslint/no-explicit-any */

import { CenterSection, DeleteModal } from "helpers/components/common";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import {
  DeleteDiscountThunk,
  setDiscountDeleteForm,
  setDiscountdata,
} from "redux-app/discount-module/DiscountSlice";
import { RootState } from "redux-app/store";

export default function DeleteDiscountForm() {
  const dispatch = useAppDispatch();
  const { details } = useAppSelector(
    (state: RootState) => state.Discount.discount.view.response
  );
  const { id } = useAppSelector(
    (state: RootState) => state.Discount.platform._delete_DiscountForm
  );
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Discount.discount.delete
  );
  const fetchItems = (id: any) => {
    const filteredData = details.filter((item: any) => item.id !== id);
    console.log(filteredData, "before deletion");
    dispatch(setDiscountdata(filteredData));
  };

  const handleDeletePrompt = () => {
    fetchItems(id);
    dispatch(setDiscountDeleteForm(false));
    dispatch(DeleteDiscountThunk(id));
  };

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "bg-black/10 absolute top-0 left-0 w-full h-full min-w-[25rem]",
          }}
        >
          <DeleteModal
            question="Are you sure you want to remove this role?"
            okPrompt="Yes, I'm sure"
            cancelPrompt="No, Cancel"
            handleCancelPrompt={() => dispatch(setDiscountDeleteForm(false))}
            handleDeletePrompt={handleDeletePrompt}
          />
        </CenterSection>
      )}
    </>
  );
}
