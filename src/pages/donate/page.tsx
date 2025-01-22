import { Steps } from 'antd';
import { useState } from 'react';
import Layout from '../../compoenents/layout';
import { FaLocationDot } from "react-icons/fa6"
import { GiClothes } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Address from '../../compoenents/widgets/home/donate/Address';
import PackageType from '../../compoenents/widgets/home/donate/type';
import Details from '../../compoenents/widgets/home/donate/details';
const Donate = () => {

  const [current, setCurrent] = useState(2); 
  const [address, setAddress] = useState('');
  const [type, setType] = useState('donation');
  const [selectedLocation, setSelectedLocation] = useState<any>(); 
  const [itemDetails, setItemDetails] = useState({
    itemType: '',
    quantity: '',
    condition: '',
    description: ''
  });
  return (
    <Layout>
      <div className="bg-gray-100 py-10 flex-col flex justify-center items-center w-full h-fit">
        <div className="max-w-screen-lg w-full">
          <Steps
          className='custom-steps'
            current={current} 
            direction="horizontal" 
            items={[
              {
                status: current > 0 ? 'finish' : 'process',
                icon: (
                  <div className={`text-primary hover:cursor-pointer flex flex-col justify-center items-center`}>
                    <FaLocationDot className=" text-xl" />
                    <span className={`text-base font-semibold mt-1`}>Address</span>
                  </div>
                ),
                style: current === 0 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 1 ? 'finish' : current === 1 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 1|| current == 1)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                    <GiClothes className=" text-xl" />
                    <span className={`text-base font-semibold mt-1`}>Type</span>
                  </div>
                ),
                style: current === 1 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 2 ? 'finish' : current === 2 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 2|| current == 2)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <BiDetail className=" text-xl" />
                  <span className={`text-base font-semibold mt-1`}>Details</span>
                </div>
                ),
                style: current === 2 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 3 ? 'finish' : current === 3 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 3|| current == 3)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <FaHandsHelping className=" text-xl" />
                  <span className={`text-base font-semibold mt-1`}>Select NGO</span>
                </div>
                ),
                style: current === 3 ? { color: '#6A0B37' } : {},
              },
              {
                status: current === 4 ? 'finish' : 'wait',
                icon: (
                  <div className={`${ (current > 4|| current == 4)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <FaCalendarAlt className=" text-xl" />
                  <span className={`text-base font-semibold mt-1`}>Schedule Pickup</span>
                </div>
                ),
                style: current === 4 ? { color: '#6A0B37' } : {},
              },
              // {
              //   status: current === 5 ? 'finish' : 'wait',
              //   icon: (
              //     <div className={`${ (current > 5|| current == 5)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
              //     <FaLocationDot className=" text-xl" />
              //     <span className={`text-base font-semibold mt-1`}>Submit</span>
              //   </div>
              //   ),
              //   style: current === 5 ? { color: '#6A0B37' } : {},
              // },
            ]}
          />

          {/* Content Area */}
          <div className="bg-white mt-4 rounded-xl shadow-md min-h-80 w-full flex justify-center py-10">
            <div className="text-gray-500 text-lg">
              {current === 0 && <Address setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} setAddress={setAddress} setCurrent={setCurrent} />}
              {current === 1 && <>
              
                <PackageType type={type} setType={setType} setCurrent={setCurrent}/>
              </>
              }
              {current === 2 && <Details itemDetails={itemDetails} setCurrent={setCurrent} setItemDetails={setItemDetails}/>}
              {current === 3 && 'Step 4: Choose an NGO to donate to.'}
              {current === 4 && 'Step 5: Schedule a pickup for your donation.'}
              {current === 5 && 'Step 6: Submit your donation! Thank you!'}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-5">
            <button
              className={`px-4 py-2 rounded-md ${current === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              disabled={current === 0}
              onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md ${current === 5 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              disabled={current === 5}
              onClick={() => setCurrent((prev) => Math.min(prev + 1, 5))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
