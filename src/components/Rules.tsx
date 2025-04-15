import React from "react";

const rulesList = [
  "The platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.",
  "MRS .singapore works with more than 10,000 online live game dealers and slot games, all of which are verified fair games.",
  "MRS .singapore supports fast deposit and withdrawal, and looks forward to your visit.",
  "Gambling can be addictive, please play rationally:",
  "MRS .singapore only accepts customers above the age of 18.",
];

const Rules: React.FC = () => {
  return (
    <div className="bg-[#1A0B2E] px-4 py-6 text-white w-full max-w-md mx-auto mb-20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline">
          <span className="text-pink-500 text-xl font-semibold mr-1">MRS</span>
          <span className="text-gray-400 text-base font-normal">
            .Singapore
          </span>
        </div>
        <div className="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          18+
        </div>
      </div>

      <ul className="space-y-4">
        {rulesList.map((rule, index) => (
          <li
            key={index}
            className="flex items-start text-sm text-gray-300 leading-tight"
          >
            <span className="text-pink-400 mr-2 text-base leading-[1] mt-1">
              ◆
            </span>
            <p className="flex-1 text-left">
              {rule.includes("MRS") ? (
                <>
                  <span className="text-pink-400 font-semibold">MRS</span>
                  <span className="text-gray-400 font-normal"> .singapore</span>
                  {rule.split("singapore")[1]}
                </>
              ) : (
                rule
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
