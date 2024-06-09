import styled from "styled-components";
import PostForm from "../../components/posts/PostForm";

function NewPostPage() {
  return (
    <PostFormWrap>
      <PostForm />
    </PostFormWrap>
  );
}

export default NewPostPage;

const PostFormWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
