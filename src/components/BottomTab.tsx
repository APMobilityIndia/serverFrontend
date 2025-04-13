// src/components/BottomTab.tsx
import { Link, useLocation } from "react-router-dom";

export default function BottomTab() {
  const { pathname } = useLocation();

  return (
    <div className="bg-purple-900 text-white py-3 flex justify-around fixed bottom-0 w-full max-w-md mx-auto">
      <Link to="/" className="flex flex-col items-center">
        <div className="w-6 h-6 mb-1">
          {/* You'll add your Home icon here */}
          <div className="w-full h-full bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-xs">Home</span>
      </Link>

      <Link to="/activity" className="flex flex-col items-center">
        <div className="w-6 h-6 mb-1">
          {/* You'll add your Activity icon here */}
          <div className="w-full h-full bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-xs">Activity</span>
      </Link>

      <Link to="/promotion" className="flex flex-col items-center">
        <div className="w-6 h-6 mb-1 rounded-full flex items-center justify-center">
          {/* You'll add your Promotion icon here */}
          <div className="w-full h-full bg-pink-500 rounded-full"></div>
        </div>
        <span className="text-xs">Promotion</span>
      </Link>

      <Link to="/wallet" className="flex flex-col items-center">
        <div className="w-6 h-6 mb-1">
          {/* You'll add your Wallet icon here */}
          <div className="w-full h-full bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-xs">Wallet</span>
      </Link>

      <Link to="/account" className="flex flex-col items-center">
        <div className="w-6 h-6 mb-1">
          {/* You'll add your Account icon here */}
          <div className="w-full h-full bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-xs">Account</span>
      </Link>
    </div>
  );
}
