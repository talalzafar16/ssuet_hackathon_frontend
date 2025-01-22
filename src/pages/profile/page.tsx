import React, { useEffect, useState } from 'react';
import { Avatar, Card, Form, Input, Button, Space } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from '../../config';
import { EditOutlined, EditFilled } from '@ant-design/icons'; 
import { motion } from 'framer-motion'; 
import Layout from '../../compoenents/layout';

interface Profile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  age: number;
  country: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>({
    name: 'Ismail B',
    email: 'bajwa@meet.com',
    phone: '123-456-7890',
    avatar: 'https://www.nft.com/100',
    age: 20,
    country: 'PAK',
  });
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
  const [form] = Form.useForm();
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);

  const handleEditToggle = (field: string) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = async (field: string) => {
    // try {
    //   const updatedValue = form.getFieldValue(field);
    //   const response = await fetch(`${SERVER_URL}/user/update_one_by_id?id=${userId}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ [field]: updatedValue }),
    //   });
    //   if (response.ok) {
    //     setProfile((prev) => (prev ? { ...prev, [field]: updatedValue } : prev));
    //     setEditMode((prev) => ({ ...prev, [field]: false }));
    //     toast.success(`${field} updated successfully!`);
    //   } else {
    //     throw new Error('Failed to update profile.');
    //   }
    // } catch (error) {
    //   toast.error('Failed to update profile detail.');
    // }
  };

  const handleLogout = async () => {
    // try {
    //   localStorage.removeItem('userId');
    //   toast.success('Logged out successfully!');
    //   window.location.href = '/login'; 
    // } catch (error) {
    //   toast.error('Failed to log out.');
    //   }
    toast.success('Logged out successfully!');
    window.location.href = '/login'; 
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev!,
          avatar: reader.result as string,  
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>

    <div className="max-w-4xl mx-auto p-6 sm:px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#6A0B37]">Profile Page</h2>
      <div className="flex justify-center mb-6 relative">
        <Avatar size={120} src={profile.avatar} className='border-2 border-[#6A0B37]'>
          <img
          src="/profile.jpg"
          />
        </Avatar>
        
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
          id="avatar-upload"
        />
        
        <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 p-2 bg-white rounded-full border-2 border-[#6A0B37] cursor-pointer">
          <EditOutlined className="text-[#6A0B37]" />
        </label>
      </div>
      <Card className="shadow-lg">
        <Form layout="vertical" form={form} className='text-[#6A0B37] flex flex-col'>
          {Object.entries(profile).map(([key, value]) =>
            key === 'avatar' ? null : (
              <Form.Item key={key} label={key.replace(/^\w/, (c) => c.toUpperCase())} name={key}>
                <div className="flex items-center space-x-4 text-[#6A0B37]">
                  {editMode[key] ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex flex-row items-center w-full">
                      <Input defaultValue={value} className="flex flex-row w-full w-max " />
                      <Button type="primary" className="ml-2 bg-[#6A0B37] text-white" onClick={() => handleSave(key)}>Save</Button>
                      <Button onClick={() => handleEditToggle(key)} className="ml-2">Cancel</Button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center w-full">
                      <span className="flex-1 font-bold" style={{ color: '#6A0B37' }}>{value}</span> {/* Changed text color */}
                      <Button type="link" onClick={() => handleEditToggle(key)} className="ml-2 text-[#6A0B37]">
                        <EditFilled />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </Form.Item>
            )
          )}
        </Form>
      </Card>
      <div className="flex justify-center mt-6">
        <Button
          type="primary"
          danger
          onClick={handleLogout}
          className="h-[60px] w-[100px] sm:w-auto bg-[#6A0B37] hover:bg-white text-[#6A0B37] text-lg" // Increased button size
        >
          Log Out
        </Button>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
    </Layout>

  );
};

export default ProfilePage;
