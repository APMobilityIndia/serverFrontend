import React from "react";
import {
  User,
  MessageSquare,
  Settings,
  Book,
  HelpCircle,
  Info,
  Grid,
  Monitor,
  Smartphone,
  Headphones,
  FileText,
  Award,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { FaRegCopy } from "react-icons/fa6";
import {
  BsWallet2,
  BsPiggyBank,
  BsCashCoin,
  BsVectorPen,
  BsController,
  BsClockHistory,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store"; // update path based on your structure
import { logout as logoutThunk } from "../../auth/redux/authApi";
import { logout as logoutAction } from "../../auth/redux/authSlice";
import { useNavigate, Link } from "react-router-dom"; // if you're using react-router

export default function Account() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // Optional, if redirect needed

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk({ phone: "", plain_password: "" }));
      dispatch(logoutAction());
      navigate("/"); // <-- Ensure redirection happens
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#1A0B2E" }}
      className="flex flex-col min-h-screen text-white"
    >
      {/* Profile header */}
      <div className="flex items-center p-4">
        <div className="mr-3">
          <img
            src="/assets/profile.png"
            alt="User avatar"
            className="rounded-full border-2 border-white w-18 h-18 object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-sm">MEMBERNNG9ADSF</p>
          <div style={{ backgroundColor: "#FF922E" }} className="">
            UID | 1597560
            <button style={{ backgroundColor: "transparent" }}>
              <FaRegCopy />
            </button>
          </div>
          <div>Last Login: 2025-04-11 13:05:49</div>
        </div>
      </div>
      <div className=" p-4" style={{ backgroundColor: "#1A0B2E" }}>
        {/* Balance Card */}
        <div
          className=" rounded-xl p-4 mb-4"
          style={{ backgroundColor: "#1A0B2E", borderWidth: 1 }}
        >
          <div className="mb-2">
            <p className="text-gray-300 text-sm">Total Balance</p>
            <h2 className="text-white text-2xl font-bold">₹0.00</h2>
          </div>

          <div
            className="h-px  my-4"
            style={{ backgroundColor: "#808080" }}
          ></div>

          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/ARWallet.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">ARWallet</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Deposit.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Deposit</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Withdraw.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Withdraw</span>
            </div>

            <Link to="/vip" className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Vip.png" className="h-8 w-9" alt="VIP" />
              </div>
              <span className="text-white text-xs">VIP</span>
            </Link>
          </div>
        </div>

        {/* Action Cards - First Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/homenav.png" className="h-8 w-10" />
            </div>
            <Link to="/gamehistory">
              <p className="text-white text-sm">Game History</p>
              <p className="text-gray-400 text-xs">My Game History</p>
            </Link>
          </div>

          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/credit_card.png" className="h-8 w-10" />
            </div>
            <Link to="/transactionhistory">
              <p className="text-white text-sm">Transactions</p>
              <p className="text-gray-400 text-xs">My Transaction History</p>
            </Link>
          </div>
        </div>

        {/* Action Cards - Second Row */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/Deposit.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Deposit</p>
              <p className="text-gray-400 text-xs">My Deposit History</p>
            </div>
          </div>

          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/Withdraw.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Withdraw</p>
              <p className="text-gray-400 text-xs">My Withdraw History</p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu items */}
      <div className="flex-1">
        <div
          className="px-4 py-2 w-100 ml-6"
          style={{ borderWidth: 1, borderRadius: 12 }}
        >
          <div className="flex justify-between items-center py-3 border-b border-purple-800">
            <div className="flex items-center">
              <img src="assets/notification.png" className="h-5 w-5 mr-5" />
              <span>My Notifications</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </div>

          <Link
            className="flex justify-between items-center py-3 border-b border-purple-800"
            to="/accountgifts"
          >
            <div className="flex items-center">
              <img src="assets/gifts.png" className="h-5 w-5 mr-5" />
              <span>Gifts</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </Link>

          <Link
            className="flex justify-between items-center py-3 border-b border-purple-800"
            to="/gameStats"
          >
            <div className="flex items-center">
              <img src="assets/gameStat.png" className="h-5 w-5 mr-5" />
              <span>Game statistics</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </Link>

          <Link
            className="flex justify-between items-center py-3"
            to="/language"
          >
            <div className="flex items-center">
              <img src="assets/langauge1.png" className="h-5 w-5 mr-5" />

              <span>Language</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-purple-300 mr-2">English</span>
              <ChevronRight size={20} className="text-purple-300" />
            </div>
          </Link>
        </div>

        {/* Service center section */}
        <div className="px-4 mt-2 mb-6">
          <h2 className="text-sm font-semibold mb-2">SERVICE CENTER</h2>
          <div>
            {/* First row */}
            {/* First row */}
            <div className="flex flex-row justify-evenly mb-4">
              {[
                {
                  src: "assets/setting.png",
                  label: "Setting",
                  to: "/settings",
                },
                {
                  src: "assets/feedback.png",
                  label: "Feedback",
                  to: "/accountfeedback",
                },
                {
                  src: "assets/customer_service.png",
                  label: "Customer Service",
                },
              ].map((item, index) => {
                const content = (
                  <div key={index} className="flex flex-col items-center w-20">
                    <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-1">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="h-5 w-5"
                      />
                    </div>
                    <p className="text-xs text-center text-white">
                      {item.label}
                    </p>
                  </div>
                );

                return item.to ? (
                  <Link key={index} to={item.to}>
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </div>

            {/* Second row */}
            <div className="flex flex-row justify-evenly">
              {[
                { src: "assets/Address_location.png", label: "Location" },
                {
                  src: "assets/beginnersGuide.png",
                  label: "Beginner's Guide",
                  to: "/gamerules",
                },
                { src: "assets/about.png", label: "About", to: "/aboutus" },
              ].map((item, index) => {
                const content = (
                  <div key={index} className="flex flex-col items-center w-20">
                    <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-1">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="h-5 w-5"
                      />
                    </div>
                    <p className="text-xs text-center text-white">
                      {item.label}
                    </p>
                  </div>
                );

                return item.to ? (
                  <Link key={index} to={item.to}>
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </div>

        {/* Log Out Button with Gradient */}
        <div className="px-4 mb-20">
          <button
            onClick={handleLogout}
            className="w-full rounded-full flex items-center justify-center text-white py-3 px-6"
            style={{
              background: "linear-gradient(90deg, #3F1F69 0%, #4F2986 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <LogOut className="mr-2" size={20} />
            <span className="text-lg">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
