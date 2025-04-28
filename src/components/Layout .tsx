import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BottomTab from "./BottomTab";
import { useEffect } from "react";
import { useSelector } from "react-redux"; // If token is stored in Redux
import { connectSocket, disconnectSocket } from "../services/socket";

export default function Layout() {
  const location = useLocation();
  const hideHeaderAndTabs = ["/login", "/register"].includes(location.pathname);

  const token = useSelector((state: any) => state.auth?.token); // adjust this according to your Redux auth structure

  useEffect(() => {
    if (token) {
      connectSocket(token);
    }

    return () => {
      disconnectSocket();
    };
  }, [token]);

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
