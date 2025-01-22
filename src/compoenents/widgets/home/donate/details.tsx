
const Details = ({itemDetails,setItemDetails,setCurrent}:any) => {
  

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setItemDetails((prevState:any) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="text-black flex w-full items-center flex-col">
    <h1 className="text-primary font-bold text-lg uppercase"> Enter Clothing Details</h1>
    <p className="text-base mt-2 text-center">
    Please provide some details about the items.
    </p>
      <div className=" w-full  mt-8 ">
          <div className="flex w-full gap-14 justify-between">

          <div>

          <div className="mb-4">
            <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
            <input
              type="text"
              id="itemType"
              name="itemType"
              value={itemDetails.itemType}
              onChange={handleChange}
              className="mt-1 w-[300px] text-base block  px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="e.g., Shirt, Pants, Jacket"
              />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={itemDetails.quantity}
              onChange={handleChange}
              className="mt-1  text-base block w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Number of items"
            />
          </div>
          </div>
          <div>

          <div className="mb-4">
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
            <select
              id="condition"
              name="condition"
              value={itemDetails.condition}
              onChange={handleChange}
             className="mt-1  text-base w-[300px] block w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            >
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="gently_used">Gently Used</option>
              <option value="worn">Worn</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={itemDetails.description}
              onChange={handleChange}
              className="mt-1  text-base block w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Provide any additional details about the items"
              rows={2}
            />
          </div>
          </div>
          </div>

          <div className="flex w-full justify-between mt-8">
            <button
              className={`px-4 py-2 rounded-md bg-primary text-white`}
              onClick={() => setCurrent(1)}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md  bg-primary text-white`}
              onClick={() => setCurrent(3)}
            >
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default Details;
