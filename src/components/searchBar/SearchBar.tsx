import React from "react";

function SearchBar() {
  return (
    <div className="z-10">
      <input
        type="text"
        placeholder="Type keywords here..."
        className="shadow-2xl rounded-2xl p-4 fixed top-2 right-2 text-center h-5 "
      />
    </div>
  );
}

export default SearchBar;
