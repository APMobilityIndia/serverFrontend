import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { updateUserProfile, getUserProfile } from "../redux/accountApi";
import { useNavigate } from "react-router-dom";

export default function EditDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { profile } = useSelector((state: RootState) => state.account);

  const [localName, setLocalName] = useState(profile?.name_user || "");
  const [localAvatar, setLocalAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLocalAvatar(file);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name_user", localName);
      if (localAvatar) {
        formData.append("avatar", localAvatar);
      } else {
        formData.append("avatar", ""); // must send avatar field
      }

      setLoading(true);
      await dispatch(updateUserProfile(formData));
      dispatch(getUserProfile());
      alert("✅ Profile updated successfully!");
      navigate("/settings"); // Go back
    } catch (error) {
      console.error("Profile update failed", error);
      alert("❌ Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white p-4">
      <h1 className="text-lg font-bold mb-6 text-center">Edit Details</h1>

      {/* Avatar Preview */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={
            localAvatar
              ? URL.createObjectURL(localAvatar)
              : profile?.avatar || "/assets/profile.png"
          }
          alt="Avatar Preview"
          className="w-24 h-24 rounded-full object-cover mb-3"
        />
        <label
          htmlFor="avatar-upload"
          className="bg-purple-600 px-4 py-2 rounded-full cursor-pointer"
        >
          Change Avatar
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          style={{ display: "none" }}
        />
      </div>

      {/* Nickname Input */}
      <div className="mb-6">
        <label className="block mb-1 text-sm">Nickname</label>
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          className="w-full p-3 rounded-md bg-transparent border border-purple-600 text-white"
          placeholder="Enter your name"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-full font-semibold hover:opacity-90"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
