import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { openModal } from "../../../redux/slices/modal.slice";
import { addPost } from "../../../redux/slices/post.slice";
import { StyledForm } from "./PostForm.styled";

function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginId = localStorage.getItem("login");
  const userObject = JSON.parse(loginId);
  const { id: userId, name: userName } = userObject;

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    const day = ("0" + newDate.getDate()).slice(-2);
    const date = `${year}-${month}-${day}`;

    if (!title || !content) {
      dispatch(
        openModal({
          modalType: "alert",
          modalProps: "입력창을 모두 작성해주세요.",
        })
      );
      return;
    }

    dispatch(addPost({ id: uuidv4(), title, content, userId, date, userName }));

    event.target.reset();
    navigate("/");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">내용</label>
      <textarea name="content" id="content"></textarea>

      <button type="submit">등록</button>
    </StyledForm>
  );
}

export default PostForm;
