// component
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import BlockIcon from "@mui/icons-material/Block";
import LoginIcon from "@mui/icons-material/Login";
// ----------------------------------------------------------------------

const icon = (name) => {
  switch (name) {
    case "dashboard":
      return <DashboardIcon />;
    case "cellPoint":
      return <StoreIcon />;
    case "history":
      return <ChangeHistoryIcon />;
    case "login":
      return <LoginIcon />;
    case "notFound":
      return <BlockIcon />;
    default:
      return null;
  }
};

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("dashboard"),
  },
  {
    title: "Söwda Nokatlary",
    path: "/dashboard/cellPoints",
    icon: icon("cellPoint"),
  },
  {
    title: "History",
    path: "/dashboard/history",
    icon: icon("history"),
  },
  {
    title: "login",
    path: "/login",
    icon: icon("login"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("notFound"),
  },
];

export default navConfig;
