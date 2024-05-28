import { useDispatch } from "react-redux";

import { closeModal, openModal } from "../../../redux/slices/modal.slice";
import LoginForm from "../../auth/LoginForm/LoginForm";
import { LoginModalContainer } from "./LoginModal.styled";

const LoginModal = () => {
  const dispatch = useDispatch();

  const handleSwitchToRegister = () => {
    dispatch(openModal("register"));
  };

  return (
    <LoginModalContainer>
      <LoginForm onSwitchToRegister={handleSwitchToRegister} />
      <button onClick={() => dispatch(closeModal())}>취소</button>
    </LoginModalContainer>
  );
};

export default LoginModal;
