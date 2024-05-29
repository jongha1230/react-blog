import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { openModal } from "../../../redux/slices/modal.slice";
import { addPost } from "../../../redux/slices/post.slice";
import { StyledForm } from "./PostForm.styled";

function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("이거", userId);
    const title = event.target.title.value;
    const content = event.target.content.value;

    if (!title || !content) {
      dispatch(
        openModal({
          modalType: "alert",
          modalProps: "입력창을 모두 작성해주세요.",
        })
      );
      return;
    }

    dispatch(addPost({ id: uuidv4(), title, content, userId }));

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
