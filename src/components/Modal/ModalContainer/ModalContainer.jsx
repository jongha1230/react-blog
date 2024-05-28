import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slices/modal.slice";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import { ModalBackground, ModalContent } from "./ModalContainer.styled";

function ModalContainer() {
  const dispatch = useDispatch();
  const { modalType } = useSelector((state) => state.modal);

  if (!modalType) return null;

  let ModalComponents;
  if (modalType === "login") {
    ModalComponents = LoginModal;
  } else if (modalType === "register") {
    ModalComponents = RegisterModal;
  }

  return (
    <ModalBackground onClick={() => dispatch(closeModal())}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalComponents />
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalContainer;
