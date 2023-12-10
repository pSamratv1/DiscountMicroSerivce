import { FiPlusCircle } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { LuUserCheck2 } from "react-icons/lu";

export const profileLinks = [
  {
    icon: <LuUserCheck2 className="text-lg text-dark-200" />,
    title: "Edit Profile",
    href: "/settings",
    css: {},
    isFlag: true,
  },
  {
    icon: (
      <FiPlusCircle className="text-base text-dark-200 -translate-x-[1.5px]" />
    ),
    title: "Add Organization",
    href: "/settings",
    css: {},
    isFlag: true,
  },
  {
    icon: (
      <IoLogOutOutline className="text-lg text-dark-200 -translate-x-[1.7px]" />
    ),
    title: "Logout",
    // href: "",
    css: {
      divCss:
        "flex justify-between items-center gap-2 hover:text-danger-normal",
      customCss: "flex justify-between items-center gap-2 pt-4",
      iconCss: "text-xs text-dark-200 mt-4",
    },
  },
];

export const tabs = [
  { label: "Profile Setup", value: "profile" },
  { label: "Organization Setup", value: "organization" },
  { label: "Notification", value: "notification" },
  { label: "Language And Time", value: "language" },
  { label: "Password And Security", value: "password" },
];

export const notifications = [
  {
    name: "Role Management",
    value: "role_management",
    isHidden: false,
    items: [
      {
        link: "",
        msg: "Notify me when a staff member's role or permissions are changed.",
      },
      {
        link: "",
        msg: "Notify me when a new role is assigned to a staff member.",
      },
    ],
  },

  {
    name: "Staff Management",
    value: "staff_management",
    isHidden: false,
    items: [
      {
        link: "",
        msg: "Notification when a new staff member is added to the system.",
      },
      {
        link: "",
        msg: "Notification when there are updates or changes made to staff members' information.",
      },
    ],
  },

  {
    name: "Supply Chain Management",
    value: "supply_chain_management",
    isHidden: false,
    items: [
      {
        link: "",
        msg: "Notification when a new staff member is added to the system.",
      },
      {
        link: "",
        msg: "Notification when there are updates or changes made to staff members' information.",
      },
    ],
  },

  {
    name: "Inventory Management",
    value: "inventory_management",
    isHidden: false,
    items: [
      {
        link: "",
        msg: "Notify me when inventory item is about to expire.",
      },
      {
        link: "",
        msg: "Notify me when the inventory item expires.",
      },
      {
        link: "",
        msg: "Notify me when the inventory item is expended.",
      },
    ],
  },
];
