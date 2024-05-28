import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    background-color: #333d51;
    color: #f4f3ea;
    width: 100%;
    max-width: 110px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: #444e64;
    }
  }

  p {
    color: red;
  }
`;
