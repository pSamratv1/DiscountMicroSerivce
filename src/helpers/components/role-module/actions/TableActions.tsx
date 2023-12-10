/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import IconButton from "helpers/components/common/buttons/IconButton";
import { actions } from "../../common/table/design-one/table";

export type TableActionsSchema = {
  handleViewAction: () => void;
  handleEditAction: any;
  handleDeleteAction: () => void;
};

export default function TableActions(props: TableActionsSchema) {
  return (
    <div className="flex gap-2">
      {actions({ ...props }).map((item: any, idx: number) => {
        return <IconButton key={`${idx}. TableAction IconButton`} {...item} />;
      })}
    </div>
  );
}
