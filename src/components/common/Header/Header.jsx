import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../redux/slices/modal.slice";
import { HeaderContainer } from "./Header.styled";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleOpenModal = (type) => {
    dispatch(openModal(type));
  };
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">블로그 이름</Link>
      </h1>
      {isLoggedIn ? (
        <button onClick={() => console.log("글쓰기 버튼 클릭")}>글쓰기</button>
      ) : (
        <button onClick={() => handleOpenModal("login")}>로그인</button>
      )}
    </HeaderContainer>
  );
}

export default Header;
