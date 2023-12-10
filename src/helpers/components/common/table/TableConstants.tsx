/* eslint-disable @typescript-eslint/no-explicit-any */

// An example of what a design memo should look like
export const DESIGN_ONE_MEMO = [
  {
    Header: "",
    id: "staff_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
  },
];

// An example of what a design data should look like
export const DESIGN_ONE_DATA = [
  {
    id: 62693,
    img: "default_img",
    name: "Udip",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Utsaha",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "John",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Doe",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Rock",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Hurricane",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Abhishek",
    contact: "9862260806",
    role: "admin",
    title: "Owner",
    status: true,
  },
  {
    id: 62693,
    img: "default_img",
    name: "Avinaya",
    contact: "9862260806",
    role: "skill",
    title: "Owner",
    status: true,
  },
];

export const formInputs: any = [
  {
    name: "kalyan",
    label: "Select example",
    type: "select",
    options: [
      { label: "Option 123213123", value: "optione_1" },
      { label: "Option 2", value: "option_2" },
      { label: "Option 3", value: "option_2" },
    ],
  },
  { name: "name", type: "text" },
  { name: "contact", type: "text" },
  {
    name: "role",
    label: "Choose an option",
    type: "select",
    options: [
      { label: "Option 1", value: "option_1" },
      { label: "Option 2", value: "option_2" },
    ],
  },
  { name: "title", type: "text" },
  { name: "status", label: "Status", type: "checkbox", status: true },
];
