import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiBell, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const token = useSelector((state: any) => state.auth?.token);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("usd");

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    setShowCurrencyDropdown(false);
  };

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
    setShowLanguageDropdown(false);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const selectCurrency = (curr: string) => {
    setCurrency(curr);
    setShowCurrencyDropdown(false);
  };

  return (
    <div
      style={{ backgroundColor: "#1A0B2E" }}
      className="p-4 flex items-center justify-between space-x-4 md:space-x-32" // Adjusted space-x
    >
      <div>
        <img
          src="/assets/mbs_logo.png"
          alt="MBS Logo"
          className="w-20 h-20 object-cover"
        />
      </div>
      {token ? (
        <div className="flex items-center space-x-2 mr-4">
          {/* Language Dropdown */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer text-white border border-purple-500 rounded-md px-2 py-1"
              onClick={toggleLanguageDropdown}
            >
              <div className="w-6 h-4 mr-1 overflow-hidden">
                <img
                  src={
                    language === "en"
                      ? "/assets/langauge.png"
                      : "/assets/langauge.png"
                  }
                  alt={language === "en" ? "USA Flag" : "India Flag"}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{language === "en" ? "English" : "Hindi"}</span>
              <FiChevronDown className="ml-1" />
            </div>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-purple-900 rounded-md shadow-lg overflow-hidden z-10 border border-purple-500">
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectLanguage("en")}
                >
                  <div className="w-6 h-4 mr-2 overflow-hidden">
                    <img
                      src="/assets/usa_flag.png"
                      alt="USA Flag"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>English</span>
                </div>
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectLanguage("hi")}
                >
                  <div className="w-6 h-4 mr-2 overflow-hidden">
                    <img
                      src="/assets/india_flag.png"
                      alt="India Flag"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>Hindi</span>
                </div>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer text-white border border-purple-500 rounded-md px-2 py-1"
              onClick={toggleCurrencyDropdown}
            >
              <div className="w-6 h-4 mr-1 overflow-hidden">
                <img
                  src={
                    currency === "usd"
                      ? "/assets/usa_flag.png"
                      : "/assets/india_flag.png"
                  }
                  alt={currency === "usd" ? "USA Flag" : "India Flag"}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{currency === "usd" ? "$" : "₹"}</span>
              <FiChevronDown className="ml-1" />
            </div>

            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-purple-900 rounded-md shadow-lg overflow-hidden z-10 border border-purple-500">
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectCurrency("usd")}
                >
                  <div className="w-6 h-4 mr-2 overflow-hidden">
                    <img
                      src="/assets/usa_flag.png"
                      alt="USA Flag"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>USD ($)</span>
                </div>
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectCurrency("inr")}
                >
                  <div className="w-6 h-4 mr-2 overflow-hidden">
                    <img
                      src="/assets/india_flag.png"
                      alt="India Flag"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>INR (₹)</span>
                </div>
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <img
            src="/assets/notification.png"
            alt="Notification"
            className="w-5 h-5 object-contain"
          />
          {/* <FiBell size={24} className="text-white" /> */}
        </div>
      ) : (
        <div className="flex space-x-2 flex-row">
          <div className="p-[1px] bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-lg whitespace-nowrap">
            {" "}
            {/* Added whitespace-nowrap */}
            <Link
              to="/login"
              className="block px-4 md:px-6 py-2 bg-gray-900 text-white border border-purple-500 rounded-lg" // Adjusted padding
            >
              Login
            </Link>
          </div>
          <div className="p-[1px] bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-lg whitespace-nowrap">
            {" "}
            {/* Added whitespace-nowrap */}
            <Link
              to="/register"
              className="block px-4 md:px-6 py-2 bg-gray-900 text-white border border-purple-500 rounded-lg" // Adjusted padding
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
