import React, { useState } from 'react';
import { Form, Input, Button, Typography, Divider, Select, Modal } from 'antd';
import axios from 'axios';
import { SERVER_URL } from '../../../config';
import Layout from '../../../compoenents/layout';

const { Title } = Typography;
const { Option } = Select;

const NGOlogin = () => {
  const [state, setState] = useState<'Login' | 'Signup'>('Login');
  const [formData, setFormData] = useState({
    name: '',
    registration_no: '',
    type: '',
    purpose: '',
    country: '',
    phone_number: '',
    address: '',
    contact_person_no: '',
    email: '',
    password: '',
  });
  const [showResetModal, setShowResetModal] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = state === 'Login' ? `${SERVER_URL}/auth/user/signin` : `${SERVER_URL}/auth/user/signup`;
    try {
      const response = await axios.post(url, formData);
      console.log(`${state} success:`, response.data);
    } catch (error) {
      console.error(`${state} failed:`, error);
    }
  };

  const handleForgetPassword = async (email: string) => {
    try {
      await axios.post(`${SERVER_URL}/auth/forget_password`, { email });
      console.log('OTP sent to email');
      setShowResetModal(true); 
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleResetPassword = async (email: string, otp: string, newPassword: string) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/reset_password`, { email, otp, newPassword });
      console.log('Password reset successful:', response.data);
      setShowResetModal(false);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <Layout>

    <div className=" bg-gray-50 pb-12 pt-32 mt-8  flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg w-full">
        <Title level={2} className="text-center text-[#6A0B37]">{state}</Title>
        <Form onSubmitCapture={handleSubmit} className='w-full' layout="vertical">
          {state === 'Signup' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Form.Item label="NGO Name" required className="col-span-1">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter NGO name"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="Registration Number" required className="col-span-1">
                  <Input
                    name="registration_no"
                    value={formData.registration_no}
                    onChange={handleInputChange}
                    placeholder="Enter registration number"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="NGO Type" required className="col-span-1">
                  <Select
                    value={formData.type}
                    onChange={(value) => handleSelectChange(value, 'type')}
                    placeholder="Select NGO type"
                    className="border p-2 rounded w-full hover:border-[#6A0B37]"
                  >
                    <Option value="Charity">Charity</Option>
                    <Option value="Non-Profit">Non-Profit</Option>
                    <Option value="Community">Community</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Purpose" required className="col-span-1">
                  <Input
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder="Enter the NGO purpose"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="Country" required className="col-span-1">
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Enter country"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="Phone Number" required className="col-span-1">
                  <Input
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="Address" required className="col-span-1">
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>

                <Form.Item label="Contact Person Number" required className="col-span-1">
                  <Input
                    name="contact_person_no"
                    value={formData.contact_person_no}
                    onChange={handleInputChange}
                    placeholder="Enter contact person number"
                    className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                  />
                </Form.Item>
              </div>
            </>
          )}

          <Form.Item label="Email" required>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
            />
          </Form.Item>

          <Form.Item label="Password" required>
            <Input.Password
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit" className="w-full bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]">
              {state === 'Login' ? 'Login' : 'Signup'}
            </Button>
          </Form.Item>
        </Form>

        <Divider />
        <Button type="link" onClick={() => setState(state === 'Login' ? 'Signup' : 'Login')} className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]">
          {state === 'Login' ? 'Switch to Signup' : 'Switch to Login'}
        </Button>


        {state === 'Login' && (
          <Button type="link" onClick={() => setShowResetModal(true)} className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]">
            Forgot Password?
          </Button>
        )}
      </div>

      <Modal
        title="Reset Password"
        visible={showResetModal}
        onCancel={() => setShowResetModal(false)}
        footer={null}
      >
        <Form onFinish={(values) => handleResetPassword(values.email, values.otp, values.newPassword)} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              placeholder="Email"
              value={emailForReset}
              onChange={(e) => setEmailForReset(e.target.value)}
              className="hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
            />
          </Form.Item>
          <Form.Item
            name="otp"
            label="OTP"
            rules={[{ required: true, message: 'Please input the OTP!' }]}
          >
            <Input
              placeholder="Enter OTP"
              className="hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password
              placeholder="New Password"
              className="hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit" className="bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]">
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    </Layout>

  );
};

export default NGOlogin;
