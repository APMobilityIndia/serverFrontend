// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BottomTab from "./BottomTab";

export default function Layout() {
  const location = useLocation();
  const hideTabs = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      {!hideTabs && <BottomTab />}
    </div>
  );
}
