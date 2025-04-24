import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveChannel, getUserBankAccount } from "../redux/walletApi";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

function WalletBankDetails() {
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    null
  );
  const dispatch = useDispatch();

  const activeChannel = useSelector(
    (state: RootState) => state.wallet.activeChannel
  );
  const bankDetails = useSelector(
    (state: any) => state.wallet.bankDetails.bankAccounts
  );
  console.log("bankDetails", bankDetails);

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

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto">
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-[#B00341] to-[#FF922E] rounded-4xl p-4 mt-4 mb-4 text-white shadow-lg h-40">
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

      {/* Note */}
      <div className="bg-[#FF922E] rounded-4xl p-4 mt-4 mb-4 text-white shadow-lg text-xs font-bold">
        Supports UPI For Fast Payment, and bonuses for Withdrawals
      </div>

      {/* Payment Channels */}
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

      {/* SubChannels */}
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

      {/* Bank Details */}
      <div className="border border-gray-600 rounded-4xl p-4 bg-[#fff]">
        {bankDetails?.length > 0 ? (
          <>
            {bankDetails.map((bank: any) => (
              <div key={bank._id} className="text-sm mb-3 text-black">
                <p className="mb-2">
                  <span className="font-semibold">Bank Name:</span>{" "}
                  {bank.bankName}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Account No:</span>{" "}
                  {bank.accountNumber}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">IFSC:</span> {bank.ifscCode}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Recipient's Name:</span>{" "}
                  {bank.recipientName}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Phone:</span>{" "}
                  {bank.phoneNumber}
                </p>
              </div>
            ))}
            <Link
              className="bg-orange-500 text-white w-full py-2 rounded-full font-semibold mt-3 px-10"
              to="/walletUpdateBank"
            >
              Update Bank Account
            </Link>
          </>
        ) : (
          <>
            <p className="text-black text-sm mb-4 text-center font-semibold">
              No bank account found.
            </p>
            <Link
              className="bg-orange-500 text-white w-full py-2 rounded-full font-semibold px-10"
              to="/walletAddBank"
            >
              Add Bank Account
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default WalletBankDetails;
