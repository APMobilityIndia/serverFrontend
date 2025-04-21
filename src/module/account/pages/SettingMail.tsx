import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function SettingMail() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendCode = () => {
    if (!email) {
      alert("Please input your email first.");
      return;
    }
    console.log("Send verification code to:", email);
    // API call here to send code
  };

  const handleBind = () => {
    console.log("Binding email:", email, "with code:", code);
    // API call to bind mailbox
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-20">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-sm text-white flex-1 text-center -ml-6">
          Bind Mailbox
        </h1>
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label className="flex items-center text-sm mb-2">
          <MdMail size={18} className="mr-2" />
          Mail
        </label>
        <input
          type="email"
          placeholder="Please input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-[#6660A4] rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Verification Code */}
      <div className="mb-8">
        <label className="flex items-center text-sm mb-2">
          <FaCheckCircle size={14} className="mr-2" />
          Verification Code
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Please enter the confirmation code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full bg-transparent border border-[#6660A4] rounded-full px-4 py-3 text-sm placeholder-gray-400 pr-20 focus:outline-none"
          />
          <button
            onClick={handleSendCode}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF922E] text-white text-sm px-4 py-1.5 rounded-full"
          >
            Send
          </button>
        </div>
      </div>

      {/* Bind Button */}
      <button
        onClick={handleBind}
        className="w-full bg-[#FF922E] rounded-full py-3 text-white font-semibold text-sm"
      >
        Bind
      </button>
    </div>
  );
}
