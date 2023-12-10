import { AddButton, TextInput } from "helpers/components/common";
import { controlBarSearch } from ".";
import FilterButton from "helpers/components/common/buttons/FilterButton";
import ExportButton from "helpers/components/common/buttons/ExportButton";
import { setRoleAddForm } from "redux-app/role-module/RoleSlice";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";

export const ControlBar = () => {
  // Redux
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[60px] py-2.5 px-4 flex justify-between">
      <AddButton
        css={{
          customCss:
            "min-w-[5rem] min-h-[2rem] max-h-[2rem] px-3 flex gap-1 items-center bg-primary-dark font-medium text-white text-xs rounded-sm",
        }}
        title="Add Role"
        handleAction={() => dispatch(setRoleAddForm(true))}
      />

      <div className="h-full flex justify-center items-center gap-4">
        <TextInput {...controlBarSearch} />
        <FilterButton css={{}} />
        <ExportButton css={{}} />
      </div>
    </div>
  );
};
