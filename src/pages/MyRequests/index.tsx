import React, { useState } from "react";
import { Table, Modal, Button, Typography, Tag, Row, Col } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Title, Text } = Typography;

// Define the Donation Type
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
  const [donations] = useState<Donation[]>([
    {
      key: "1",
      address: "123 Main St",
      donation_type: "Clothes",
      quantity: 10,
      description: "Winter clothes for donation",
      condition: "New",
      selected_ngo: "NGO A",
      start_date: "2025-01-01",
      end_date: "2025-01-10",
      notes: "Please handle carefully",
      status: "Picked Up",
    },
    {
      key: "2",
      address: "456 Elm St",
      donation_type: "Books",
      quantity: 20,
      description: "Books for kids",
      condition: "Used - Good",
      selected_ngo: "NGO B",
      start_date: "2025-02-01",
      end_date: "2025-02-15",
      notes: "Ensure on-time delivery",
      status: "Delivered",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(
    null
  );

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
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div style={{ padding: "20px", background: "#6A0B37" }}>
      <Title level={3} style={{ color: "white", textAlign: "center" }}>
        Donation Requests
      </Title>
      <Table
        columns={columns}
        dataSource={donations}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
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
  );
};

export default DonationTable;
