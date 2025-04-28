import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

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
      className="p-4 flex items-center justify-between space-x-4 md:space-x-32"
    >
      <div>
        <img
          src="/assets/mbs_logo.png"
          alt="MBS Logo"
          className="w-12 h-12 object-contain" // Reduced size from w-20 h-20
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
              <div className="w-5 h-3.5 mr-1 overflow-hidden">
                <img
                  src="/assets/langauge.png"
                  alt="Language Flag"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm">
                {language === "en" ? "English" : "Hindi"}
              </span>
              <FiChevronDown className="ml-1 text-sm" />
            </div>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-purple-900 rounded-md shadow-lg overflow-hidden z-10 border border-purple-500">
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectLanguage("en")}
                >
                  <img
                    src="/assets/usa_flag.png"
                    alt="USA Flag"
                    className="w-5 h-3.5 mr-2 object-contain"
                  />
                  <span className="text-sm">English</span>
                </div>
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectLanguage("hi")}
                >
                  <img
                    src="/assets/india_flag.png"
                    alt="India Flag"
                    className="w-5 h-3.5 mr-2 object-contain"
                  />
                  <span className="text-sm">Hindi</span>
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
              <img
                src={
                  currency === "usd"
                    ? "/assets/usa_flag.png"
                    : "/assets/india_flag.png"
                }
                alt="Currency Flag"
                className="w-5 h-3.5 mr-1 object-contain"
              />
              <span className="text-sm">{currency === "usd" ? "$" : "₹"}</span>
              <FiChevronDown className="ml-1 text-sm" />
            </div>

            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-purple-900 rounded-md shadow-lg overflow-hidden z-10 border border-purple-500">
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectCurrency("usd")}
                >
                  <img
                    src="/assets/usa_flag.png"
                    alt="USA Flag"
                    className="w-5 h-3.5 mr-2 object-contain"
                  />
                  <span className="text-sm">USD ($)</span>
                </div>
                <div
                  className="flex items-center px-4 py-2 text-white hover:bg-purple-800 cursor-pointer"
                  onClick={() => selectCurrency("inr")}
                >
                  <img
                    src="/assets/india_flag.png"
                    alt="India Flag"
                    className="w-5 h-3.5 mr-2 object-contain"
                  />
                  <span className="text-sm">INR (₹)</span>
                </div>
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <img
            src="/assets/notification.png"
            alt="Notification"
            className="w-4 h-4 object-contain"
          />
        </div>
      ) : (
        <div className="flex space-x-2 flex-row">
          <div className="p-[1px] bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-lg">
            <Link
              to="/login"
              className="block px-3 py-1.5 text-sm bg-gray-900 text-white border border-purple-500 rounded-md"
            >
              Login
            </Link>
          </div>
          <div className="p-[1px] bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-lg">
            <Link
              to="/register"
              className="block px-3 py-1.5 text-sm bg-gray-900 text-white border border-purple-500 rounded-md"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
