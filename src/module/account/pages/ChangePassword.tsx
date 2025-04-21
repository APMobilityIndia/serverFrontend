import { useState } from "react";
import { FiChevronLeft, FiEyeOff, FiEye, FiChevronRight } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const handleSubmit = () => {
    console.log("Old:", currentPassword);
    console.log("New:", newPassword);
    console.log("Confirm:", confirmPassword);
    // Add validation + API call
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-10">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-sm text-blue-400 flex-1 text-center -ml-6">
          Change Login Password
        </h1>
      </div>

      {/* Password Inputs */}
      <div className="space-y-5 mb-4">
        {/* Current Password */}
        <div>
          <label className="flex items-center text-sm mb-1">
            <FaLock size={14} className="mr-2" /> Login Password
          </label>
          <div className="relative">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Login Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-[#1B002C] border border-[#6660A4] rounded-full px-4 py-2 text-sm placeholder-gray-400 pr-10 focus:outline-none"
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="flex items-center text-sm mb-1">
            <FaLock size={14} className="mr-2" /> New Login Password
          </label>
          <div className="relative">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="New Login Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#1B002C] border border-[#6660A4] rounded-full px-4 py-2 text-sm placeholder-gray-400 pr-10 focus:outline-none"
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="flex items-center text-sm mb-1">
            <FaLock size={14} className="mr-2" /> Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showPassword3 ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#1B002C] border border-[#6660A4] rounded-full px-4 py-2 text-sm placeholder-gray-400 pr-10 focus:outline-none"
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword3(!showPassword3)}
            >
              {showPassword3 ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Link */}
      <div className="text-right text-xs text-gray-300 mb-8 cursor-pointer">
        Forgot original login password{" "}
        <FiChevronRight className="inline" size={12} />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF922E] text-white font-semibold py-3 rounded-full text-sm"
      >
        Save Changes
      </button>
    </div>
  );
}
