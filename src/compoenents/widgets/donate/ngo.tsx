import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../config";


let logos=[
    "https://www.designmantic.com/logo-images/172145.png?company=Company%20Name&keyword=ngo&slogan=&verify=1","https://www.logodesign.net/logo-new/pentagon-house-with-abstract-kids-and-stars-inside-9144ld.png?nwm=1&nws=1&industry=ngo&txt_keyword=All","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrhgcja2tzDKB2bZBpnmYCs7KVka207xKOQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYxDW405Cl7rsUqqBEXRcd4ATExuTnP-G9A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoTKDwuMJfCixcV3Rk2FCI-t_kY_sfa7ifA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0oxVuB-bFoyQhVibawzeeUIYP9wcChL8ZA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7Ul7-VkRRpdLnamUYUCZkYFXl_utshP2w&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a_P9zrt5W_anB9MxH9ofugfR0dkRqZd9HA&s"]

const SelectNgo = ({setCurrent,selectedNGO,setSelectedNGO}:any) => {
  // @ts-expect-error
  let token= JSON.parse(localStorage.getItem("token"))
  const [ngos,setNgos]=useState([])
useEffect(()=>{
  const fetch=async()=>{
    const res=await axios.get(`${SERVER_URL}/ngo/get_all?page_no=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
    })
    setNgos(res.data.ngos)
    console.log(res.data.ngos,"lkl")
  }
  fetch()
},[])

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
        {ngos&&ngos.length>0&&ngos.map((ngo) => (
          <div
          // @ts-expect-error
            key={ngo._id}
          // @ts-expect-error
            onClick={() => handleSelectNGO(ngo._id)}
            className={`cursor-pointer p-4 rounded-lg border border-gray-300 transition-all hover:shadow-lg ${
          // @ts-expect-error
              selectedNGO === ngo._id ? "bg-primary text-white" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={logos[Math.floor(Math.random() * 8) + 1]}
          // @ts-expect-error

                alt={`${ngo.name} logo`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
          {/* @ts-expect-error */}

                <h3 className="text-lg font-semibold">{ngo.name}</h3>
          {/* @ts-expect-error */}

                <p className={`${selectedNGO === ngo?._id?"text-white":"text-gray-600" } text-xs `}>{ngo.purpose}</p>
          {/* @ts-expect-error */}
                <p className={`${selectedNGO === ngo?._id?"text-white":"text-gray-600" } text-xs `}>{ngo.type}</p>
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
              {ngos.find((ngo) => ngo?._id === selectedNGO).name}
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
