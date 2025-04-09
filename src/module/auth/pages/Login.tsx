import { useState } from "react";
import {
  FiChevronDown,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiChevronLeft,
  FiCheck,
} from "react-icons/fi"; // Feather icons
import { FaMobileAlt } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { FaIdCardClip } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

import { IoMdLock } from "react-icons/io";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full max-w-md mx-auto">
      {/* Header */}
      <div
        style={{ backgroundColor: "#040b24" }}
        className="bg-blue-950 p-4 flex items-center w-full"
      >
        <div className="flex-1 text-center">
          <div className="font-bold text-3xl italic inline">Jalwa.</div>
          <div className="font-bold text-lg italic inline">Game</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
            <img
              src="/assets/usa_flag.png"
              alt="US Flag"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm">EN</span>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{ backgroundColor: "#040b24" }}
        className="flex-1 px-6 pt-6 pb-8 flex flex-col bg-blue-950 w-full"
      >
        <div
          style={{ backgroundColor: "#1c274f" }}
          className="w-full px-6 py-4"
        >
          <h1 className="!text-lg font-bold mb-1">Login</h1>
          <p className="text-sm text-gray-300 mb-6">
            Please log in with your phone .If you forget your password, please
            contact customer service
          </p>
        </div>

        {/* Phone registration section */}
        <div className="w-full mb-2 flex items-center justify-center mt-4">
          <FaMobileAlt size={25} color="#2dd4bf" />
        </div>

        <div className="text-center text-teal-400 font-medium mb-2">
          Phone Number
        </div>
        <div className="border-b border-teal-400 mb-6 w-full"></div>

        {/* Form fields */}
        <div className="space-y-4 w-full">
          {/* Phone input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <FaMobileAlt size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Phone number</div>
          </div>
          <div className="flex mb-4 w-full">
            <div className="bg-blue-900 rounded-l-lg px-4 py-3 flex items-center border-r border-blue-800">
              <span>+91</span>
              <FiChevronDown size={16} className="ml-2" />
            </div>
            <input
              type="text"
              placeholder="Please enter the phone number"
              className="bg-blue-900 rounded-r-lg px-4 py-3 flex-1 outline-none text-gray-300 w-full"
            />
          </div>

          {/* Password input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <IoMdLock size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Password</div>
          </div>
          <div className="relative mb-4 w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Set password"
              className="bg-blue-900 rounded-lg px-4 py-3 w-full outline-none text-gray-300"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-center mb-8">
            <div
              onClick={() => setAgreed(!agreed)}
              className="w-6 h-6 rounded-full text-teal-400"
            >
              {agreed ? (
                <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <FiCheck size={16} className="text-blue-950" />
                </div>
              ) : (
                <div className="w-6 h-6 border border-teal-400 rounded-full"></div>
              )}
            </div>
            <span className="ml-2 text-sm">Remember password</span>
          </div>

          {/* Login button */}
          <div className="w-full bg-gradient-to-b from-teal-400 to-teal-700 text-blue-950 font-bold py-3 rounded-full mb-6 text-center">
            Log in
          </div>

          {/* Login link */}
          <div className="text-center w-full">
            <div className="text-white border border-teal-400 rounded-full w-full py-3">
              <span className="text-teal-400">Register</span>
            </div>
          </div>

          {/* Forgot Password */}

          <div className="flex items-center gap-35">
            <div className="text-center">
              <IoMdLock size={40} color="#2dd4bf" />
              <div>Forgot password</div>
            </div>
            <div className="text-center">
              <RiCustomerServiceFill size={40} color="#2dd4bf" />
              <div>Customer Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
