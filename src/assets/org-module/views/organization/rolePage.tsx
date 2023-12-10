/* eslint-disable @typescript-eslint/no-explicit-any */
export const ROLE_TABLE_MEMO = [
  {
    Header: "",
    id: "role_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
  },
];

export const ROLE_TABLE_DATA = [
  {
    id: 62693,
    role: "Manager",
  },
  {
    id: 62694,
    role: "Chef",
  },
  {
    id: 62695,
    role: "Manager",
  },
  {
    id: 62696,
    role: "Doctor",
  },
  {
    id: 62697,
    role: "Pilot",
  },
  {
    id: 62698,
    role: "Manager",
  },
  {
    id: 62699,
    role: "Pilot",
  },
  {
    id: 62700,
    role: "Chef",
  },
  {
    id: 62701,
    role: "Manager",
  },
];

export const formInputs: any = [
  {
    username: "kalyan",
    label: "Select example",
    type: "select",
    options: [
      { label: "Option 123213123", value: "optione_1" },
      { label: "Option 2", value: "option_2" },
      { label: "Option 3", value: "option_2" },
    ],
  },
  { username: "name", type: "text" },
  { username: "contact", type: "text" },
  {
    username: "role",
    label: "Choose an option",
    type: "select",
    options: [
      { label: "Option 1", value: "option_1" },
      { label: "Option 2", value: "option_2" },
    ],
  },
  { username: "title", type: "text" },
  { username: "status", label: "Status", type: "checkbox", status: true },
];
