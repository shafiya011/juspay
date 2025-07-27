import { Input } from "antd";
import { styled } from "styled-components";
export const Container = styled.div`
  width: 100%;
  /* padding:20px 28px; */
`;
export const InsightsWrapper = styled.div`
  padding: 30px;
`;
export const Title = styled.div`
  margin: 10px 0px 20px 0px;
  font-size: 15px;
  font-weight: 600;
`;
export const Insights = styled.div`
  /* display: flex; */
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const TrendCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) => props?.color};
  /* gap: 15px; */
`;
export const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
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
  background-color: #f7f9fb; //#f3f4f5;
  padding: 20px;
  border-radius: 15px;
  height: ${(props) => props?.height};
  canvas {
    width: 90% !important;
    height: 85% !important;
    margin: auto;
  }
`;
// topselling product

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
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem 0;
  color: #6b7280;
  font-weight: 500;
  border-bottom: 1px solid #e5e7eb;
`;

export const Td = styled.td`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
`;

export const RevenueWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 26%;
  grid-template-rows: auto auto;
  gap: 30px 30px;
  margin-top: 30px;
  div {
    background-color: #f7f9fb;
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
  background-color: #f7f9fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  div {
    display: flex;
    gap: 10px;
  }
`;
export const AntdInput = styled(Input)`
  width: 180px;
  border-radius: 8px;
  background-color: #fafbfd;
  ::placeholder {
    font-size: 14px;
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
