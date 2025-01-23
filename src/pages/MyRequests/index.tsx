import  { useEffect, useState } from "react";
import { Table, Modal, Button, Typography, Tag, Row, Col } from "antd";
import type { ColumnsType  } from "antd/es/table";
import Layout from "../../compoenents/layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";

const { Title, Text } = Typography;

interface Donation {
  key: string;
  address: string;
  donation_type: string;
  quantity: number;
  description: string;
  condition: string;
  selected_ngo: string;
  start_date: string;
  end_date: string;
  notes: string;
  status: string;
}

const DonationTable = () => {
  const [donations,setDonations] = useState<Donation[]>([
    
    
  ]);

  const [total,setTotal]=useState(0)
  const [currentPage] = useState(1); 
  const [pageSize] = useState(10);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return Boolean(user);
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  if(!isAuthenticated()){
    return 
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(
    null
  );
    // @ts-expect-error
    let token= JSON.parse(localStorage.getItem("token"))
  const handleRowClick = (record: Donation) => {
    setSelectedDonation(record);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDonation(null);
  };

  const columns: ColumnsType<Donation> = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Donation Type",
      dataIndex: "donation_type",
      key: "donation_type",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Details",
      dataIndex: "Details",
      key: "Details",
      render: (text, record) => {
        console.log(text)
        return (
          <Button
            onClick={() => handleRowClick(record)} 
            style={{
              backgroundColor: "#6A0B37",
              color: "#fff",
              marginRight: "5px",
            }}
          >
            View Details
          </Button>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        switch (status) {
          case "Pending":
            color = "#6A0B37";
            break;
          case "Delivered":
            color = "green";
            break;
          case "PickedUp":
            color = "orange";
            break;
          default:
            color = "gray";
        }
        return (
          <Tag style={{ fontSize: "14px", padding: "4px" }} color={color}>
            {status}
          </Tag>
        );
      },
    },
  ];
  const fetch=async()=>{
    try {
      const res = await axios.get(
        `${SERVER_URL}/donation/get_all_user_donations?page_no=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDonations(res.data.donations);
      setTotal(res.data.total); // Update total number of records
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  }
 
    useEffect(()=>{
    fetch()
    },[])
  return (
    <Layout>

    <div style={{ padding: "20px", background: "#6A0B37",position:"relative",paddingTop:"120px",minHeight:"100vh" }}>
      <Title level={3} style={{ color: "white", textAlign: "center" }}>
        Donation Requests
      </Title>
      <Table
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: false,
          // pageSizeOptions: ["5", "10", "20", "50"],
        }}
        dataSource={donations}
      
        bordered
        style={{ backgroundColor: "#fff", borderColor: "#6A0B37" }}
      />

      <Modal
        title={
          <Title level={4} style={{ color: "#6A0B37" }}>
            Donation Details
          </Title>
        }
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={[
          <Button
            key="close"
            onClick={handleModalClose}
            style={{ backgroundColor: "#6A0B37", color: "#fff" }}
          >
            Close
          </Button>,
        ]}
      >
        {selectedDonation && (
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Address:</Text>
              <p>{selectedDonation.address}</p>
            </Col>
            <Col span={12}>
              <Text strong>Donation Type:</Text>
              <p>{selectedDonation.donation_type}</p>
            </Col>
            <Col span={12}>
              <Text strong>Quantity:</Text>
              <p>{selectedDonation.quantity}</p>
            </Col>
            <Col span={12}>
              <Text strong>Status:</Text>
              <p>{selectedDonation.status}</p>
            </Col>
            <Col span={24}>
              <Text strong>Description:</Text>
              <p>{selectedDonation.description}</p>
            </Col>
            <Col span={12}>
              <Text strong>Condition:</Text>
              <p>{selectedDonation.condition}</p>
            </Col>
            <Col span={12}>
              <Text strong>Selected NGO:</Text>
              <p>{selectedDonation.selected_ngo}</p>
            </Col>
            <Col span={12}>
              <Text strong>Start Date:</Text>
              <p>{selectedDonation.start_date}</p>
            </Col>
            <Col span={12}>
              <Text strong>End Date:</Text>
              <p>{selectedDonation.end_date}</p>
            </Col>
            <Col span={24}>
              <Text strong>Notes:</Text>
              <p>{selectedDonation.notes}</p>
            </Col>
          </Row>
        )}
      </Modal>
    </div>
    </Layout>

  );
};

export default DonationTable;
