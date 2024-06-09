function PostItem({ title, username, date, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 overflow-hidden h-full">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="text-sm text-gray-600 mb-2">by {username}</div>
      <div className="text-xs text-gray-400 mb-2">{date}</div>
      <p className="text-gray-800 overflow-ellipsis line-clamp-3">{content}</p>
    </div>
  );
}

export default PostItem;
