import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Space, Button } from "antd";
import {
  StatusTag,
  FilterSec,
  AntdInput,
  Dot,
  StatusWrapper,
  Title,
  OrderListContainer,
  StyledTable
} from "./styles";
import { Orders } from "../mockData";
import { CalendarOutlined, EllipsisOutlined } from "@ant-design/icons";
import SortIcon from "../assets/sortIcon";
import AddIcon from "../assets/addIcon";
import FillterIcon from "../assets/fillterIcon";
import SearchIcon from "../assets/searchIcon";

const statusColors = {
  "In Progress": "#9193db",
  Complete: "#4aa785",
  Pending: "#59a8d4",
  Approved: "#fdc455",
  Rejected: "#9fa0a2",
};

const OrderList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortedOrders, setSortedOrders] = useState(Orders);
  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleSort = () => {
    const sorted = [...sortedOrders].sort((a, b) => {
      const idA = parseInt(a.id.replace(/\D/g, ""), 10);
      const idB = parseInt(b.id.replace(/\D/g, ""), 10);
      return sortAsc ? idB - idA : idA - idB;
    });
    setSortedOrders(sorted);
    setSortAsc(!sortAsc);
  };

  const filteredOrders = sortedOrders.filter((order) => {
    const search = searchValue.toLowerCase();
    return (
      order.id.toString().toLowerCase().includes(search) ||
      order.user.name.toLowerCase().includes(search)
    );
  });

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      render: (user) => (
        <Space>
          <Avatar src={user.avatar} size="medium" />
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
        <StatusWrapper>
          <Dot color={statusColors[status]} />
          <StatusTag color={statusColors[status]}>{status}</StatusTag>
        </StatusWrapper>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, record) =>
        hoveredRowId === record.id ? <EllipsisOutlined /> : <div style={{ width: "20px" }}></div>,
    },
  ];

  return (
    <OrderListContainer darkMode={darkMode}>
      <Title>Order List</Title>
      <FilterSec darkMode={darkMode}>
        <div>
          <AddIcon darkMode={darkMode} />
          <FillterIcon darkMode={darkMode} />
          <div onClick={handleSort} style={{ cursor: "pointer" }} >
          <SortIcon darkMode={darkMode} />
        </div>
        </div>
        <AntdInput
          allowClear
          prefix={<SearchIcon />}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          darkMode={darkMode}
        />
      </FilterSec>

      <StyledTable
        style={{ fontSize: "14px" }}
        darkMode={darkMode}
        rowKey={(record, index) => record.id + "-" + index}
        columns={columns}
        dataSource={filteredOrders}
        pagination={{ pageSize: 8 }}
        rowSelection={{ type: "checkbox" }}
        onRow={(record) => ({
          onMouseEnter: () => setHoveredRowId(record.id),
          onMouseLeave: () => setHoveredRowId(null),
        })}
      />
    </OrderListContainer>
  );
};

export default OrderList;
