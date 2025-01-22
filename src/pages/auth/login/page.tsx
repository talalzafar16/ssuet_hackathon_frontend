import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Form, Tabs, Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import { SERVER_URL } from '../../../config';

const { TabPane } = Tabs;

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useOtp, setUseOtp] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
    otp: '',
    newPassword: '',
  });
  const [showResetModal, setShowResetModal] = useState(false);

  // Handle login
  const handleLogin = async (values: any) => {
    try {
      if (useOtp) {
        const response = await axios.post(`${SERVER_URL}/auth/user/signin`, {
          email: values.email,
          otp: values.otp,
        });
        toast.success(response.data.message);
      } else {
        const response = await axios.post(`${SERVER_URL}/auth/user/signin`, {
          email: values.email,
          password: values.password,
        });
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  // Request OTP for login/signup
  const requestOtp = async (email: string) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/send_otp_for_email_verification`, { email });
      toast.success(response.data.message);
      setOtpSent(true);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
  };

  // Verify OTP for login/signup
  const verifyOtp = async (email: string, otp: string) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/verify_email_by_otp`, { email, otp });
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'OTP verification failed');
    }
  };

  // Handle signup
  const handleSignup = async (values: any) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/user/signup`, {
        email: values.email,
        name: values.name,
        mobile: values.mobile,
        otp: values.otp,
      });
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  // Forget password handler
  const handleForgetPassword = async (email: string) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/forget_password`, { email });
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send password reset link');
    }
  };

  // Reset password handler
  const handleResetPassword = async (email: string, otp: string, newPassword: string) => {
    try {
      const response = await axios.post(`${SERVER_URL}/auth/reset_password`, {
        email,
        otp,
        newPassword,
      });
      toast.success(response.data.message);
      setShowResetModal(false); 
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to reset password');
    }
  };

  const showResetPasswordModal = () => {
    setShowResetModal(true);
  };

  const closeResetPasswordModal = () => {
    setShowResetModal(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form
          onFinish={isLogin ? handleLogin : handleSignup}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(changedValues) => setFormData({ ...formData, ...changedValues })}
        >
          {isLogin ? (
            <Tabs defaultActiveKey="1" onChange={() => setUseOtp(!useOtp)}>
              <TabPane tab="OTP Login" key="1">
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
                {useOtp && !otpSent && (
                  <Button
                    type="primary"
                    onClick={() => requestOtp(formData.email)}
                    className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
                  >
                    Get OTP
                  </Button>
                )}
                {otpSent && useOtp && (
                  <Form.Item
                    name="otp"
                    label="Enter OTP"
                    rules={[{ required: true, message: 'Please input OTP!' }]}
                  >
                    <Input
                      placeholder="Enter OTP"
                      value={formData.otp}
                      className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    />
                  </Form.Item>
                )}
              </TabPane>
              <TabPane tab="Password Login" key="2">
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
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    placeholder="Password"
                    value={formData.password}
                    className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </Form.Item>
              </TabPane>
            </Tabs>
          ) : (
            <>
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
                name="mobile"
                label="Mobile Number"
                rules={[{ required: true, message: 'Please input your mobile number!' }]}
              >
                <Input
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </Form.Item>
              {useOtp && !otpSent && (
                <Button
                  type="primary"
                  onClick={() => requestOtp(formData.email)}
                  className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
                >
                  Get OTP
                </Button>
              )}
              {otpSent && (
                <Form.Item
                  name="otp"
                  label="Enter OTP"
                  rules={[{ required: true, message: 'Please input OTP!' }]}
                >
                  <Input
                    placeholder="Enter OTP"
                    value={formData.otp}
                    className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  />
                </Form.Item>
              )}
            </>
          )}

          <Button
            type="primary"
            htmlType="submit"
            className="w-full mt-4 bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </Form>

        <div className="flex justify-center items-center mt-5">
          <p className="relative text-sm">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <span
                  className="text-[#6A0B37] font-semibold cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>{' '}
                |{' '}
                <span
                  className="text-[#6A0B37] font-semibold cursor-pointer"
                  onClick={showResetPasswordModal}
                >
                  Forgot Password
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-[#6A0B37] font-semibold cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>

        <Modal
          title="Reset Password"
          visible={showResetModal}
          onCancel={closeResetPasswordModal}
          footer={null}
        >
          <Form
            onFinish={(values) => handleResetPassword(values.email, values.otp, values.newPassword)}
            layout="vertical"
          >
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
              name="otp"
              label="OTP"
              rules={[{ required: true, message: 'Please input the OTP!' }]}
            >
              <Input
                placeholder="Enter OTP"
                value={formData.otp}
                className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password
                placeholder="New Password"
                value={formData.newPassword}
                className='hover:border-[#6A0B37] focus:border-[#6A0B37] focus:ring-1 focus:ring-[#6A0B37]'
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#6A0B37] text-white hover:bg-white hover:text-[#6A0B37]"
            >
              Reset Password
            </Button>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default LoginSignup;
