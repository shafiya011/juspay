import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Avatar, Space, Button, Dropdown, Menu } from "antd";
import {
  StatusTag,
  FilterSec,
  AntdInput,
  Dot,
  StatusWrapper,
  Title,
  OrderListContainer,
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
  // const [sortOrder, setSortOrder] = useState(null);
      const darkMode = useSelector((state) => state.ui.darkMode);
  

  const filteredOrders = Orders.filter((order) => {
    const search = searchValue.toLowerCase();
    return (
      order.id.toString().toLowerCase().includes(search) ||
      order.user.name.toLowerCase().includes(search)
    );
  });

  // const sortedOrders = [...filteredOrders].sort((a, b) => {
  //   const dateA = new Date(a.date);
  //   const dateB = new Date(b.date);

  //   if (sortOrder === "newest") {
  //     return dateB - dateA;
  //   } else if (sortOrder === "oldest") {
  //     return dateA - dateB;
  //   }
  //   return 0;
  // });

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
        hoveredRowId === record.id ? <EllipsisOutlined /> : null,
    },
  ];

  // const sortMenu = (
  //   <Menu
  //     onClick={(e) => setSortOrder(e.key)}
  //     items={[
  //       { label: "Newest", key: "newest" },
  //       { label: "Oldest", key: "oldest" },
  //     ]}
  //   />
  // );

  return (
    <OrderListContainer darkMode={darkMode}>
      <Title>Order List</Title>
      <FilterSec darkMode={darkMode}>
        <div>
          <AddIcon />
          <FillterIcon />
          {/* <Dropdown overlay={sortMenu} trigger={["click"]}>
            <Button icon={<SortIcon />}></Button>
          </Dropdown> */}
          <SortIcon />
        </div>
        <AntdInput
          allowClear
          prefix={<SearchIcon />}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </FilterSec>

      <Table
        style={{ fontSize: "14px" }}
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
