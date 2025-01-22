import React, { useState } from "react";

const NGOs = [
  {
    id: 1,
    name: "NGO One",
    description: "Description of NGO One",
    logo: "https://www.designmantic.com/logo-images/172145.png?company=Company%20Name&keyword=ngo&slogan=&verify=1",
  },
  {
    id: 2,
    name: "NGO Two",
    description: "Description of NGO Two",
    logo: "https://www.designmantic.com/logo-images/172145.png?company=Company%20Name&keyword=ngo&slogan=&verify=1",
  },
  {
    id: 3,
    name: "NGO Three",
    description: "Description of NGO Three",
    logo: "https://www.designmantic.com/logo-images/172145.png?company=Company%20Name&keyword=ngo&slogan=&verify=1",
  },
  {
    id: 4,
    name: "NGO Four",
    description: "Description of NGO Four",
    logo: "https://www.designmantic.com/logo-images/172145.png?company=Company%20Name&keyword=ngo&slogan=&verify=1",
  },
];

const SelectNgo = ({setCurrent,selectedNGO,setSelectedNGO}:any) => {

  const handleSelectNGO = (id:any) => {
    setSelectedNGO(id);
  };

  return (
    <div className="text-black flex w-full items-center flex-col">
    <h1 className="text-primary font-bold text-lg uppercase"> Choose an NGO</h1>
    <p className="text-base mt-2 text-center">
    Please select an NGO from the list below.
    </p>
    
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NGOs.map((ngo) => (
          <div
            key={ngo.id}
            onClick={() => handleSelectNGO(ngo.id)}
            className={`cursor-pointer p-4 rounded-lg border border-gray-300 transition-all hover:shadow-lg ${
              selectedNGO === ngo.id ? "bg-primary text-white" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={ngo.logo}
                alt={`${ngo.name} logo`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{ngo.name}</h3>
                <p className={`${selectedNGO === ngo.id?"text-white":"text-gray-600" } text-xs `}>{ngo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedNGO && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-700">
            You have selected:{" "}
            <span className="text-blue-600">
                {/* @ts-ignore h */}
              {NGOs.find((ngo) => ngo.id === selectedNGO).name}
            </span>
          </p>
        </div>
      )}
      <div className="flex w-full justify-between mt-8">
            <button
              className={`px-4 py-2 rounded-md bg-primary text-white`}
              onClick={() => setCurrent(2)}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md  bg-primary text-white`}
              onClick={() => setCurrent(4)}
            >
              Next
            </button>
          </div>
    </div>
  );
};

export default SelectNgo;
