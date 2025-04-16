import React from "react";

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
}) => {
  return (
    <div className="flex gap-4">
      <div className="p-4 text-center bg-white rounded">
        <div className="text-3xl font-semibold text-green-900">
          {days.toString().padStart(2, "0")}
        </div>
        <div className="text-base font-medium text-green-900">Days</div>
      </div>
      <div className="p-4 text-center bg-white rounded">
        <div className="text-3xl font-semibold text-green-900">
          {hours.toString().padStart(2, "0")}
        </div>
        <div className="text-base font-medium text-green-900">Hours</div>
      </div>
      <div className="p-4 text-center bg-white rounded">
        <div className="text-3xl font-semibold text-green-900">
          {minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-base font-medium text-green-900">Min</div>
      </div>
    </div>
  );
};
