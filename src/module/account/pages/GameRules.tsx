import { FiChevronLeft } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

export default function GameRules() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-20">
      {/* Attendance Table */}
      <div className="rounded-lg overflow-hidden mb-6 border border-[#6660A4] bg-[#2F124F]">
        <div className="grid grid-cols-3 text-xs font-medium text-center bg-[#3A1A5D]">
          <div className="py-2">Continuous attendance</div>
          <div className="py-2">Accumulated amount</div>
          <div className="py-2">Attendance bonus</div>
        </div>
        {[
          ["1", "₹200.00", "₹5.00"],
          ["2", "₹1000.00", "₹18.00"],
          ["3", "₹3000.00", "₹100.00"],
          ["4", "₹10000.00", "₹200.00"],
          ["5", "₹100000.00", "₹3000.00"],
          ["6", "₹200000.00", "₹7000.00"],
        ].map(([day, amount, bonus], index) => (
          <div
            key={index}
            className={`grid grid-cols-3 text-xs text-center py-1.5 ${
              index % 2 === 0 ? "bg-[#2F124F]" : "bg-[#3A1A5D]"
            }`}
          >
            <div className="py-2">{day}</div>
            <div className="py-2">{amount}</div>
            <div className="py-2">{bonus}</div>
          </div>
        ))}
      </div>

      {/* Rules Section */}
      <div className="bg-[#2F124F] border border-[#6660A4] rounded-xl p-4 relative mb-10">
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 bg-[#FF922E] text-[#fff] font-bold px-4 py-1.5 rounded-bl-3xl rounded-br-3xl text-sm w-25">
          Rule
        </div>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white list-none mt-10">
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            The higher the number of consecutive login days, the more rewards
            you get, up to 7 consecutive days
          </li>
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            During the activity, please check once a day
          </li>
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            Players with no deposit history cannot claim the bonus
          </li>
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            Deposit requirements must be met from day one
          </li>
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            The platform reserves the right to final interpretation of this
            activity
          </li>
          <li className="flex items-start">
            <FaCircle className="text-[#FF922E] text-[6px] mt-2 mr-2" />
            When you encounter problems, please contact customer service.
          </li>
        </ul>
      </div>
    </div>
  );
}
