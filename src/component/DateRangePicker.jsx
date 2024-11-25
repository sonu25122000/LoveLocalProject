import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // Main styles
import "react-date-range/dist/theme/default.css"; // Theme styles
import { CiCalendar } from "react-icons/ci";

const DateRangePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date("2022-10-15"),
    endDate: new Date("2022-10-31"),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    setShowCalendar(false); // Close calendar on selection
  };

  return (
    <div className="relative w-max">
      {/* Date Range Display */}
      <div
        className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <div className="flex items-center gap-3 text-gray-700">
          <CiCalendar size={20} />
          {`${format(dateRange.startDate, "MMM dd, yyyy")} - ${format(
            dateRange.endDate,
            "MMM dd, yyyy"
          )}`}
        </div>
      </div>

      {/* Calendar */}
      {showCalendar && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={[dateRange]}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
