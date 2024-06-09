import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 50rem;
  height: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  textarea {
    margin-bottom: 16px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    resize: none;
    height: 80em;
  }

  button {
    padding: 10px 15px;
    width: 50%;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 0 auto;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
