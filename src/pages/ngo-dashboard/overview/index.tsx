// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Tag, Modal, Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Pie, Bar } from "react-chartjs-2"; 
import { SERVER_URL } from "../../../config";
import { CheckOutlined } from "@ant-design/icons";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement, 
} from "chart.js";
import axios from "axios";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement 
);

interface DonationRequest {
  id: number;
  donor: string;
  items: string;
  address: string;
  status: "Pending" | "Delivered" | "PickedUp";
  pickupDate: string;
}

const Dashboard: React.FC = () => {
  const [allStatus, setallStatus] = useState(null);
      const [requests, setrequests] = useState(null);
const [confirmed,setConfirmed] = useState("pending")
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] =
    useState<DonationRequest | null>(null);

  const donationApi = async() => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/donation/get_donation_no_by_status`
        );
        setallStatus(response.data.donations);

      } catch (error) {
        console.log(error)
      }
  }
  const donationRequest = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/donation/get_all`,{params:{page_no:1}}
      );
      setrequests(response.data.donations);
    } catch (error) {
      console.log(error);
    }
  };

  const ngoid = localStorage.getItem("ngouser");
  let obj = JSON.parse(ngoid);
  let ngoID = obj.id
const ConfirmRequest = async () => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/donation/update`,
      {},
      { params: { id: ngoID } }
    );
    console.log("API Response:", response);

    donationApi();

    setConfirmed("picked_up");
  } catch (error) {
    console.log("Error:", error);
  }
};



  useEffect(() => {
    donationApi();
    donationRequest();
  },[allStatus])
  

  
  
  const donationRequests: DonationRequest[] = [
    {
      id: 1,
      donor: "John Doe",
      items: "Clothes, Shoes",
      address: "123 Main St.",
      status: "Pending",
      pickupDate: "Jan 25, 2025",
    },
    {
      id: 2,
      donor: "Jane Smith",
      items: "Bags, Jackets",
      address: "456 Maple Ave.",
      status: "Delivered",
      pickupDate: "Jan 20, 2025",
    },
    {
      id: 3,
      donor: "Alice Johnson",
      items: "Books, Toys",
      address: "789 Oak Blvd.",
      status: "PickedUp",
      pickupDate: "Jan 18, 2025",
    },
  ];
const dataCounts = {
  pending: 0,
  delivered: 0,
  picked_up: 0,
};
const pieLabels = ["Pending", "Delivered", "PickedUp"];
  if (Array.isArray(allStatus)) {
      //@ts-ignore
    allStatus.forEach((item: any) => {
      //@ts-ignore
      if (dataCounts[item._id] !== undefined) {
        //@ts-ignore
        dataCounts[item._id] = item.count;
      }
    });
  }



 const pieData = {
   labels: pieLabels,
   datasets: [
     {
       data: [dataCounts.pending, dataCounts.delivered, dataCounts.picked_up],
       backgroundColor: ["#FFCD56", "#4CAF50", "#6A0B37"],
       hoverBackgroundColor: ["#FFB74D", "#66BB6A", "#A3144E"],
     },
   ],
 };

  const barData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Donations",
        data: [30, 20, 40, 35, 50, 60, 55, 40, 65, 70, 45, 80], 
        backgroundColor: "#6A0B37",
        borderColor: "#6A0B37",
        borderWidth: 1,
      },
    ],
  };

  const columns: ColumnsType<DonationRequest> = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user: any) => user?.name,
    },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Items", dataIndex: "item_type", key: "item_type" },
    { title: "Pickup Date", dataIndex: "start_date", key: "start_date" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            style={{
              backgroundColor: "#6A0B37",
              color: "#fff",
              marginRight: "8px",
            }}
            onClick={() => handleViewDetails(record)}
          >
            View Details
          </Button>
          <Button
            onClick={ConfirmRequest}
            style={{
              backgroundColor:
                 "#FFCD56",
              color: "#fff",
            }}
          >
            Confirm
          </Button>
        </div>
      ),
    },
  ];

  const handleViewDetails = (request: DonationRequest) => {
    setSelectedRequest(request);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRequest(null);
  };


  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header
        style={{
          backgroundColor: "#6A0B37",
          padding: "15px 20px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <h1>NGO Dashboard</h1>
      </header>
      <div 
        
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ color: "#6A0B37" }}>Donation Requests</h3>
        <Table
          dataSource={requests}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>
      <div
        className="flex justify-center w-[100vw]"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: "0.45",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#6A0B37" }}>Donation Status</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Modal for Viewing Details */}
      {selectedRequest && (
        <Modal
          title="Donation Details"
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
        >
          <p>
            <strong>Donor:</strong> {selectedRequest?.user?.name}
          </p>
          <p>
            <strong>Address:</strong> {selectedRequest?.address}
          </p>
          <p>
            <strong>Items:</strong> {selectedRequest?.item_type}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <Tag
              color={
                selectedRequest?.status === "delivered" ? "green" : "#6A0B37"
              }
            >
              {selectedRequest?.status}
            </Tag>
          </p>
          <p>
            <strong>Pickup Date:</strong> {selectedRequest?.start_date}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
