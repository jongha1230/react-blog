import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modal.slice";
import { AlertModalContainer } from "./AlertModal.styled";

function AlertModal({ message }) {
  const dispatch = useDispatch();
  console.log("메시지 받아오기", message);
  return (
    <AlertModalContainer>
      <p>{message}</p>
      <button onClick={() => dispatch(closeModal())}>확인</button>
    </AlertModalContainer>
  );
}

export default AlertModal;
