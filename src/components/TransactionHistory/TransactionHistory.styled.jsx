import styled from '@emotion/styled';

export const Transactions = styled.table`
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(254, 254, 245);
  width: 800px;
  margin-bottom: 30px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.75);
  border: 1px solid #212121;
  text-align: center;
  color: black;
  & thead {
    background-color: rgb(253, 238, 238);
  }
  & th,
  & td {
    padding: 10px 15px;
    border: 1px solid grey;
  }
`;
