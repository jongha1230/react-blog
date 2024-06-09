function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  const visiblePageRange = 3; // 현재 페이지 주변에 표시할 페이지 번호의 범위

  // 페이지 번호 생성
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 현재 페이지 주변에 표시할 페이지 번호 계산
  let startPage = currentPage - Math.floor(visiblePageRange / 2);
  let endPage = currentPage + Math.ceil(visiblePageRange / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(startPage + visiblePageRange - 1, pageNumbers.length);
  } else if (endPage > pageNumbers.length) {
    endPage = pageNumbers.length;
    startPage = Math.max(endPage - visiblePageRange + 1, 1);
  }

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="inline-flex -space-x-px">
        {startPage !== 1 && (
          <li>
            <button
              onClick={() => paginate(1)}
              className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 bg-white"
            >
              1
            </button>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <span className="px-3 py-2 leading-tight text-gray-500">...</span>
          </li>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 ${
                currentPage === number ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage < pageNumbers.length - 1 && (
          <li>
            <span className="px-3 py-2 leading-tight text-gray-500">...</span>
          </li>
        )}
        {endPage !== pageNumbers.length && (
          <li>
            <button
              onClick={() => paginate(pageNumbers.length)}
              className="px-3 py-2 leading-tight text-gray-500 border border-gray-300 bg-white"
            >
              {pageNumbers.length}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
