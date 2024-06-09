// PostDetailPage.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, updatePost } from "../../redux/slices/post.slice";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );
  const currentUser = useSelector((state) => state.auth.user); // 현재 로그인한 사용자 정보
  console.log(currentUser);
  if (!post) {
    return <div className="text-center text-red-600">Post not found</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const handleSaveClick = () => {
    dispatch(
      updatePost({ id: post.id, title: editTitle, content: editContent })
    );
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditTitle("");
    setEditContent("");
  };

  const handleDeleteClick = () => {
    dispatch(deletePost({ postId: post.id, userId: currentUser.id }));
    navigate("/");
  };

  const canEdit = currentUser && currentUser.id === post.userId;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 min-h-[570px] h-full">
        <header className="bg-[#f4f3ea] p-4 rounded-t-lg mb-4 min-h-[50px]">
          <h1 className="text-3xl font-bold text-[#333d51]">
            {isEditing ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full bg-white border border-gray-300 p-2 rounded"
              />
            ) : (
              post.title
            )}
          </h1>
          <p className="text-sm text-gray-600 font-bold min-h-[30px]">
            by {post.userName} on {new Date(post.date).toLocaleDateString()}
          </p>
        </header>
        <div className="text-[#333d51] space-y-4 overflow-y-auto max-h-[400px]">
          {isEditing ? (
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full bg-white border border-gray-300 p-2 rounded min-h-[300px] resize-none"
            />
          ) : (
            <p className="leading-7 min-h-[300px] overflow-y-auto p-3">
              {post.content}
            </p>
          )}
        </div>
        {canEdit && (
          <div className="mt-6 flex justify-end space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveClick}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEditClick}
                  className="bg-[#333d51] text-white py-2 px-4 rounded hover:bg-opacity-75 transition"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
