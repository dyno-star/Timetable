import React from "react";
import Event from "./Event";

const Calendar = () => {
  const times = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
  
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📅 Weekly Calendar</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-xl rounded-lg bg-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg">
              <th className="p-4 text-left">Time</th>
              <th className="p-4">Sunday</th>
              <th className="p-4">Monday</th>
              <th className="p-4">Tuesday</th>
              <th className="p-4">Wednesday</th>
              <th className="p-4">Thursday</th>
              <th className="p-4">Friday</th>
              <th className="p-4">Saturday</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {times.map((time, rowIndex) => (
              <tr
                key={time}
                className={`text-center border-t border-gray-200 ${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all`}
              >
                <td className="font-bold p-4 text-gray-700">{time}</td>
                {[...Array(7)].map((_, dayIndex) => (
                  <td key={dayIndex} className="p-4 relative border border-gray-200 rounded-lg">
                    {/* Insert Events with Locations */}
                    {time === "8 am" && dayIndex === 0 && <Event event="Fancy Dinner 🎩" location="The Grand Restaurant" color="green" />}
                    {time === "8 am" && dayIndex === 5 && <Event event="Yolk 🍳" location="Downtown Cafe" color="blue" />}
                    {time === "9 am" && dayIndex === 1 && <Event event="Morning Run 🏃" location="Central Park" color="pink" />}
                    {time === "9 am" && dayIndex === 6 && <Event event="Yoga 🧘" location="Wellness Studio" color="green" />}
                    {time === "10 am" && dayIndex === 2 && <Event event="Team Meeting 💼" location="Office HQ" color="blue" />}
                    {time === "10 am" && dayIndex === 6 && <Event event="Brunch 🍽️" location="Sunny Diner" color="pink" />}
                    {time === "11 am" && dayIndex === 0 && <Event event="Coffee Break ☕" location="Starbucks" color="blue" />}
                    {time === "11 am" && dayIndex === 3 && <Event event="Tech Talk 💻" location="Innovation Hub" color="green" />}
                    {time === "12 pm" && dayIndex === 1 && <Event event="Lunch with Friends 🍔" location="Burger Joint" color="pink" />}
                    {time === "12 pm" && dayIndex === 6 && <Event event="Book Club 📚" location="City Library" color="blue" />}
                    {time === "1 pm" && dayIndex === 2 && <Event event="Coding Session 👨‍💻" location="Co-Working Space" color="green" />}
                    {time === "1 pm" && dayIndex === 4 && <Event event="Project Review 📊" location="Conference Room B" color="pink" />}
                    {time === "2 pm" && dayIndex === 1 && <Event event="Client Call 📞" location="Zoom" color="blue" />}
                    {time === "2 pm" && dayIndex === 5 && <Event event="Hiking 🌲" location="Blue Ridge Trail" color="green" />}
                    {time === "3 pm" && dayIndex === 2 && <Event event="Gym Session 🏋️" location="FitLife Gym" color="pink" />}
                    {time === "3 pm" && dayIndex === 6 && <Event event="Movie Night 🎬" location="Cinema Hall" color="blue" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;