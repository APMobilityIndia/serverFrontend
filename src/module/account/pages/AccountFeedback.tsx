import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function AccountFeedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!feedback.trim()) {
      alert("Please enter your feedback before submitting.");
      return;
    }

    console.log("Feedback submitted:", feedback);
    // Add API logic here if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-20">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-sm flex-1 text-center -ml-6">Feedback</h1>
      </div>

      {/* Feedback Input Box */}
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Welcome to Feedback, tell us what you feel about us."
        className="w-full h-40 bg-transparent border border-[#6660A4] rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none resize-none mb-8"
      />

      {/* Info Text */}
      <div className="text-center text-sm mb-1">Send helpful Feedbacks</div>
      <div className="text-center text-xs text-gray-400 mb-6">
        Chance to win Mystery Rewards
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF922E] rounded-full py-3 text-white font-semibold text-sm"
      >
        Submit
      </button>
    </div>
  );
}
