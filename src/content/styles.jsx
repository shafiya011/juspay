import { Input, Table as AntdTable } from "antd";
import { styled } from "styled-components";
export const Container = styled.div`
  width: 100%;
`;
export const InsightsWrapper = styled.div`
  padding: 30px;
`;
export const Title = styled.div`
  margin: 10px 0px 20px 0px;
  font-size: 14px;
  font-weight: 600;
`;
export const Insights = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const TrendCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: black;
  background-color: ${(props) => props?.color};
`;
export const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: ${(props) => props?.margin || "20px"};
`;
export const Value = styled.div`
  font-size: 28px;
  font-weight: 600;
  ${(props) =>
    props?.hover &&
    `
    font-size:14px;
`}
`;
export const TrendValue = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 3px;
  svg {
    height: 12px;
    width: 12px;
  }
  ${(props) =>
    props?.hover &&
    `
    font-size:28px;
`}
`;
export const TrendWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  flex: 1;
  height: 253px;
`;
export const ChartBg = styled.div`
  background-color: ${(props) => (props?.darkMode ? "#282828" : "#f7f9fb")};
  padding: 20px;
  border-radius: 15px;
  height: ${(props) => props?.height};

  canvas {
    width: 90% !important;
    height: 85% !important;
    margin: auto;
  }
`;

export const TableWrapper = styled.div`
  flex: 2;
`;

export const ProductTitle = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px 0px;
  color: #6b7280;
  font-weight: 500;
  border-bottom: 1px solid #e5e7eb;
  color: ${(props) => (props?.darkMode ? "#f7f9fb" : "#282828")};
`;

export const Td = styled.td`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
`;

export const RevenueWrapper = styled.div`
  display: grid;
  grid-template-columns: 72% 23%;
  grid-template-rows: auto auto;
  gap: 30px 30px;
  margin-top: 30px;
  div {
    background-color: ${(props) => (props?.darkMode ? "#282828" : "#f7f9fb")};
    border-radius: 15px;
  }
`;
export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #374151;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const StatusTag = styled.div`
  color: ${(props) => props?.color};
`;
export const FilterSec = styled.div`
  padding: 15px;
  border-radius: 8px;
  background-color: ${(props) => (props?.darkMode ? "#282828" : "#f7f9fb")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  div {
    display: flex;
    gap: 20px;
  }
`;
export const AntdInput = styled(Input)`
  width: 180px;
  border-radius: 8px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#fafbfd")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  border: 1px solid ${(props) => (props.darkMode ? "#444" : "#d9d9d9")};

  ::placeholder {
    font-size: 14px;
    color: ${(props) => (props.darkMode ? "#aaa" : "#999")};
  }
`;
export const Dot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: ${(props) => props?.color};
  display: inline-block;
`;
export const StatusWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const OrderListContainer = styled.div`
  padding: 30px;
`;
export const TrendFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    flex-direction: row-reverse;
  }

  &:hover .value {
    font-size: 14px;
    font-weight: 400;
  }

  &:hover .trendvalue {
    font-size: 28px;
    font-weight: 600;
    > svg {
      height: 28px;
      width: 600;
    }
  }
`;
export const StyledTable = styled(AntdTable)`
  ${(props) =>
    props.darkMode &&
    `
    background-color: #1f1f1f !important;
    color: #ffffff !important;

    .ant-table {
      background-color: #1f1f1f !important;
      color: #ffffff !important;
    }

    .ant-table-thead > tr > th {
      background-color: #2a2a2a !important;
      color: #ffffff !important;
      border-bottom: 1px solid #3a3a3a;
    }

    .ant-table-tbody > tr > td {
      background-color: #1f1f1f !important;
      color: #ffffff !important;
      border-bottom: 1px solid #3a3a3a;
    }

    .ant-pagination {
      background-color: #1f1f1f !important;
      color: #ffffff !important;
    }

    .ant-checkbox-inner {
      background-color: #333 !important;
      border: 1px solid #666;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #1677ff !important;
      border-color: #1677ff !important;
    }

    .ant-table-row:hover > td {
      background-color: #2a2a2a !important;
    }
  `}
`;

export const ChartCard = styled.div`
  background-color: #f9fbfc;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 325px;
  ${props=>props?.darkMode && `
    background-color:#282828;
  `}

  canvas {
    width: 100% !important; 
    height: 100% !important; 
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;

  span {
    font-size: 14px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-right: 6px;
    display: inline-block;
  }

  .current {
    background-color: black;
  }

  .previous {
    background-color: #b3c7ff;
  }

  .bold {
    font-weight: 600;
    margin-left: 4px;
  }
`;