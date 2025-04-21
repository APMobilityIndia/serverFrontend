import React, { useState } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

const InvitationRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">
            Promotion Partner Program
          </h1>
          <p className="text-sm text-gray-400">
            This activity is valid for a long time
          </p>
        </div>

        {/* Rule 1 */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1">
              01
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              There are 6 subordinate levels in inviting friends. If A invites
              B, then B is a level 1 subordinate of A. If B invites C, then C is
              a level 1 subordinate of B and also a level 2 subordinate of A. If
              C invites D, then D is a level 1 subordinate of C, at the same
              time a level 2 subordinate of B and also a level 3 subordinate of
              A.
            </p>
          </div>
        </div>

        {/* Rule 2 */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1">
              02
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              When inviting friends to register, you must send the invitation
              link provided or enter the invitation code manually so that your
              friends become your level 1 subordinates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InvitationRules };
