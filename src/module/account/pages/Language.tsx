import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function Language() {
  const [selected, setSelected] = useState("en");

  const languages = [
    { code: "en", label: "English", flag: "/assets/usa_flag.png" },
    { code: "hi", label: "हिंदी", flag: "/assets/india_flag.png" },
    { code: "en2", label: "English", flag: "/assets/india_flag.png" },
    { code: "en3", label: "English", flag: "/assets/india_flag.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-12">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Language
        </h1>
      </div>

      {/* Language Options */}
      <div className="space-y-3">
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            className={`flex items-center justify-between px-4 py-3 rounded-md border border-[#6660A4] cursor-pointer ${
              selected === lang.code ? "bg-[#2F124F]" : "bg-transparent"
            }`}
          >
            <div className="flex items-center">
              <img src={lang.flag} alt={lang.label} className="w-6 h-4 mr-3" />
              <span className="text-sm">{lang.label}</span>
            </div>
            {selected === lang.code ? (
              <FaCheckCircle className="text-green-400" size={18} />
            ) : (
              <div className="w-4 h-4 rounded-full border border-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
