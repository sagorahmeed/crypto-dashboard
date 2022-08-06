import {
  MdDashboard, MdInsights
} from "react-icons/md";
import RevewsIcon from "../../assets/icons/revews-icon.svg";

const NavData = [
  {
    id: "1",
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: MdDashboard,
    children: [],
  },
  {
    id: "2",
    title: "Wallet",
    path: "/admin/wallet",
    icon: MdInsights,
    children: [],
  },
  {
    id: "3",
    title: "Transaction",
    path: "/admin/transaction",
    icon: RevewsIcon,
    children: [],
  },
  // {
  //   id: "4",
  //   title: "Review Request",
  //   path: "/admin/review-request/all-request-emails",
  //   icon: MdNotificationsActive,
  //   children: [
  //     {
  //       id: "4-1",
  //       title: "All Request Emails",
  //       path: "/admin/review-request/all-request-emails",
  //       icon: "",
  //       children: [],
  //     },
  //     {
  //       id: "4-2",
  //       title: "All Request SMS",
  //       path: "/admin/review-request/all-request-sms",
  //       icon: "",
  //       children: [],
  //     },
  //     {
  //       id: "4-3",
  //       title: "Reminder Settings",
  //       path: "/admin/review-request/reminder-settings",
  //       icon: "",
  //       children: [],
  //     },
  //   ],
  // },
  
];

export default NavData;
