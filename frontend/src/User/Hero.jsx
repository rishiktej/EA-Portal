import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chaaya from '/flogos/ChaayaLOGO.jpg'
import ELC from '/flogos/ELClogo.jpg'
import COSC from '/flogos/LogoCOSC.png'
import Astra from '/flogos/AstraLOGO.jpg'



const Se = () => {
  // Initialize the selected date with today's date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to format the date for display in cards
  const formatDate = (date) => {
    return date.toDateString();
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 pt-0 md:p-6 lg:p-8 outline outline-4 outline-black">
      <div className="flex flex-col md:flex-row items-center justify-between my-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0">Scheduled Events</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="p-2 border rounded-lg"
          placeholderText="Select Date"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="p-4 bg-black text-white hover:scale-105 rounded-lg shadow-lg">
          <img
            src={Astra}
            alt="Event 1"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold">Event 1 on {formatDate(selectedDate)}</h3>
          <p>Details for the first event on {formatDate(selectedDate)}.</p>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-black text-white hover:scale-105 rounded-lg shadow-lg">
          <img
            src={ELC}
            alt="Event 2"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold">Event 2 on {formatDate(selectedDate)}</h3>
          <p>Details for the second event on {formatDate(selectedDate)}.</p>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-black text-white hover:scale-105 rounded-lg shadow-lg">
          <img
            src={COSC}
            alt="Event 3"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold">Event 3 on {formatDate(selectedDate)}</h3>
          <p>Details for the third event on {formatDate(selectedDate)}.</p>
        </div>
      </div>
    </div>
  );
};

  


const IconsPage = () => <div className="p-4 min-h-screen bg-green-500">Icons Content</div>;

const DocumentationPage = () => <div className="p-4 min-h-screen bg-teal-500">Documentation Content</div>;



export default Se ;
