/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  CenterSection,
  CheckboxInput,
  CloseIconButton,
  TextInput,
} from "helpers/components/common";
import Button from "helpers/components/common/buttons/Button";
import {
  AddRoleFormOneValidation,
  nameProps,
  addBtnProps,
  adminCheckbox,
  roleCheckbox,
  subscriptions,
} from "../formProps";
import { toSnakeCase } from "utils/methods/stringMethods";
import { RootState } from "redux-app/store";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { setRoleAddForm } from "redux-app/role-module/RoleSlice";

export default function AddRoleForm() {
  // Redux
  const dispatch = useAppDispatch();
  const { isFlag } = useAppSelector((state: RootState) => state.Role.role.add);

  // Action
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddRoleFormOneValidation) });

  // Common Props
  const form = { register, handleSubmit, errors };

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "absolute top-0 left-0 w-screen min-w-[25rem] min-h-screen bg-black/10",
          }}
        >
          <div className="z-[101] edit-form-one w-[calc(45vw+3rem)] max-w-[1400px]  min-w-[400px] sm:min-w-[450px] h-[calc(100vh-5.2rem)] pb-1 bg-white text-xs rounded-md px-6 py-4">
            <p className="text-base text-primary-medium font-medium mb-4">
              Add Role
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-2 gap-10">
                <TextInput {...nameProps(form)} />
              </div>

              <div className="max-h-[calc(100vh-295px)] scrollbar overflow-y-scroll flex flex-col gap-1">
                <div className="grid">
                  <p className="text-[14px] font-medium text-primary-medium">
                    Privilege
                  </p>
                  <CheckboxInput {...adminCheckbox(form)} />
                </div>

                {/* MAP */}
                <div className="flex flex-col gap-3">
                  {subscriptions.map((item: string, idx: number) => {
                    const demo = toSnakeCase(item);
                    return (
                      <div className="flex flex-col" key={`${idx}. ${item}`}>
                        <p className="text-primary-medium font-medium">
                          {item}
                        </p>
                        <div className="flex gap-8">
                          <CheckboxInput
                            {...roleCheckbox(form, `create_${demo}`, "Create")}
                          />
                          <CheckboxInput
                            {...roleCheckbox(form, `read_${demo}`, "Read")}
                          />
                          <CheckboxInput
                            {...roleCheckbox(form, `update_${demo}`, "Update")}
                          />
                          <CheckboxInput
                            {...roleCheckbox(form, `delete_${demo}`, "Delete")}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex">
                <Button {...addBtnProps} />
              </div>
            </form>
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => dispatch(setRoleAddForm(false))}
          />
        </CenterSection>
      )}
    </>
  );
}
