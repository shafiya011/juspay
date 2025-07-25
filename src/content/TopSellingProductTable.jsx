
import {Products} from "../mockData"
import {TableWrapper,ProductTitle,Table,Th,Td,ChartBg} from './styles'
const TopSellingProductsTable = () => {
  return (
    <ChartBg>
    <TableWrapper>
      <ProductTitle>Top Selling Products</ProductTitle>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Amount</Th>
          </tr>
        </thead>
        <tbody>
          {Products.map((p, idx) => (
            <tr key={idx}>
              <Td>{p.name}</Td>
              <Td>${p.price.toFixed(2)}</Td>
              <Td>{p.quantity}</Td>
              <Td>${p.amount.toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
    </ChartBg>
  );
};

export default TopSellingProductsTable;