/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DISCOUNT_TABLE_DATA,
  DISCOUNT_TABLE_MEMO,
} from "assets/org-module/views/organization/discountPage";
import DesignOne from "helpers/components/common/table/design-one/DesignOne";
import TableActions from "helpers/components/role-module/actions/TableActions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import AddDiscountForm from "helpers/components/discount-module/role/add/AddDiscountForm";
import EditDiscount from "helpers/components/discount-module/role/edit/EditDiscount";
import {
  setDeleteDataId,
  setDiscountDeleteForm,
  setDiscountEditForm,
  setEditDataId,
} from "redux-app/discount-module/DiscountSlice";
import DeleteDiscountForm from "../role/delete/DeleteDiscountForm";
import { RootState } from "redux-app/store";
import { useMemo } from "react";

export default function DiscountTable() {
  // Props

  // Redux
  const dispatch = useAppDispatch();
  // // const { details } = useAppSelector(
  // //   (state: RootState) => state.Discount.discount.view.response
  // // );
  const details = DISCOUNT_TABLE_DATA;

  // Hooks
  const navigate = useNavigate();

  // const columns = useMemo(() => DISCOUNT_TABLE_MEMO, []);
  const columns = DISCOUNT_TABLE_MEMO;

  const getRoutes = (id: any) => ({
    handleViewAction: () => {
      navigate(`/profile/view/${id}`);
    },
    handleEditAction: () => {
      dispatch(setDiscountEditForm(true));
      dispatch(setEditDataId(id));
    },
    handleDeleteAction: () => {
      dispatch(setDiscountDeleteForm(true));
      dispatch(setDeleteDataId(id));
    },
  });

  const data: any = DISCOUNT_TABLE_DATA.map((item: any) => ({
    ...item,
    actions: <TableActions {...getRoutes(item?.id)} />,
  }));

  const designOneProps = { columns, data };

  return (
    <>
      <DesignOne {...designOneProps} />
      <AddDiscountForm />
      <EditDiscount />
      <DeleteDiscountForm />
    </>
  );
}
