import { CenterSection, DeleteModal } from "helpers/components/common";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { setDiscountDeleteForm } from "redux-app/discount-module/DiscountSlice";
import { RootState } from "redux-app/store";

export default function DeleteRoleForm() {
  const dispatch = useAppDispatch();
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Discount.discount.delete
  );

  const handleDeletePrompt = () => {};

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
