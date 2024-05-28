import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f4f3ea;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  button {
    padding: 10px 20px;
    background-color: #333d51;
    color: #f4f3ea;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background-color: #444e64;
    }
  }
`;
