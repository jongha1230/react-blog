import LoginForm from "../../auth/LoginForm/LoginForm";
import { LoginModalContainer } from "./LoginModal.styled";

const LoginModal = () => {
  return (
    <LoginModalContainer>
      <LoginForm />
    </LoginModalContainer>
  );
};

export default LoginModal;
