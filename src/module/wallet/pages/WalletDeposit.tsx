import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getActiveChannel,
  getUserBankAccount,
  addWithdrawalRequest,
} from "../redux/walletApi";
import { RootState } from "../../../redux/store";

const WalletDeposit = () => {
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    null
  );
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const activeChannel = useSelector(
    (state: RootState) => state.wallet.activeChannel
  );
  const bankAccountId = useSelector(
    (state: any) => state.wallet.bankDetails?.bankAccounts?.[0]?._id
  );

  useEffect(() => {
    dispatch(getActiveChannel());
    dispatch(getUserBankAccount());
  }, [dispatch]);

  const depositChannels = activeChannel?.filter(
    (channel: any) => channel.channelType === "deposit"
  );

  const selectedChannel = depositChannels?.find(
    (c: any) => c._id === selectedChannelId
  );

  const predefinedAmounts = [
    "200",
    "500",
    "800",
    "1000",
    "2000",
    "3000",
    "5000",
    "10000",
    "20000",
    "30000",
    "40000",
    "50000",
  ];

  const handleSubmit = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) < 1) {
      return alert("Please enter a valid amount to withdraw.");
    }
    if (!bankAccountId) {
      return alert("No bank account found. Please add one first.");
    }
    dispatch(
      addWithdrawalRequest({
        bankAccountId,
        money: Number(amount),
      })
    ).then((res: any) => {
      console.log("✅ Withdrawal Response:", res);
    });
  };

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between py-2 border-b border-gray-600 -mt-5">
        <Link to="/walletdeposithistory">
          <span className="text-sm text-purple-400 ml-50">Deposit History</span>
        </Link>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-[#B00341] to-[#FF922E] rounded-xl p-4 mt-4 mb-4 text-white shadow-lg h-40">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Balance</p>
            <h2 className="text-2xl font-bold mt-2">₹0.00</h2>
            <img src="/assets/card.png" className="h-10 w-10 mt-10" />
          </div>
          <div className="text-right text-lg font-semibold mt-20">
            **** ****
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {depositChannels?.map((channel: any) => (
          <div
            key={channel._id}
            onClick={() => setSelectedChannelId(channel._id)}
            className={`rounded-md text-center py-2 cursor-pointer ${
              selectedChannelId === channel._id ? "bg-purple-300" : "bg-white"
            }`}
          >
            <img
              src={channel.logo}
              alt={channel.title}
              className="w-full h-10 object-contain"
            />
            <p className="text-sm text-black">{channel.title}</p>
          </div>
        ))}
      </div>

      {/* SubChannel Selection */}
      {selectedChannel?.subChannels?.length > 0 && (
        <div className="border border-purple-500 rounded-md p-3 mb-6">
          <h3 className="text-sm text-yellow-500 mb-2">Select SubChannel</h3>
          <div className="flex gap-2 overflow-auto">
            {selectedChannel.subChannels.map((sub: any) => (
              <div
                key={sub._id}
                className="p-3 rounded-md text-center bg-purple-800 text-white w-40 flex-shrink-0"
              >
                <img
                  src={sub.meta.qrImage}
                  alt="QR"
                  className="h-20 w-full object-contain rounded mb-2"
                />
                <p className="text-xs">ID: {sub._id.slice(-6)}</p>
                <p className="text-xs">Priority: {sub.priority}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deposit Amount */}
      <div className="border border-purple-500 rounded-md p-3 mb-6">
        <h3 className="text-sm mb-3">💳 Withdrawal Amount</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {predefinedAmounts.map((amt) => (
            <div
              key={amt}
              className={`border text-center py-2 rounded-md text-sm cursor-pointer transition duration-150 ${
                amount === amt
                  ? "bg-orange-500 text-white border-transparent"
                  : "border-gray-500"
              }`}
              onClick={() => setAmount(amt)}
            >
              ₹{Number(amt).toLocaleString()}
            </div>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="₹200.00 - 50000.00"
            className="w-full rounded-md p-3 text-black"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amount && (
            <FiX
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
              onClick={() => setAmount("")}
            />
          )}
        </div>
        <button
          className="mt-4 w-full bg-orange-500 py-3 rounded-full font-semibold text-white"
          onClick={handleSubmit}
        >
          Withdraw
        </button>
      </div>

      {/* Rules */}
      <div className="border border-purple-500 rounded-md p-4 mb-10">
        <div className="text-xs text-orange-400 font-semibold mb-1">Rule</div>
        <p className="text-sm text-gray-300 italic mb-1">
          Recharge instructions
        </p>
        <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
          <li>
            If the transfer time is up, please fill out the deposit form again.
          </li>
          <li>
            The transfer amount must match the order you created, otherwise the
            money cannot be credited successfully.
          </li>
          <li>
            If you transfer the wrong amount, our company will not be
            responsible for the lost amount!
          </li>
          <li>
            Note: do not cancel the deposit order after the money has been
            transferred.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletDeposit;
