import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import { getWithdrawHistory } from "../redux/walletApi";
import { RootState } from "../../../redux/store";

const WalletWithdrawHistory = () => {
  const dispatch = useDispatch();
  const { withdrawHistory, loading } = useSelector(
    (state: RootState) => state.wallet
  );

  useEffect(() => {
    dispatch(getWithdrawHistory())
      .then((response: any) => {
        console.log("🚀 Withdrawal History Response:", response);
      })
      .catch((err: any) => {
        console.error("❌ Error fetching withdrawal history:", err);
      });
  }, [dispatch]);

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto mb-15">
      {/* Header */}
      {/* <div className="flex items-center justify-between py-2 border-b border-gray-600">
        <FiArrowLeft size={20} />
        <span>Withdrawal History</span>
        <span></span>
      </div> */}

      <div className="grid grid-cols-3 gap-3 mt-4 mb-4">
        {["manualupi.png", "gatewayupi.png", "usdt.png"].map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md overflow-hidden text-center py-2"
          >
            <img
              src={`/assets/${img}`}
              alt="method"
              className="w-full h-10 object-contain"
            />
            <p className="text-sm text-black">
              {idx === 0
                ? "Manual UPI-QR"
                : idx === 1
                ? "Payment Gateway"
                : "USDT"}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-between my-4">
        <div className="relative w-[48%]">
          <button className="w-full flex justify-between items-center px-4 py-2 border border-gray-500 rounded-md bg-transparent text-sm">
            All
            <FiChevronDown size={18} />
          </button>
        </div>
        <div className="relative w-[48%]">
          <button className="w-full flex justify-between items-center px-4 py-2 border border-gray-500 rounded-md bg-transparent text-sm">
            Choose a date
            <FiChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* History Section */}
      <div className="text-lg font-bold mb-2">Withdrawal History</div>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : withdrawHistory.length === 0 ? (
        <p className="text-center text-gray-400">
          No withdrawal history available.
        </p>
      ) : (
        withdrawHistory.map((item: any, idx: number) => (
          <div
            key={item._id || idx}
            className="border border-white-600 rounded-md p-4 mb-4"
          >
            <div className="flex justify-between mb-4">
              <span
                style={{
                  backgroundColor: "#FF922E",
                  color: "#fff",
                  fontWeight: "normal",
                  fontSize: 14,
                  letterSpacing: 0.7,
                }}
                className="text-xs text-white px-4 py-2 rounded-full"
              >
                Withdraw
              </span>
              <span style={{ color: "#FF922E" }} className="text-lg">
                {item.status}
              </span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Balance:</span>
              <span className="text-red-400 font-bold">
                ₹{item.amount?.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Type:</span>
              <span>{item.method}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Date:</span>
              <span>{new Date(item.createdAt).toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Order ID:</span>
              <span>{item._id}</span>
            </div>

            {item.adminNote && (
              <div className="text-xs text-gray-400 mb-1">
                Admin Note: {item.adminNote}
              </div>
            )}
          </div>
        ))
      )}

      <div className="text-center text-gray-400 text-sm mb-4">No More</div>
    </div>
  );
};

export default WalletWithdrawHistory;
