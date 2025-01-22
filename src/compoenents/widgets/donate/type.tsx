
const PackageType = ({ setType,type,setCurrent }:any) => {

  return (
    <div className="text-black flex w-full items-center flex-col">
    <h1 className="text-primary font-bold text-lg uppercase">Select the type of clothes</h1>
    <p className="text-base mt-2 text-center">
    Choose whether the clothes are for donation<br /> or disposal
    </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={() => setType('donation')}
          className={`${type=="donation" ? "border-2 border-primary ":"hover:ring-2 hover:ring-primary"} flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg  transition duration-200`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdtJw3mn0U4-UGjjwk-OKzRFBO_nzVDarrXSHGtpjvQUJaCceQfrqSz6CupwdS9SFyMI&usqp=CAU"
            alt="Donate Clothes"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-lg font-medium text-gray-700">Donate Clothes</h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Give a second life to your clothes by donating to those in need.
          </p>
        </button>

        <button
          onClick={() => setType('disposal')}
          className={` ${type=="disposal" ? "border-2 border-primary":"hover:ring-2 hover:ring-primary"} flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg  transition duration-200`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeWl5y0t6p0zSo1Oa6JcWATmn9DgtJrB3eA&s"
            alt="Dispose Clothes"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-lg font-medium text-gray-700">Dispose Clothes</h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Dispose of clothes responsibly through eco-friendly methods.
          </p>
        </button>
      </div>
      <div className="flex w-full justify-between mt-8">
            <button
              className={`px-4 py-2 rounded-md bg-primary text-white`}
              onClick={() => setCurrent(0)}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md  bg-primary text-white`}
              onClick={() => setCurrent(2)}
            >
              Next
            </button>
          </div>
    </div>
  );
};

export default PackageType;
