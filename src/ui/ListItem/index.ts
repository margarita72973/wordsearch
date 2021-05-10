import styled from "@emotion/styled";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 33px;
  list-style-type: none;
  font-family: Questrial;
  color: #2e343b;
  strong {
    font-family: RubikBold;
    line-height: 23px;
  }
  div.gap {
    flex: 1 0 15px;
  }
`;

export default ListItem;
