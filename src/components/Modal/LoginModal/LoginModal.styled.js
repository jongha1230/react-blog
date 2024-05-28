import styled from "styled-components";

export const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  button {
    padding: 10px 20px;
    background-color: #333d51;
    color: #f4f3ea;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    max-width: 110px;
    width: 100%;
    &:hover {
      background-color: #444e64;
    }
  }
`;
