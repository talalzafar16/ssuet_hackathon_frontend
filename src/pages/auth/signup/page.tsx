import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Form } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import { SERVER_URL } from '../../../config';
import Layout from '../../../compoenents/layout';
import { useNavigate } from 'react-router-dom';


const Signup: React.FC = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    country: '',
    age: '',
  });


  const handleSignup = async (values: any) => {
    try {
      await axios.post(`${SERVER_URL}/auth/user/signup`, {
        email: values.email,
        name: values.name,
        country: values.country,
        age: parseInt(values.age),
        password: values.password,
      });
      
      toast.success("OTP Sent to Email");
      setTimeout(()=>{
        navigate(`/auth/otp?email=${formData.email}`)
      },2000)
    } catch (error: any) {
        console.log(error)
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

 
  return (
    <Layout>

    <div className="flex items-center justify-center py-20 bg-gray-100">
      <div className="max-w-sm mx-auto p-6 bg-white mt-20 shadow-md rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Form
          onFinish={ handleSignup}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(changedValues) => setFormData({ ...formData, ...changedValues })}
        >
         
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input
                  placeholder="Name"
                  value={formData.name}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input
                  placeholder="Email"
                  value={formData.email}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: 'Please input your country!' }]}
              >
                <Input
                  placeholder="Country"
                  value={formData.country}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="age"
                label="age"
                rules={[{ required: true, message: 'Please input your Age!' }]}
              >
                <Input
                  placeholder="Age"
                  type='number'

                  value={formData.age}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  placeholder="password"
                  type='password'
                  value={formData.password}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </Form.Item>
             
            
          <Button
            type="primary"
            htmlType="submit"
            className="w-full mt-4 min-w-[400px] bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
          >
            { 'Sign Up'}
          </Button>
        </Form>

        <div className="flex justify-center items-center mt-5">
          <p className="relative text-sm">
          
                Already have an account?{' '}
                <span
                  className="text-[#6A0B37] font-semibold cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </span>
          </p>
        </div>

       
      </div>
    </div>
    </Layout>

  );
};

export default Signup;
