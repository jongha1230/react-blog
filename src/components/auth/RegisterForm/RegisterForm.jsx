import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/auth.slice";
import { closeModal } from "../../../redux/slices/modal.slice";
import { RegisterFormContainer } from "./RegisterForm.styled";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const { username, password, email } = formData;

    if (!username || !password || !email) {
      setError("모든 항목을 입력 해주세요..");
      return;
    }

    // 저장된 사용자 데이터 가져오기
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 사용자명 중복 확인
    const userExists = storedUsers.some((user) => user.username === username);
    if (userExists) {
      setError("유저 이름이 이미 존재합니다.");
      return;
    }

    // 이메일 중복 확인
    const emailExists = storedUsers.some((user) => user.email === email);
    if (emailExists) {
      setError("이메일이 이미 가입되어있습니다.");
      return;
    }

    // 새로운 사용자 저장
    storedUsers.push({ username, password, email });
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // 로그인 상태로 변경
    dispatch(login({ username }));
    dispatch(closeModal());
  };

  return (
    <RegisterFormContainer>
      <h2>Sign Up</h2>
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
      <button onClick={handleRegister}>회원가입</button>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
