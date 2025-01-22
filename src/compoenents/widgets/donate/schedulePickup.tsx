import getDateRanges from "../../utils";


const SchedulePickup = ({setCurrent,notes, setNotes,selectedRange, setSelectedRange}:any) => {
    const dateRanges = getDateRanges();

  const handleSelectRange = (rangeId:any) => {
    setSelectedRange(rangeId);
  };

  return (
   
      <div className="text-black flex w-full items-center flex-col">
    <h1 className="text-primary font-bold text-lg uppercase"> Choose a Pickup Date</h1>
    <p className="text-base mt-2 text-center">
    Your donation pickup will be done on a day within your chosen range.
    </p>
      <div className="grid my-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {dateRanges.map((range) => (
          <div
            key={range.id}
            onClick={() => handleSelectRange(range.id)}
            className={`cursor-pointer p-4 rounded-lg border border-gray-300 text-center text-sm transition-all hover:shadow-lg ${
              selectedRange === range.id
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <p className="text-sm font-semibold">{range.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 w-full">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="pickup-notes">
          Notes for Pickup Person 
        </label>
        <textarea
          id="pickup-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter any special instructions for the pickup..."
          className="w-full p-4 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          rows={4}
        />
      </div>

      <div className="flex w-full justify-between mt-8">
            <button
              className={`px-4 py-2 rounded-md bg-primary text-white`}
              onClick={() => setCurrent(3)}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md  bg-primary text-white`}
              onClick={() => console.log("api")}
            >
              Submit
            </button>
          </div>
    </div>
  );
};

export default SchedulePickup;
