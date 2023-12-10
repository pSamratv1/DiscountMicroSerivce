/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomImage } from "helpers/components/common";
import { view_svg, edit_svg, delete_svg } from "../../assets";

export const actions = ({
  handleViewAction,
  handleEditAction,
  handleDeleteAction,
}: any) => [
  {
    css: {},
    icon: <CustomImage src={view_svg} css={{ divCss: "w-4" }} alt={view_svg} />,
    handleAction: handleViewAction,
  },
  {
    css: {},
    icon: <CustomImage src={edit_svg} css={{ divCss: "w-3" }} alt={edit_svg} />,
    handleAction: handleEditAction,
  },
  {
    css: {},
    icon: (
      <CustomImage src={delete_svg} css={{ divCss: "w-3" }} alt={delete_svg} />
    ),
    handleAction: handleDeleteAction,
  },
];
