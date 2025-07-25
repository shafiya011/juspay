import { DownOutlined  } from "@ant-design/icons";
export const MenuItems = [
  {
    key: "dashboards",
    label: "Dashboards",
    type: "group",
    children: [
      { key: "default", label: "Default" },
      { key: "eCommerce", label: "eCommerce" },
      { key: "project", label: "Projects" },
      { key: "onlinecourse", label: "Online Course" },
    ],
  },
  {
    key: "pages",
    label: "Pages",
    type: "group",
    children: [
      {
        key: "userprofile",
        label: "User Profile",
        children: [
          { key: "overview", label: "Overview" },
          { key: "projects", label: "Projects" },
          { key: "campaigns", label: "Campaigns" },
          { key: "documents", label: "Documents" },
          { key: "followers", label: "Followers" },
        ],
      },
      { key: "account", label: "Account" },
      { key: "corporate", label: "Corporate" },
      { key: "blog", label: "Blog" },
      { key: "social", label: "Social" },
    ],
  },
];
