import { useDispatch } from "react-redux";

import { closeModal } from "../../../redux/slices/modal.slice";
import RegisterForm from "../../auth/RegisterForm/RegisterForm";
import { RegisterModalContainer } from "./RegisterModal.styled";

const RegisterModal = () => {
  const dispatch = useDispatch();

  return (
    <RegisterModalContainer>
      <RegisterForm />
      <button onClick={() => dispatch(closeModal())}>취소</button>
    </RegisterModalContainer>
  );
};

export default RegisterModal;
