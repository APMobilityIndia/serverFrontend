import React from "react";
import { FiChevronLeft, FiChevronRight, FiEdit2 } from "react-icons/fi"; // ✅
import { FaCopy } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // ✅
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function Settings() {
  const navigate = useNavigate();
  const { profile } = useSelector((state: RootState) => state.account);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white p-4 pb-20">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Setting Center
        </h1>
      </div>

      {/* Profile Box */}
      <div className="border border-[#6660A4] rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={profile?.avatar || "/assets/profile.png"}
              alt="Profile"
              className="w-14 h-14 rounded-full mr-3 object-cover"
            />
            <div>
              <p className="text-sm font-bold">
                {profile?.name_user || "Member"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                UID: {profile?.id_user || "-"}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => navigate("/editdetails")}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
          >
            <FiEdit2 size={18} />
          </button>
        </div>
      </div>

      {/* Security Info Section */}
      <h2 className="text-sm text-green-400 font-semibold mb-2">
        ▌Security Information
      </h2>

      <div className="space-y-3">
        {/* Login Password */}
        <Link
          to="/changepassword"
          className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3"
        >
          <div className="flex items-center">
            <span className="text-sm">Login Password</span>
          </div>
          <FiChevronRight size={18} />
        </Link>

        {/* Bind Mailbox */}
        <Link
          to="/settingmail"
          className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3"
        >
          <div className="flex items-center">
            <span className="text-sm">Bind Mailbox</span>
          </div>
          <FiChevronRight size={18} />
        </Link>

        {/* Updated Version */}
        <div className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3">
          <span className="text-sm">Updated Version</span>
          <span className="text-gray-400 text-xs">1.0.9</span>
        </div>
      </div>
    </div>
  );
}
