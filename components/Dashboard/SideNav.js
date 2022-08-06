/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import RevewsIcon from "assets/icons/RevewsIcon";
import SideNavFooter from "components/SideNavFooter";
import UserInfo from "components/UserInfo";
import { Divide as Hamburger } from "hamburger-react";
import { useCallback, useRef, useState } from "react";
import { MdDashboard, MdInsights } from "react-icons/md";
import useClickOutside from "utils/useClickOutside";
import userImage from "../../assets/images/user.jpg";
import NavList from "./NavList";

const NavData = [
  {
    id: "1",
    title: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
    children: [],
  },
  {
    id: "2",
    title: "Wallet",
    path: "/wallet",
    icon: MdInsights,
    children: [],
  },
  {
    id: "3",
    title: "Transaction",
    path: "/transaction",
    icon: RevewsIcon,
    children: [],
  },
  // {
  //   id: "4",
  //   title: "Review Request",
  //   path: "/review-request/all-request-emails",
  //   icon: MdNotificationsActive,
  //   children: [
  // {
  //   id: "4-1",
  //   title: "All Request Emails",
  //   path: "/review-request/all-request-emails",
  //   icon: "",
  //   children: [],
  // },
  // {
  //   id: "4-2",
  //   title: "All Request SMS",
  //   path: "/review-request/all-request-sms",
  //   icon: "",
  //   children: [],
  // },
  //     {
  //       id: "4-3",
  //       title: "Reminder Settings",
  //       path: "/review-request/reminder-settings",
  //       icon: "",
  //       children: [],
  //     },
  //   ],
  // },
  // {
  //   id: "5",
  //   title: "Review for Discount",
  //   path: "/review-for-discount",
  //   icon: MdLocalOffer,
  //   children: [],
  // },
  // {
  //   id: "6",
  //   title: "Product Q&A",
  //   path: "/reminder",
  //   icon: QA,
  //   children: [],
  // },
  // {
  //   id: "7",
  //   title: "UGC Builder",
  //   path: "/reminder",
  //   icon: MdBuildCircle,
  //   children: [],
  // },
  // {
  //   id: "8",
  //   title: "Import & Export",
  //   path: "/import-and-export",
  //   icon: MdSwapVerticalCircle,
  //   children: [],
  // },
  // {
  //   id: "9",
  //   title: "Integrations",
  //   path: "/reminder",
  //   icon: MdAccountTree,
  //   children: [],
  // },
  // {
  //   id: "10",
  //   title: "Fomo",
  //   path: "/fomo",
  //   icon: MdScatterPlot,
  //   children: [],
  // },
];

const SideNav = () => {
  const [navigation, setNavigation] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  const NavPopover = useRef();
  const toggleOpen = (id) => () =>
    setIsOpen((isOpen) => (isOpen === id ? null : id));
  const handleNavigation = () => {
    setNavigation((prevState) => !prevState);
  };

  const close = useCallback(() => {
    setNavigation(false);
    setIsNavOpen(false);
  });
  useClickOutside(NavPopover, close);

  return (
    <div className="">
      <div
        onClick={handleNavigation}
        className="lg:hidden block absolute right-3 top-2"
        ref={NavPopover}
      >
        <Hamburger
          size="20"
          toggled={isNavOpen}
          distance="sm"
          toggle={setIsNavOpen}
          color="#fff"
        />
      </div>
      <div
        className={`overflow-x-hidden w-[18rem] py-4  bg-[#191e3a] fixed mt-[0] 2xl:block xl:block lg:block transition-all duration-300 ease-in-out 2xl:left-0 xl:left-0 lg:left-0 -left-[100%] ${
          navigation
            ? " left-[0%] transition-all duration-300 ease-in-out rounded-none m-0 top-0 z-100"
            : "-left-[100%] transition-all duration-300 ease-in-out mt-[0rem] -[mr-5.5625rem] z-100"
        }`}
        style={{
          height: "-webkit-fill-available",
          zIndex: "2",
        }}
      >
        <div className="">
          <UserInfo
            userName={"Hello, Marquez"}
            userDesc={"marquezzzz@mail.com"}
            userImage={userImage}
          />
          <ul className="">
            {NavData.map((item, index) => (
              <NavList
                key={index}
                item={item}
                isOpen={isOpen === index}
                toggle={toggleOpen(index)}
              />
            ))}
          </ul>
          <SideNavFooter
            footerHeading={"Zenix Crypto Admin"}
            footerInfo={"Dashboard"}
            footeCredit={"© 2022 All Rights Reserved"}
            footerDes={"Made with by DexignZone"}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
