import React from "react";

const Event = ({ event, location, color }) => {
  return (
    <div
      className="p-2 rounded-lg text-white text-sm font-semibold shadow-md"
      style={{ backgroundColor: color }}
    >
      <h5>{event}</h5>
      {location && <p className="text-xs font-normal opacity-80">{location}</p>}
    </div>
  );
};

export default Event;