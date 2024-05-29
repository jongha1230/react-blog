import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slices/modal.slice";
import AlertModal from "../AlertModal";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import { ModalBackground, ModalContent } from "./ModalContainer.styled";

function ModalContainer() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const modalProps = useSelector((state) => state.modal.modalProps);

  if (!modalType) return null;

  let ModalComponent;

  switch (modalType) {
    case "login":
      ModalComponent = <LoginModal />;
      break;
    case "register":
      ModalComponent = <RegisterModal />;
      break;
    case "alert":
      ModalComponent = <AlertModal message={modalProps} />;
      break;
    default:
      return null;
  }

  return (
    <ModalBackground onClick={() => dispatch(closeModal())}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {ModalComponent}
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalContainer;
