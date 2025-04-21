import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCopy, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Settings() {
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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="w-14 h-14 rounded-full mr-3 object-cover"
            />
            <span className="text-sm text-white">Change Avatar</span>
          </div>
          <FiChevronRight size={20} />
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-300">Nickname</div>
          <div className="flex items-center">
            <span className="text-sm text-white font-medium mr-1">
              MEMBERNNG9ADSF
            </span>
            <FiChevronRight size={18} />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-300">UID</div>
          <div className="flex items-center">
            <span className="text-white mr-2">1597560</span>
            <FaCopy size={14} />
          </div>
        </div>
      </div>

      {/* Security Info Section */}
      <h2 className="text-sm text-green-400 font-semibold mb-2">
        ▌Security Information
      </h2>

      {/* Security List */}
      <div className="space-y-3">
        {/* Login Password */}
        <Link
          className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3"
          to="/changepassword"
        >
          <div className="flex items-center">
            <FaLock size={16} className="mr-3 text-white" />
            <span className="text-sm">Login Password</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            Edit <FiChevronRight size={16} className="ml-2" />
          </div>
        </Link>

        {/* Bind Mailbox */}
        <Link
          className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3"
          to="/settingmail"
        >
          <div className="flex items-center">
            <MdEmail size={16} className="mr-3 text-white" />
            <span className="text-sm">Bind Mailbox</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            To Bind <FiChevronRight size={16} className="ml-2" />
          </div>
        </Link>

        {/* Updated Version */}
        <div className="flex items-center justify-between border border-[#6660A4] rounded-lg p-3">
          <div className="flex items-center">
            <AiOutlineInfoCircle size={16} className="mr-3 text-white" />
            <span className="text-sm">Updated Version</span>
          </div>
          <div className="text-sm text-gray-300">1.0.9</div>
        </div>
      </div>
    </div>
  );
}
