import { Steps } from 'antd';
import { useState } from 'react';
import Layout from '../../compoenents/layout';
import { FaLocationDot } from "react-icons/fa6"
import { GiClothes } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Address from '../../compoenents/widgets/donate/Address';
import PackageType from '../../compoenents/widgets/donate/type';
import Details from '../../compoenents/widgets/donate/details';
import SelectNgo from '../../compoenents/widgets/donate/ngo';
import SchedulePickup from '../../compoenents/widgets/donate/schedulePickup';
import axios from 'axios';
import { SERVER_URL } from '../../config';
import toast from 'react-hot-toast';
const Donate = () => {

  const [current, setCurrent] = useState(0); 
  const [address, setAddress] = useState('');
  const [type, setType] = useState('donation');
  const [selectedRange, setSelectedRange] = useState(null);
  const [notes, setNotes] = useState("");
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(); 
  console.log(selectedRange)
  const [itemDetails, setItemDetails] = useState({
    itemType: '',
    quantity: '',
    condition: '',
    description: ''
  });
  const submit=()=>{
    let data={
        address:address,
        type:type,
        item_type:itemDetails.itemType,
        quantity:itemDetails.quantity,
        description:itemDetails.description,
        condition:itemDetails.description,
        // @ts-expect-error
        selected_ngo:selectedNGO?.id,
        notes:notes,
        // @ts-expect-error
        selected_range:selectedRange?.label,
        // @ts-expect-error
        start_date:selectedRange?.start,
        // @ts-expect-error
        end_date:selectedRange?.end
    }
    // const res=axios.post(`${SERVER_URL}/`,data)
    // if(res.)
    toast.success("success")
  }
  return (
    <Layout>
      <div className="bg-gray-100 py-10 px-8 flex-col flex justify-center items-center w-full h-fit">
        <div className="max-w-screen-lg w-full flex xs:flex-col">
          <Steps
        //   className='custom-steps flex'
            current={current} 
            direction="horizontal" 
            items={[
              {
                status: current > 0 ? 'finish' : 'process',
                icon: (
                  <div className={`text-primary hover:cursor-pointer flex flex-col justify-center items-center`}>
                    <FaLocationDot className=" text-xl" />
                    <span className={`text-base font-semibold mt-1 hidden md:block`}>Address</span>
                  </div>
                ),
                style: current === 0 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 1 ? 'finish' : current === 1 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 1|| current == 1)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                    <GiClothes className=" text-xl" />
                    <span className={`text-base font-semibold mt-1  hidden md:block`}>Type</span>
                  </div>
                ),
                style: current === 1 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 2 ? 'finish' : current === 2 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 2|| current == 2)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <BiDetail className=" text-xl" />
                  <span className={`text-base font-semibold mt-1  hidden md:block`}>Details</span>
                </div>
                ),
                style: current === 2 ? { color: '#6A0B37' } : {},
              },
              {
                status: current > 3 ? 'finish' : current === 3 ? 'process' : 'wait',
                icon: (
                  <div className={`${ (current > 3|| current == 3)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <FaHandsHelping className=" text-xl" />
                  <span className={`text-base font-semibold mt-1  hidden md:block`}>Select NGO</span>
                </div>
                ),
                style: current === 3 ? { color: '#6A0B37' } : {},
              },
              {
                status: current === 4 ? 'finish' : 'wait',
                icon: (
                  <div className={`${ (current > 4|| current == 4)&&"text-primary"} hover:cursor-pointer flex flex-col justify-center items-center`}>
                  <FaCalendarAlt className=" text-xl" />
                  <span className={`text-base font-semibold mt-1  hidden md:block`}>Schedule Pickup</span>
                </div>
                ),
                style: current === 4 ? { color: '#6A0B37' } : {},
              },
              
            ]}
          />

          <div className="bg-white -ml-40 mt-4 xs:-ml-0 py-4 rounded-xl shadow-md min-h-96 md:min-h-80 w-full flex justify-center md:py-10">
            <div className="text-gray-500 py-4 px-4 text-lg">
              {current === 0 && <Address setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} setAddress={setAddress} setCurrent={setCurrent} />}
              {current === 1 && 
                <PackageType type={type} setType={setType} setCurrent={setCurrent}/>
              }
              {current === 2 && <Details itemDetails={itemDetails} setCurrent={setCurrent} setItemDetails={setItemDetails}/>}
              {current === 3 && <SelectNgo selectedNGO={selectedNGO} setSelectedNGO={setSelectedNGO} setCurrent={setCurrent}/>}
              {current === 4 && <SchedulePickup submit={submit} selectedRange={selectedRange} notes={notes} setNotes={setNotes} setSelectedRange={setSelectedRange} setCurrent={setCurrent}/>}
            </div>
          </div>

         
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
