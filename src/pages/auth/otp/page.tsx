import React, { useState } from 'react';
import Layout from '../../../compoenents/layout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { SERVER_URL } from '../../../config';

const OtpScreen = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
 const [searchParams] = useSearchParams();
 const navigate=useNavigate()
  const email = searchParams.get("email");
        // @ts-expect-error
  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Allow only one digit per input
    setOtp(newOtp);

    // Move to the next input if value is entered
    if (value && index < otp.length - 1) {
        // @ts-expect-error
        document.getElementById(`otp-input-${index + 1}`).focus();
    }
};
        // @ts-expect-error
const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
        // @ts-expect-error
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };


  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/verify_email_by_otp`, {
        email: email,
        otp: otp.join(""),
      });
      
      toast.success("Email Verified");
      setTimeout(()=>{
        navigate(`/auth/login`)
      },2000)
    } catch (error: any) {
        console.log(error)
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };
  return (
    <Layout>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-2 rounded-lg  transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
    </Layout>

  );
};

export default OtpScreen;
