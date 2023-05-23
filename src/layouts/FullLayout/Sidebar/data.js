import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
  VerifiedUserOutlined,
  MessageOutlined
} from "@material-ui/icons/";

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard/dashboard/home",
  },
  {
    title: "Stock",
    icon: AddToPhotosOutlined,
    // href: "/dashboard/form-elements/stockpage",
    href: "/dashboard/dashboard/form-elements/stock",
  },
  {
    title: "Sales",
    icon: AspectRatioOutlined,
    href: "/dashboard/dashboard/form-elements/sale",
  },
  {
    title: "Categories",
    icon: AssignmentTurnedInOutlined,
    href: "/dashboard/dashboard/form-elements/category",
  },
  {
    title: "Items",
    icon: AlbumOutlined,
    href: "/dashboard/dashboard/form-elements/items",
  },

  {
    // title: "Form",
    title: "Expenses",
    icon: DescriptionOutlined,
    href: "/dashboard/dashboard/form-elements/expServices",
  },

  {
    title: "Expense's Category",
    icon: AutoAwesomeMosaicOutlined,
    // href: "/dashboard/tables/basic-table",
    href: "/dashboard/dashboard/form-elements/expenseCategory",
  },
  {
    title: "Reports",
    icon: SwitchCameraOutlined,
    href: "/dashboard/dashboard/form-elements/allReports",
  },
  {
    title: "Profile",
    icon: SwitchLeftOutlined,
    href: "/dashboard/dashboard/form-elements/profile",
  },
  
  {
    title: "New users",
    icon: VerifiedUserOutlined,
    href: "/dashboard/dashboard/admin/newUsers",
    admin: true
  },
  {
    title: "New messages",
    icon: MessageOutlined,
    href: "/dashboard/dashboard/admin/newMessages",
    admin: true
  },
];

export default Menuitems;
