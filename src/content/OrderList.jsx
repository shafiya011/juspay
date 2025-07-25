import React from "react";
import { Table, Avatar, Tag, Space, Checkbox } from "antd";
import { Orders } from "../mockData"; // import mock data
import {
  CalendarOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const statusColors = {
  "In Progress": "processing",
  Complete: "success",
  Pending: "default",
  Approved: "warning",
  Rejected: "error",
};

const columns = [
//   {
//     title: "",
//     dataIndex: "select",
//     render: () => <Checkbox />,
//     width: 50,
//   },
  {
    title: "Order ID",
    dataIndex: "id",
  },
  {
    title: "User",
    dataIndex: "user",
    render: (user) => (
      <Space>
        <Avatar src={user.avatar} size="small" />
        {user.name}
      </Space>
    ),
  },
  {
    title: "Project",
    dataIndex: "project",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (date) => (
      <Space>
        <CalendarOutlined />
        {date}
      </Space>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={statusColors[status] || "default"}>{status}</Tag>
    ),
  },
  {
    title: "",
    dataIndex: "actions",
    render: () => <EllipsisOutlined />,
  },
];

const OrderList= () => {
  return (
    <Table
      columns={columns}
      dataSource={Orders}
      rowKey="id"
      pagination={{ pageSize: 8 }}
      rowSelection={{ type: "checkbox" }}
    />
  );
};

export default OrderList;
