import { useState } from "react";
import { useSelector } from "react-redux";

import Pagination from "../../../layouts/Pagination";
import PostItem from "../PostItem";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  console.log(posts);
  //  현재 display할 게시물 수 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(indexOfLastPost, indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(posts);
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-2xl font-bold mb-4 ">Post List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            username={post.userName}
            date={post.date}
            content={post.content}
          />
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
