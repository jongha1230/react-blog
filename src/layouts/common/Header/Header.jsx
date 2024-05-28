import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/slices/auth.slice";
import { openModal } from "../../../redux/slices/modal.slice";
import { HeaderContainer } from "./Header.styled";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleOpenModal = (type) => {
    dispatch(openModal(type));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <h1>
        <Link to="/">블로그 이름</Link>
      </h1>
      {isLoggedIn ? (
        <div>
          <button onClick={() => console.log("글쓰기 버튼 클릭")}>
            글쓰기
          </button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <button onClick={() => handleOpenModal("login")}>로그인</button>
      )}
    </HeaderContainer>
  );
}

export default Header;
