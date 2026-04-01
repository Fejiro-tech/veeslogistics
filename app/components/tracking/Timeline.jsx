import React from "react";

const Timeline = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return <p>No timeline available</p>;
  }

  return (
    <div>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold text-[#1535A0] mb-3">
          Timeline
        </h3>
        <hr className="border-gray-300 mb-4" />

        <div className="flex flex-col">
         {timeline.map((step, i) => (
  <div key={i} className="flex gap-4 relative">
    <div className="flex flex-col items-center">
      
      {/* Dot - always green */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 bg-green-500">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7L5.5 10.5L12 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Line - always green */}
      {i < timeline.length - 1 && (
        <div className="w-0.5 h-full min-h-6 bg-green-500" />
      )}
    </div>

    {/* Content */}
    <div className="pb-6">
      <p className="font-bold text-sm text-gray-800">
        {step.status}
      </p>
      {step.time && (
        <p className="text-xs text-gray-400 mt-1">
          {step.date} — {step.time} — {step.location}
        </p>
      )}
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;