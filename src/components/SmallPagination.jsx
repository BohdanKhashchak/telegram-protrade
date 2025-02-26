const SmallPagination = ({ activeFirst, activeSecond, activeThird }) => {
  return (
    <div
      className={`${activeThird ? "link-paginationThird" : "link-pagination"}`}
    >
      <span className={activeFirst ? "active" : ""}></span>
      <span className={activeSecond ? "active" : ""}></span>
      <span className={activeThird ? "active" : ""}></span>
    </div>
  );
};

export default SmallPagination;
