/* eslint-disable @typescript-eslint/no-explicit-any */
import TimeInput from "helpers/components/common/forms/TimeInput";
import TagsButton from "helpers/components/common/buttons/Tags";
import DateInput from "helpers/components/common/forms/DateInput";
import { useAppSelector } from "helpers/hooks/useStoreHooks";
import { RootState } from "redux-app/store";

import { addBtnProps } from "./formProps";

import { Button, SelectInput, TextInput } from "helpers/components/common";

const DiscountForm = ({ formObj, form, discountFlag }: any) => {
  // Props

  // Destucuring Props
  const { handleSubmit, onSubmit } = form;

  // Redux
  const { platform } = useAppSelector((state: RootState) => state.Discount);

  // Redux variables

  // Discount Type On Change

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mt-2"
    >
      <div className="grid gap-10 justify-items-center">
        <TextInput {...formObj.name} />
      </div>
      <div className="grid grid-cols-2  min-w-[160px] justify-items-start">
        <SelectInput {...formObj.type} />
        {!discountFlag ? (
          <TextInput {...formObj.pecentage} />
        ) : (
          <TextInput {...formObj.value} />
        )}
      </div>
      <div className="grid grid-cols-2 min-w-[160px] justify-items-start">
        <DateInput {...formObj.start_date} />
        <DateInput {...formObj.end_date} />
      </div>
      <div className="grid grid-cols-2 min-w-[160px] justify-items-start">
        <TimeInput {...formObj.start_time} />
        <TimeInput {...formObj.end_time} />
      </div>

      <div className="grid grid-cols-2 min-w-[160px] justify-items-center">
        <SelectInput {...formObj.product_type} />
        <SelectInput {...formObj.product} />
      </div>
      <div className="mt-4 flex  max-w-[30rem]">
        {platform._add_DiscountForm.tags?.map((item: string, idx: number) => (
          <TagsButton title={item} css={{}} key={idx} />
        ))}
      </div>
      <div className="mt-4">
        <Button {...addBtnProps} />
      </div>
    </form>
  );
};

export default DiscountForm;
