import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Pagination from "../../../layouts/Pagination";
import PostItem from "../PostItem";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // 글 목록을 역순으로 정렬
  const reversedPosts = [...posts].reverse();

  // 현재 페이지에 표시할 포스트들 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="h-full min-h-20">
            <Link to={`${post.id}`}>
              <PostItem
                title={post.title}
                username={post.userName}
                date={post.date}
                content={post.content}
              />
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PostList;
