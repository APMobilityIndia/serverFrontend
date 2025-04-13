import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BottomTab from "./BottomTab";

export default function Layout() {
  const location = useLocation();
  const hideHeaderAndTabs = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-md flex flex-col min-h-screen relative mx-auto">
        {!hideHeaderAndTabs && <Header />}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        {!hideHeaderAndTabs && <BottomTab />}
      </div>
    </div>
  );
}
