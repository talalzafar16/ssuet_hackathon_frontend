import  { useState } from 'react';
import { Form, Input, Button, Typography, Divider, Select, Modal } from 'antd';
import axios from 'axios';
import { SERVER_URL } from '../../../config';
import Layout from '../../../compoenents/layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const { Title } = Typography;
const { Option } = Select;

const NGOlogin = () => {
  const navigate = useNavigate()
  const [state, setState] = useState<'Login' | 'Signup'>('Login');
  const [formData, setFormData] = useState({
    name: '',
    registration_no: '',
    type: '',
    purpose: '',
    country: '',
    phone_number: '',
    address: '',
    contact_person_name: '',
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

   const url =
     state === "Login"
       ? `${SERVER_URL}/auth/ngo/signin`
       : `${SERVER_URL}/ngo/create`; 

   try {
     const response = await axios.post(url, formData, {
       headers: {
         "Content-Type": "application/json",
       },
     });
     console.log(`${state} success:`, response.data);
     
     if (state === "Signup") {
       Modal.success({
         title: "Registration Successful",
         content:
           "Your NGO has been successfully registered. You can now log in.",
       });
       setState("Login"); 
       
     }
     else {
       if (response.status === 200) {
         const { user, token } = response.data; 

          localStorage.setItem('ngouser', JSON.stringify(user));
          localStorage.setItem('ngotoken', token);

          toast.success("Signin Successfully");
          navigate("/ngo-dashboard"); 
        } else {
          toast.error("Login failed. Please check your credentials.");
        }

     }

       toast.success("Signin Successfully");
       navigate("/ngo-dashboard");
     }
    catch (error:any) {
     console.error(`${state} failed:`, error);
     Modal.error({
       title: "Registration Failed",
       content:
         error.response?.data?.message ||
         "An error occurred while processing your request.",
     });
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
      <div className="pb-10  bg-gray-50 pt-32  flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg w-full">
          <Title level={2} className="text-center text-[#6A0B37]">
            {state}
          </Title>
          <Form onSubmitCapture={handleSubmit} layout="vertical">
            {state === "Signup" && (
              <>
                <div className="grid grid-cols-4 sm:grid-cols-2 gap-4">
                  <Form.Item label="NGO Name" required className="col-span-1">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter NGO name"
                      className="border p-2 rounded w-full hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Registration Number"
                    required
                    className="col-span-1"
                  >
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
                      onChange={(value) => handleSelectChange(value, "type")}
                      placeholder="Select NGO type"
                      className="border p-2 rounded w-full hover:border-[#6A0B37]"
                    >
                      <Option value="charity">charity</Option>
                      <Option value="non-profit">non-profit</Option>
                      <Option value="foundation">foundation</Option>
                      <Option value="trust">trust</Option>
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

                  <Form.Item
                    label="Phone Number"
                    required
                    className="col-span-1"
                  >
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

                  <Form.Item
                    label="Contact Person Number"
                    required
                    className="col-span-1"
                  >
                    <Input
                      name="contact_person_name"
                      value={formData.contact_person_name}
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
              <Button
                type="primary"
                block
                htmlType="submit"
                className="w-full bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
              >
                {state === "Login" ? "Login" : "Signup"}
              </Button>
            </Form.Item>
          </Form>

          <Divider />
          <Button
            type="link"
            onClick={() => setState(state === "Login" ? "Signup" : "Login")}
            className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
          >
            {state === "Login" ? "Switch to Signup" : "Switch to Login"}
          </Button>

          {state === "Login" && (
            <Button
              type="link"
              onClick={() => setShowResetModal(true)}
              className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
            >
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
          <Form
            onFinish={(values) =>
              handleResetPassword(values.email, values.otp, values.newPassword)
            }
            layout="vertical"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
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
              rules={[{ required: true, message: "Please input the OTP!" }]}
            >
              <Input
                placeholder="Enter OTP"
                className="hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
              />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[
                { required: true, message: "Please input your new password!" },
              ]}
            >
              <Input.Password
                placeholder="New Password"
                className="hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                className="bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
              >
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
