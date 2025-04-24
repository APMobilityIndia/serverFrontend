import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { getUserBankAccount, updateUserBankAccount } from "../redux/walletApi";

function WalletUpdateBank() {
  const dispatch = useDispatch();
  const bankDetails = useSelector(
    (state: RootState) => state.wallet.bankDetails.bankAccounts
  );
  const bank = bankDetails?.[0];

  const [formData, setFormData] = useState({
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    recipientName: "",
    phoneNumber: "",
    isPrimary: true,
  });

  useEffect(() => {
    dispatch(getUserBankAccount());
  }, [dispatch]);

  useEffect(() => {
    if (bank) {
      setFormData({
        accountNumber: bank.accountNumber,
        ifscCode: bank.ifscCode,
        bankName: bank.bankName,
        recipientName: bank.recipientName,
        phoneNumber: bank.phoneNumber,
        isPrimary: bank.isPrimary,
      });
    }
  }, [bank]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { accountNumber, ifscCode, bankName, recipientName, phoneNumber } =
      formData;

    if (
      !accountNumber ||
      !ifscCode ||
      !bankName ||
      !recipientName ||
      !phoneNumber
    ) {
      alert("All fields except 'Set as primary account' are required.");
      return;
    }

    dispatch(updateUserBankAccount({ id: bank._id, formData }))
      .unwrap()
      .then(() => {
        alert("Bank account updated successfully!");
        dispatch(getUserBankAccount());
      })
      .catch((err) => {
        console.error("❌ Update failed:", err);
        alert("Failed to update bank account.");
      });
  };

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center">
        Update Bank Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-2xl p-6 text-black"
      >
        {[
          { label: "Account Number", name: "accountNumber" },
          { label: "IFSC Code", name: "ifscCode" },
          { label: "Bank Name", name: "bankName" },
          { label: "Recipient Name", name: "recipientName" },
          { label: "Phone Number", name: "phoneNumber" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-semibold mb-1 text-left">
              {label}
            </label>
            <input
              type="text"
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full border-b border-gray-500 focus:outline-none focus:border-purple-600 p-2"
              required
            />
          </div>
        ))}

        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="isPrimary"
            checked={formData.isPrimary}
            onChange={handleChange}
          />
          <label htmlFor="isPrimary" className="text-sm text-black">
            Set as primary account
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 py-2 rounded-full text-white font-semibold mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default WalletUpdateBank;
