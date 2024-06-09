import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/auth.slice";
import { closeModal, openModal } from "../../../redux/slices/modal.slice";
import { LoginFormContainer } from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      setError("유효하지 않는 이름 또는 비밀번호입니다.");
      return;
    }

    dispatch(login({ id: user.id, username: user.username }));
    dispatch(closeModal());
  };

  const handleOpenModal = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalType: "register" }));
  };

  return (
    <LoginFormContainer>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleOpenModal}>회원가입</button>
    </LoginFormContainer>
  );
};

export default LoginForm;
