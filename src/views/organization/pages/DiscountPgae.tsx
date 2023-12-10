import {
  briefcase_svg,
  list_task_svg,
  people_svg,
  target_svg,
} from "assets/common/svg";
import { AddButton } from "helpers/components/common";
import Cards from "helpers/components/discount-module/cards/Cards";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";
import {
  ViewCategoryThunk,
  setDiscountAddForm,
} from "redux-app/discount-module/DiscountSlice";
// import { useEffect } from "react";
import DiscountTable from "helpers/components/discount-module/tables/DiscountTable";
import { useEffect, useRef } from "react";

const DiscountPage = () => {
  const didMountRef = useRef<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      dispatch(ViewCategoryThunk());
    }
    // Retrieve all discount itesm
  }, [dispatch]);

  const handleAddDiscountForm = () => {
    dispatch(setDiscountAddForm(true));
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-6 h-full max-w-full sm:w-[calc(100vw-241.5px)]  relative">
        <AddButton
          css={{
            customCss:
              "relative w-fit min-w-[5rem] min-h-[2rem] px-3 py-1.5 flex gap-1 items-center bg-primary-dark hover:bg-blue-800 font-medium text-white text-xs rounded-2xl",
          }}
          title="Create New Discount"
          handleAction={handleAddDiscountForm}
        />
        <div className="flex md:gap-20 gap-8 h-[8rem]  ">
          <Cards
            css={{}}
            title="Total Discount Card"
            label={11}
            icon={briefcase_svg}
            color="bg-icons-100 bg-opacity-10 rounded-lg p-1 flex justify-center items-center"
          />
          <Cards
            css={{}}
            title="Active Discount "
            label={11}
            icon={list_task_svg}
            color="bg-icons-200 bg-opacity-10 rounded-lg  p-1 flex justify-center items-center"
          />
          <Cards
            css={{}}
            title="Product Type"
            label={11}
            icon={people_svg}
            color="bg-icons-300 bg-opacity-10 rounded-lg p-1 flex justify-center items-center"
          />
          <Cards
            css={{}}
            title="Total Product"
            label={11}
            icon={target_svg}
            color="bg-icons-400 bg-opacity-10 rounded-lg p-1 flex justify-center items-center"
          />
        </div>
        <DiscountTable />
      </div>
    </>
  );
};

export default DiscountPage;
