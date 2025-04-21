import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white pb-20">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-sm flex-1 text-center -ml-6">About Us</h1>
      </div>

      {/* Banner Image */}
      <div className="w-full mb-6">
        <img
          src="/assets/about-banner.jpg" // Replace with your actual banner image
          alt="About Banner"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Options */}
      <div className="px-4 space-y-4">
        {/* Confidentiality */}
        <Link
          className="flex items-center justify-between border border-[#6660A4] rounded-full px-4 py-3"
          to="/agreementconfidentiality"
        >
          <span className="text-sm">Confidentiality agreement</span>
          <FiChevronRight size={18} className="text-white" />
        </Link>

        {/* Risk Disclosure */}
        <div className="flex items-center justify-between border border-[#6660A4] rounded-full px-4 py-3">
          <span className="text-sm">Risk disclosure agreement</span>
          <FiChevronRight size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
}
