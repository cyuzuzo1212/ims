import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  // DescriptionOutlined,
  // AutoAwesomeMosaicOutlined,
} from "@material-ui/icons/";

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard/home",
  },
  {
    title: "Stock",
    icon: AddToPhotosOutlined,
    href: "/dashboard/form-elements/autocomplete",
  },
  {
    title: "Sales",
    icon: AspectRatioOutlined,
    href: "/dashboard/form-elements/button",
  },
  {
    title: "Categories",
    icon: AssignmentTurnedInOutlined,
    href: "/dashboard/form-elements/checkbox",
  },
  {
    title: "Items",
    icon: AlbumOutlined,
    href: "/dashboard/form-elements/radio",
  },
  {
    title: "Reports",
    icon: SwitchCameraOutlined,
    href: "/dashboard/form-elements/slider",
  },
  {
    title: "Profile",
    icon: SwitchLeftOutlined,
    href: "/dashboard/form-elements/switch",
  },
  // {
  //   title: "Form",
  //   icon: DescriptionOutlined,
  //   href: "/dashboard/form-layouts/form-layouts",
  // },
  // {
  //   title: "Table",
  //   icon: AutoAwesomeMosaicOutlined,
  //   href: "/dashboard/tables/basic-table",
  // },
];

export default Menuitems;
