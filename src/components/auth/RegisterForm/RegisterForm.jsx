import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { closeModal, openModal } from "../../../redux/slices/modal.slice";
import { RegisterFormContainer } from "./RegisterForm.styled";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nickname: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const EmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailFormat.test(String(email).toLowerCase());
  };

  const handleRegister = () => {
    const { username, password, email, nickname } = formData;

    if (!username || !password || !email || !nickname) {
      setError("모든 항목을 입력 해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      setError("유효한 이메일 주소를 입력 해주세요.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some((user) => user.username === username);
    if (userExists) {
      setError("유저 이름이 이미 존재합니다.");
      return;
    }

    const emailExists = storedUsers.some((user) => user.email === email);
    if (emailExists) {
      setError("이메일이 이미 가입되어있습니다.");
      return;
    }

    const newUser = { id: uuidv4(), username, password, email, nickname };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    dispatch(closeModal());
    dispatch(openModal("login"));
  };

  return (
    <RegisterFormContainer>
      <h2>회원 가입</h2>
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
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nickname"
        placeholder="Nickname"
        value={formData.nickname}
        onChange={handleChange}
      />
      <button onClick={handleRegister}>회원가입</button>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
