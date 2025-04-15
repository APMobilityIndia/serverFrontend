// src/components/BottomTab.tsx
import { Link, useLocation } from "react-router-dom";

export default function BottomTab() {
  const { pathname } = useLocation();

  const tabs = [
    { to: "/", label: "Home", img: "/assets/homenav.png" },
    { to: "/activity", label: "Activity", img: "/assets/activitynav.png" },
    { to: "/promotion", label: "Promotion", img: "/assets/promotionnav.png" },
    { to: "/wallet", label: "Wallet", img: "/assets/walletnav.png" },
    { to: "/account", label: "Account", img: "/assets/accountnav.png" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A0B2E] border-t border-purple-800 py-2 px-4 flex justify-between max-w-md w-full mx-auto z-50">
      {tabs.map((tab) => {
        const isActive = pathname === tab.to;
        return (
          <Link
            to={tab.to}
            key={tab.to}
            className="flex flex-col items-center justify-center w-full text-xs text-gray-400"
          >
            <img
              src={tab.img}
              alt={tab.label}
              className={`w-6 h-6 mb-1 ${
                isActive ? "opacity-100" : "opacity-50"
              }`}
            />
            <span className={isActive ? "text-white font-medium" : ""}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
