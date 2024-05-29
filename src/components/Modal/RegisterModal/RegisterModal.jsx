import RegisterForm from "../../auth/RegisterForm/RegisterForm";
import { RegisterModalContainer } from "./RegisterModal.styled";

const RegisterModal = () => {
  return (
    <RegisterModalContainer>
      <RegisterForm />
    </RegisterModalContainer>
  );
};

export default RegisterModal;
