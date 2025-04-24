import React from "react";
import { ChevronRight, LogOut } from "lucide-react";

import { FaRegCopy } from "react-icons/fa6";

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
            className="rounded-full border-2 border-white w-20 h-20 object-cover"
          />
        </div>
        <div className="text-left space-y-2">
          <p className="font-bold text-sm ml-1">MEMBERNNG9ADSF</p>

          <div
            className="flex items-center justify-evenly gap-2 px-4 w-fit h-7"
            style={{
              backgroundColor: "#FF922E",
              borderRadius: 30,
            }}
          >
            <span className="text-sm font-medium text-white ">
              UID | 1597560
            </span>
            <button style={{ backgroundColor: "transparent" }}>
              <FaRegCopy className="text-white text-base" />
            </button>
          </div>

          <div className="text-sm text-white ml-1">
            Last Login: 2025-04-11 13:05:49
          </div>
        </div>
      </div>
      <div className=" p-4" style={{ backgroundColor: "#1A0B2E" }}>
        {/* Balance Card */}
        <div
          className=" rounded-xl p-4 mb-4"
          style={{
            backgroundColor: "#1A0B2E",
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <div className="mb-2 text-left ml-5">
            <p className="text-white text-sm">Total Balance</p>
            <h2 className="text-white text-2xl font-bold">₹0.00</h2>
          </div>

          <div
            className="h-px  my-4"
            style={{ backgroundColor: "#808080" }}
          ></div>

          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className=" p-2 rounded-lg mb-1"
              >
                <img src="/assets/ARWallet.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">ARWallet</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className=" p-2 rounded-lg mb-1"
              >
                <img src="/assets/Deposit.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Deposit</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className=" p-2 rounded-lg mb-1"
              >
                <img src="/assets/Withdraw.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Withdraw</span>
            </div>

            <Link to="/vip" className="flex flex-col items-center">
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className=" p-2 rounded-lg mb-1"
              >
                <img src="/assets/Vip.png" className="h-8 w-9" alt="VIP" />
              </div>
              <span className="text-white text-xs">VIP</span>
            </Link>
          </div>
        </div>

        {/* Action Cards - First Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Card 1 */}
          <div className="bg-transparent rounded-xl p-2 flex items-center min-h-[90px] border border-gray-500 w-full">
            <div className="bg-[#D9D9D9] flex items-center justify-center p-2 rounded-lg mr-3 h-10 w-10">
              <img src="assets/homenav.png" className="h-6 w-6" />
            </div>
            <Link to="/gamehistory">
              <p className="text-white text-sm">Game History</p>
              <p className="text-gray-400 text-xs">My Game History</p>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent rounded-xl p-2 flex items-center min-h-[90px] border border-gray-500 w-full">
            <div className="bg-[#D9D9D9] flex items-center justify-center p-2 rounded-lg mr-3 h-10 w-12">
              <img src="assets/credit_card.png" className="h-6 w-6" />
            </div>
            <Link to="/transactionhistory">
              <p className="text-white text-sm">Transactions</p>
              <p className="text-gray-400 text-xs">My Transaction History</p>
            </Link>
          </div>
        </div>

        {/* Action Cards - Second Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 3 */}
          <div className="bg-transparent rounded-xl p-2 flex items-center min-h-[90px] border border-gray-500 w-full">
            <div className="bg-[#D9D9D9] flex items-center justify-center p-2 rounded-lg mr-3 h-10 w-10">
              <img src="assets/Deposit.png" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white text-sm">Deposit</p>
              <p className="text-gray-400 text-xs">My Deposit History</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-transparent rounded-xl p-2 flex items-center min-h-[90px] border border-gray-500 w-full">
            <div className="bg-[#D9D9D9] flex items-center justify-center p-2 rounded-lg mr-3 h-10 w-12">
              <img src="assets/Withdraw.png" className="h-6 w-6" />
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
          className="px-4 py-2 w-full max-w-[90%] mx-auto overflow-hidden"
          style={{
            borderWidth: 1,
            borderRadius: 12,
            backgroundColor: "#1B0831",
          }}
        >
          <div
            className="flex justify-between items-center py-3 border-b"
            style={{ borderColor: "#808080" }}
          >
            <div className="flex items-center">
              <img src="assets/notification.png" className="h-5 w-5 mr-5" />
              <span>Notifications</span>
            </div>
            <ChevronRight size={20} style={{ color: "#FFF" }} />
          </div>

          <Link
            className="flex justify-between items-center py-3 border-b"
            style={{ borderColor: "#808080" }}
            to="/accountgifts"
          >
            <div className="flex items-center">
              <img src="assets/gifts.png" className="h-5 w-5 mr-5" />
              <span>Gifts</span>
            </div>
            <ChevronRight size={20} className="text-white" />
          </Link>

          <Link
            className="flex justify-between items-center py-3 border-b "
            style={{ borderColor: "#808080" }}
            to="/gameStats"
          >
            <div className="flex items-center">
              <img src="assets/gameStat.png" className="h-5 w-5 mr-5" />
              <span>Game statistics</span>
            </div>
            <ChevronRight size={20} className="text-white" />
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
              <span className="text-sm text-white mr-2">English</span>
              <ChevronRight size={20} className="text-white" />
            </div>
          </Link>
        </div>

        {/* Service center section */}
        <div
          className="px-4 py-2 w-full max-w-[90%] mx-auto overflow-hidden mt-5 mb-5"
          style={{
            borderWidth: 1,
            borderRadius: 12,
            backgroundColor: "#1B0831",
          }}
        >
          <h2 className="text-sm font-semibold mb-2 text-left mt-2">
            SERVICE CENTER
          </h2>
          <div>
            {/* First row */}
            {/* First row */}
            <div className="flex flex-row justify-evenly  mt-4">
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
                    <div
                      style={{ backgroundColor: "#D9D9D9" }}
                      className=" p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-1"
                    >
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
                    <div
                      style={{ backgroundColor: "#D9D9D9" }}
                      className=" p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-1"
                    >
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
            className="w-full rounded-full flex items-center justify-center text-white py-3 px-6 mb-4"
            style={{
              background: "linear-gradient(90deg, #47115F 0%, #1B0831 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderWidth: 0.7,
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
