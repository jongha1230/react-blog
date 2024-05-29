import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/slices/auth.slice";
import { openModal } from "../../../redux/slices/modal.slice";
import { HeaderContainer } from "./Header.styled";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleOpenModal = (modalType) => {
    dispatch(openModal({ modalType }));
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
          <Link to="/new-post">
            <button>글쓰기</button>
          </Link>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleOpenModal("login")}>로그인</button>
          <button onClick={() => handleOpenModal("register")}>회원가입</button>
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;
